import { useState, useEffect } from "react";
import { db } from "../../../firebaseConfig";
import { collection, getDocs } from "firebase/firestore";

export default function LocationsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [locations, setLocations] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState(null);

  useEffect(() => {
    const fetchLocations = async () => {
      const adsRef = collection(db, "ads");
      const snapshot = await getDocs(adsRef);
      const fetchedLocations = snapshot.docs.map((doc) => ({
        id: doc.id,
        client: doc.data().companyName || "Unknown",
        name: doc.data().address || "Unknown",
        address: doc.data().address || "Unknown",
        latitude: doc.data().latitude || "N/A",
        longitude: doc.data().longitude || "N/A"
      }));
      setLocations(fetchedLocations);
    };
    fetchLocations();
  }, []);

  const filteredLocations = locations.filter((location) =>
    location.client.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-gray-100 min-h-screen p-5">
      <header className="flex justify-center items-center bg-gray-900 text-white p-5 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-white">Locations Assigned</h1>
      </header>

      <input
        type="text"
        placeholder="Search by client name..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full p-3 border border-gray-400 rounded my-4 text-black shadow-sm"
      />

      <div className="bg-white p-5 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold text-black mb-3">Uploaded Locations</h3>
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-blue-500 text-white">
              <th className="p-3 text-left">Client Name</th>
              <th className="p-3 text-left">Location Name</th>
            </tr>
          </thead>
          <tbody>
            {filteredLocations.length > 0 ? (
              filteredLocations.map((location) => (
                <tr
                  key={location.id}
                  className="border-b hover:bg-gray-100 cursor-pointer"
                  onClick={() => setSelectedLocation(location)}
                >
                  <td className="p-3 text-black">{location.client}</td>
                  <td className="p-3 text-black">{location.name}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="2" className="text-center font-bold p-4 text-black">No locations match your search.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {selectedLocation && (
        <div className="bg-white p-5 rounded-lg shadow-md mt-5">
          <h3 className="text-lg font-semibold text-black">Location Details</h3>
          <label className="block text-black font-medium mt-3">Client Name</label>
          <input
            type="text"
            value={selectedLocation.client}
            readOnly
            className="w-full p-3 border border-gray-400 rounded mt-2 bg-gray-100 text-black"
          />

          <label className="block text-black font-medium mt-3">Location Name</label>
          <input
            type="text"
            value={selectedLocation.name}
            readOnly
            className="w-full p-3 border border-gray-400 rounded mt-2 bg-gray-100 text-black"
          />

          <label className="block text-black font-medium mt-3">Address</label>
          <input
            type="text"
            value={selectedLocation.address}
            readOnly
            className="w-full p-3 border border-gray-400 rounded mt-2 bg-gray-100 text-black"
          />

          <label className="block text-black font-medium mt-3">Latitude</label>
          <input
            type="text"
            value={selectedLocation.latitude}
            readOnly
            className="w-full p-3 border border-gray-400 rounded mt-2 bg-gray-100 text-black"
          />

          <label className="block text-black font-medium mt-3">Longitude</label>
          <input
            type="text"
            value={selectedLocation.longitude}
            readOnly
            className="w-full p-3 border border-gray-400 rounded mt-2 bg-gray-100 text-black"
          />
        </div>
      )}
    </div>
  );
}