import { useState } from "react";
import { CalendarCheck } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function ScheduleDuration() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [schedules, setSchedules] = useState([
    { id: 1, client: "ABC Corporation", file: "ad1.jpg", location: "New York", date: "2025-03-01", duration: "10 days" },
    { id: 2, client: "XYZ Ltd.", file: "ad2.png", location: "Los Angeles", date: "2025-03-05", duration: "15 days" },
  ]);
  const [selectedSchedule, setSelectedSchedule] = useState(null);
  const [newDuration, setNewDuration] = useState("");

  const handleRowClick = (schedule) => {
    setSelectedSchedule(schedule);
    setNewDuration(schedule.duration);
  };

  const handleUpdateDuration = () => {
    if (selectedSchedule && newDuration) {
      setSchedules(
        schedules.map((schedule) =>
          schedule.id === selectedSchedule.id
            ? { ...schedule, duration: newDuration }
            : schedule
        )
      );
      setSelectedSchedule(null);
      setNewDuration("");
    }
  };

  const filteredSchedules = schedules.filter(schedule =>
    schedule.client.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-gray-100 min-h-screen p-5">
      {/* Header */}
      <header className="flex justify-between items-center bg-gray-800 text-white p-5 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-white">Schedule & Duration</h1>
        <CalendarCheck size={32} />
      </header>
      
      {/* Search Input */}
      <input
        type="text"
        placeholder="Search by client name..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full p-3 border border-gray-400 rounded my-4 text-black shadow-sm"
      />

      {/* Schedules Table */}
      <div className="bg-white p-5 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold text-black mb-3">Scheduled Advertisements</h3>
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-blue-500 text-white">
              <th className="p-3 text-left">Client Name</th>
              <th className="p-3 text-left">File Name</th>
              <th className="p-3 text-left">Location</th>
              <th className="p-3 text-left">Scheduled Date</th>
              <th className="p-3 text-left">Duration</th>
            </tr>
          </thead>
          <tbody>
            {filteredSchedules.length > 0 ? (
              filteredSchedules.map((schedule) => (
                <tr key={schedule.id} className="border-b hover:bg-gray-100 cursor-pointer">
                  <td className="p-3 text-black" onClick={() => handleRowClick(schedule)}>{schedule.client}</td>
                  <td className="p-3 text-black" onClick={() => handleRowClick(schedule)}>{schedule.file}</td>
                  <td className="p-3 text-black" onClick={() => handleRowClick(schedule)}>{schedule.location}</td>
                  <td className="p-3 text-black" onClick={() => handleRowClick(schedule)}>{schedule.date}</td>
                  <td className="p-3 text-black" onClick={() => handleRowClick(schedule)}>{schedule.duration}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="text-center font-bold p-4 text-black">No schedules match your search.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Edit Section - Appears when a schedule is selected */}
      {selectedSchedule && (
        <div className="bg-white p-5 rounded-lg shadow-md mt-5">
          <h3 className="text-lg font-semibold text-black">Edit Schedule Duration</h3>

          <label className="block text-black font-medium mt-3">Client Name</label>
          <input 
            type="text" 
            value={selectedSchedule.client} 
            readOnly 
            className="w-full p-3 border border-gray-400 rounded mt-2 bg-gray-100 text-black"
          />

          <label className="block text-black font-medium mt-3">File Name</label>
          <input 
            type="text" 
            value={selectedSchedule.file} 
            readOnly 
            className="w-full p-3 border border-gray-400 rounded mt-2 bg-gray-100 text-black"
          />

          <label className="block text-black font-medium mt-3">Location</label>
          <input 
            type="text" 
            value={selectedSchedule.location} 
            readOnly 
            className="w-full p-3 border border-gray-400 rounded mt-2 bg-gray-100 text-black"
          />

          <label className="block text-black font-medium mt-3">Scheduled Date</label>
          <input 
            type="text" 
            value={selectedSchedule.date} 
            readOnly 
            className="w-full p-3 border border-gray-400 rounded mt-2 bg-gray-100 text-black"
          />

          <label className="block text-black font-medium mt-3">New Duration</label>
          <input 
            type="text" 
            placeholder="New Duration (e.g., 10 days)" 
            value={newDuration} 
            onChange={(e) => setNewDuration(e.target.value)} 
            className="w-full p-3 border border-gray-400 rounded mt-2 text-black bg-white"
          />

          <button 
            onClick={handleUpdateDuration} 
            className="mt-4 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition cursor-pointer w-full"
          >
            Update Duration
          </button>
        </div>
      )}
    </div>
  );
}
