import { useState } from "react";
import { CheckCircle, XCircle, Video } from "lucide-react";
import GoogleMapComponent from "../../RealTimeMap.jsx";

const taxiFleetData = [
  { id: 1, driver: "John Doe", location: "Downtown", status: "Online" },
  { id: 2, driver: "Jane Smith", location: "Airport", status: "Offline" },
  { id: 3, driver: "Michael Brown", location: "City Center", status: "Online" },
  { id: 4, driver: "Emily Johnson", location: "Suburbs", status: "Offline" },
];

export default function TaxiFleetManagement() {
  const [taxis, setTaxis] = useState(taxiFleetData);

  // Count Online, Offline, and Running Ads (Assuming Online means running ads)
  const onlineTaxis = taxis.filter((taxi) => taxi.status === "Online").length;
  const offlineTaxis = taxis.filter((taxi) => taxi.status === "Offline").length;
  const runningAds = onlineTaxis; // Assuming "Online" taxis are running ads

  return (
    <div className="bg-gray-100 min-h-screen p-5">
      {/* Header */}
      <header className="flex justify-center items-center bg-gray-900 text-white p-5 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-white">Taxi Fleet Management</h1>
      </header>

      {/* Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-5">
        {/* Online Taxis */}
        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-300 flex flex-col items-center">
          <CheckCircle size={40} className="text-green-500" />
          <h3 className="text-xl font-semibold text-black mt-3">Online Taxis</h3>
          <p className="text-3xl font-bold text-black">{onlineTaxis}</p>
        </div>

        {/* Offline Taxis */}
        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-300 flex flex-col items-center">
          <XCircle size={40} className="text-red-500" />
          <h3 className="text-xl font-semibold text-black mt-3">Offline Taxis</h3>
          <p className="text-3xl font-bold text-black">{offlineTaxis}</p>
        </div>

        {/* Running Ads */}
        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-300 flex flex-col items-center">
          <Video size={40} className="text-blue-500" />
          <h3 className="text-xl font-semibold text-black mt-3">Running Ads</h3>
          <p className="text-3xl font-bold text-black">{runningAds}</p>
        </div>
      </div>

      {/* Real-time Location Tracking */}
      <div className="mt-10 bg-white p-6 rounded-lg shadow-md border border-gray-300">
        <h2 className="text-xl font-semibold text-black mb-4">Real-time Location Tracking</h2>
        <GoogleMapComponent taxis={taxis} />
      </div>
    </div>
  );
}
