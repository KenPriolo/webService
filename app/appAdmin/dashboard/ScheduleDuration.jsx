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
      <header className="flex justify-between items-center bg-gray-800 text-white p-5 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold">Schedule & Duration</h1>
        <CalendarCheck size={32} />
      </header>
      
      <input
        type="text"
        placeholder="Search by client name..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded my-4"
      />

      <div className="bg-white p-5 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold mb-3">Scheduled Advertisements</h3>
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
                <tr key={schedule.id} className="border-b hover:bg-gray-100 cursor-pointer" onClick={() => handleRowClick(schedule)}>
                  <td className="p-3">{schedule.client}</td>
                  <td className="p-3">{schedule.file}</td>
                  <td className="p-3">{schedule.location}</td>
                  <td className="p-3">{schedule.date}</td>
                  <td className="p-3">{schedule.duration}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="text-center font-bold p-4">No schedules match your search.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {selectedSchedule && (
        <div className="bg-white p-5 rounded-lg shadow-md mt-5">
          <h3 className="text-lg font-semibold">Edit Schedule Duration</h3>
          <input type="text" value={selectedSchedule.client} readOnly className="w-full p-2 border border-gray-300 rounded mt-2 bg-gray-200" />
          <input type="text" value={selectedSchedule.file} readOnly className="w-full p-2 border border-gray-300 rounded mt-2 bg-gray-200" />
          <input type="text" value={selectedSchedule.location} readOnly className="w-full p-2 border border-gray-300 rounded mt-2 bg-gray-200" />
          <input type="text" value={selectedSchedule.date} readOnly className="w-full p-2 border border-gray-300 rounded mt-2 bg-gray-200" />
          <input type="text" placeholder="New Duration (e.g., 10 days)" value={newDuration} onChange={(e) => setNewDuration(e.target.value)} className="w-full p-2 border border-gray-300 rounded mt-2" />
          <button onClick={handleUpdateDuration} className="mt-2 w-full bg-green-600 text-white p-2 rounded hover:bg-green-700">Update Duration</button>
        </div>
      )}
    </div>
  );
}