import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Upload, MapPin, Calendar, BarChart2 } from "lucide-react";

export default function AdvertisementManagement() {
  const [ads, setAds] = useState([]);
  const [selectedFile, setSelectedFile] = useState(null);
  const [location, setLocation] = useState('');
  const [schedule, setSchedule] = useState('');
  const navigate = useNavigate();

  const handleFileUpload = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleSubmitAd = () => {
    if (selectedFile && location && schedule) {
      setAds([...ads, { file: selectedFile.name, location, schedule }]);
      setSelectedFile(null);
      setLocation('');
      setSchedule('');
    }
  };

  const handleNavigation = (section) => {
    window.dispatchEvent(new CustomEvent("updateSidebar", { detail: section }));
  };

  return (
    <div className="bg-gray-100 min-h-screen p-5">
      <header className="flex justify-center items-center bg-gray-800 text-white p-5 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold">Advertisement Management</h1>
      </header>

      <div className="bg-white p-5 rounded-lg shadow-md mt-5">
        <h3 className="text-lg font-semibold">Upload New Advertisement</h3>
        <input type="file" onChange={handleFileUpload} className="w-full p-2 border border-gray-300 rounded mt-2" />
        <input type="text" placeholder="Enter Location" value={location} onChange={(e) => setLocation(e.target.value)} className="w-full p-2 border border-gray-300 rounded mt-2" />
        <input type="datetime-local" value={schedule} onChange={(e) => setSchedule(e.target.value)} className="w-full p-2 border border-gray-300 rounded mt-2" />
        <button onClick={handleSubmitAd} className="w-full mt-4 bg-indigo-600 text-white p-3 rounded hover:bg-indigo-700">Submit Ad</button>
      </div>

      <div className="bg-white p-5 rounded-lg shadow-md mt-5">
        <h3 className="text-lg font-semibold mb-3">Ad Performance Metrics</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {[{ label: "Uploads", icon: <Upload size={32} />, action: "Uploads" },
            { label: "Locations", icon: <MapPin size={32} />, action: "Locations" },
            { label: "Schedule & Duration", icon: <Calendar size={32} />, action: "Schedule & Duration" },
            { label: "CTR & Conversions", icon: <BarChart2 size={32} />, action: "CTR & Conversions" }].map((item, index) => (
            <div key={index} className="flex flex-col items-center bg-gray-100 p-4 rounded-lg shadow hover:bg-gray-200 cursor-pointer" onClick={() => handleNavigation(item.action)}>
              {item.icon}
              <p className="mt-2 text-sm font-semibold">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
