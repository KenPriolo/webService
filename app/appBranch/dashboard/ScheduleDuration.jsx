// appBranch/ScheduleDuration.jsx
import { useState } from "react";
import { CalendarCheck } from "lucide-react";

export default function ScheduleDuration() {
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

  return (
    <div className="bg-gray-100 min-h-screen p-5">
    {/* Header */}
    <header className="flex justify-center items-center bg-gray-900 text-white p-5 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold text-white"> Schedule & Duration
      </h1>
    </header>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold text-black mb-3">Scheduled Advertisements</h3>
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-blue-500 text-white">
              <th className="p-3 text-left">Client</th>
              <th className="p-3 text-left">File</th>
              <th className="p-3 text-left">Location</th>
              <th className="p-3 text-left">Date</th>
              <th className="p-3 text-left">Duration</th>
            </tr>
          </thead>
          <tbody>
            {schedules.map((schedule) => (
              <tr key={schedule.id} className="border-b hover:bg-gray-100 cursor-pointer" onClick={() => handleRowClick(schedule)}>
                <td className="p-3 text-black">{schedule.client}</td>
                <td className="p-3 text-black">{schedule.file}</td>
                <td className="p-3 text-black">{schedule.location}</td>
                <td className="p-3 text-black">{schedule.date}</td>
                <td className="p-3 text-black">{schedule.duration}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {selectedSchedule && (
        <div className="bg-white p-5 rounded-lg shadow-md mt-5">
          <h3 className="text-lg font-semibold text-black">Edit Duration</h3>
          <input
            type="text"
            placeholder="New Duration"
            value={newDuration}
            onChange={(e) => setNewDuration(e.target.value)}
            className="w-full p-3 border border-gray-400 rounded mt-2 text-black"
          />
          <button onClick={handleUpdateDuration} className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition cursor-pointer w-full">
            Update Duration
          </button>
        </div>
      )}
    </div>
  );
}
