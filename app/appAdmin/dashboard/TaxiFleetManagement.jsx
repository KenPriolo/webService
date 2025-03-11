import { useState } from "react";
import { MapPin, CheckCircle, XCircle } from "lucide-react";
import GoogleMapComponent from "../../RealTimeMap.jsx";




const taxiFleetData = [
  { id: 1, driver: "John Doe", location: "Downtown", status: "Online" },
  { id: 2, driver: "Jane Smith", location: "Airport", status: "Offline" },
  { id: 3, driver: "Michael Brown", location: "City Center", status: "Online" },
  { id: 4, driver: "Emily Johnson", location: "Suburbs", status: "Offline" },
];

export default function TaxiFleetManagement() {
  const [taxis, setTaxis] = useState(taxiFleetData);

  return (
    <div className="bg-gray-100 min-h-screen p-5">
      <header className="flex justify-center items-center bg-gray-800 text-white p-5 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold">Taxi Fleet Management</h1>
      </header>

      {/* Active Taxis List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">
        {taxis.map((taxi) => (
          <div key={taxi.id} className="bg-white p-5 rounded-lg shadow-md flex flex-col gap-2">
            <h3 className="text-lg font-semibold">Driver: {taxi.driver}</h3>
            <p className="text-gray-600">Location: {taxi.location}</p>
            <div className="flex items-center gap-2">
              {taxi.status === "Online" ? (
                <CheckCircle size={20} className="text-green-500" />
              ) : (
                <XCircle size={20} className="text-red-500" />
              )}
              <span className="font-bold">{taxi.status}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Real-time Location Tracking */}
      <div className="mt-10 bg-white p-5 rounded-lg shadow-md">
        <h2 className="text-lg font-semibold mb-3">Real-time Location Tracking</h2>
        <GoogleMapComponent taxis={taxis} />
      </div>
    </div>
  );
}
