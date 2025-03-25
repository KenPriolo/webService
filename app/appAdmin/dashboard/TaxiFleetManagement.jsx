import { useState, useEffect } from "react";
import { CheckCircle, Video, MapPin } from "lucide-react";
import GoogleMapComponent from "../../RealTimeMap.jsx";
import { db } from "../../../firebaseConfig";
import { collectionGroup, onSnapshot, collection, getDocs } from "firebase/firestore";

export default function TaxiFleetManagement() {
  const [taxis, setTaxis] = useState([]);
  const [geofenceCount, setGeofenceCount] = useState(0);

  useEffect(() => {
    // Real-time listener for tabletDevice documents
    const unsubTaxis = onSnapshot(
      collectionGroup(db, "tabletDevice"),
      (snapshot) => {
        const fetchedTaxis = snapshot.docs.map((doc) => {
          const data = doc.data();
          return {
            id: doc.id,
            driverName: data.driverName || "Unknown",
            assignedTablet: data.assignedTablet || "N/A",
            isOnline: data.isOnline || false,
            pairedAt: data.pairedAt || null,
          };
        });
        setTaxis(fetchedTaxis);
      }
    );

    const fetchGeofences = async () => {
      const geoRef = collection(db, "ads");
      const snapshot = await getDocs(geoRef);
      setGeofenceCount(snapshot.size);
    };

    fetchGeofences();

    return () => unsubTaxis();
  }, []);

  const onlineTaxis = taxis.filter((taxi) => taxi.isOnline === true).length;
  const runningAds = onlineTaxis;

  return (
    <div className="bg-gray-100 min-h-screen p-5">
      <header className="flex justify-center items-center bg-gray-900 text-white p-5 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-white">Taxi Fleet Management</h1>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-5">
        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-300 flex flex-col items-center hover:scale-105 transition">
          <CheckCircle size={40} className="text-green-500" />
          <h3 className="text-xl font-semibold text-black mt-3">Online Taxis</h3>
          <p className="text-3xl font-bold text-black">{onlineTaxis}</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-300 flex flex-col items-center hover:scale-105 transition">
          <MapPin size={40} className="text-indigo-500" />
          <h3 className="text-xl font-semibold text-black mt-3">Geofence Areas</h3>
          <p className="text-3xl font-bold text-black">{geofenceCount}</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-300 flex flex-col items-center hover:scale-105 transition">
          <Video size={40} className="text-blue-500" />
          <h3 className="text-xl font-semibold text-black mt-3">Running Ads</h3>
          <p className="text-3xl font-bold text-black">{runningAds}</p>
        </div>
      </div>

      <div className="mt-10 bg-white p-6 rounded-lg shadow-md border border-gray-300">
        <h2 className="text-xl font-semibold text-black mb-4">Real-time Location Tracking</h2>
        <GoogleMapComponent taxis={taxis} />
      </div>
    </div>
  );
}
