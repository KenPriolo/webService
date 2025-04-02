import { useState, useEffect } from "react";
import { CalendarCheck } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { db } from "../../../firebaseConfig";
import { collection, getDocs, doc, updateDoc } from "firebase/firestore";

export default function ScheduleDuration() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [schedules, setSchedules] = useState([]);
  const [selectedSchedule, setSelectedSchedule] = useState(null);
  const [newDuration, setNewDuration] = useState("");

  useEffect(() => {
    const fetchSchedules = async () => {
      const adsCollection = collection(db, "ads");
      const snapshot = await getDocs(adsCollection);
      const adsData = snapshot.docs.map((doc) => ({
        id: doc.id,
        client: doc.data().companyName,
        location: doc.data().address,
        date: new Date(doc.data().createdAt.seconds * 1000).toLocaleDateString(),
        expiry: doc.data().expiryDate ? new Date(doc.data().expiryDate.seconds * 1000).toLocaleDateString() : "N/A",
        duration: doc.data().expiryDate
          ? `${Math.ceil((doc.data().expiryDate.seconds * 1000 - doc.data().createdAt.seconds * 1000) / (1000 * 60 * 60 * 24))} days`
          : "N/A",
      }));
      setSchedules(adsData);
    };

    fetchSchedules();
  }, []);

  const handleRowClick = (schedule) => {
    setSelectedSchedule(schedule);
    setNewDuration(schedule.duration);
  };

  const handleDurationUpdate = async () => {
    // Calculate the new expiry date based on the new duration (in days)
    const newDurationInDays = parseInt(newDuration);
    if (isNaN(newDurationInDays) || newDurationInDays <= 0) {
      alert("Please enter a valid duration.");
      return;
    }

    const currentExpiryDate = selectedSchedule.expiryDate
      ? new Date(selectedSchedule.expiryDate.seconds * 1000)
      : new Date(selectedSchedule.date); // Fallback to the scheduled date if no expiryDate

    // Calculate the new expiry date
    const newExpiryDate = new Date(currentExpiryDate.getTime() + newDurationInDays * 24 * 60 * 60 * 1000);

    // Update the Firestore document
    const adRef = doc(db, "ads", selectedSchedule.id);
    await updateDoc(adRef, {
      expiryDate: newExpiryDate,
    });

    // Update the local state with the new duration and expiry
    setSelectedSchedule({
      ...selectedSchedule,
      expiry: newExpiryDate.toLocaleDateString(),
    });
    setSchedules(schedules.map(schedule =>
      schedule.id === selectedSchedule.id
        ? { ...schedule, expiry: newExpiryDate.toLocaleDateString(), duration: `${newDurationInDays} days` }
        : schedule
    ));
    setNewDuration(""); // Clear the input
    alert("Duration updated successfully!");
  };

  const filteredSchedules = schedules.filter(schedule =>
    schedule.client.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-gray-100 min-h-screen p-5">
      <header className="flex justify-center items-center bg-gray-900 text-white p-5 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-white">Schedule & Duration</h1>
        <CalendarCheck size={32} />
      </header>

      <input
        type="text"
        placeholder="Search by client name..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full p-3 border border-gray-400 rounded my-4 text-black shadow-sm"
      />

      <div className="bg-white p-5 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold text-black mb-3">Scheduled Advertisements</h3>
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-blue-500 text-white">
              <th className="p-3 text-left">Client Name</th>
              <th className="p-3 text-left">Location</th>
              <th className="p-3 text-left">Scheduled Date</th>
              <th className="p-3 text-left">Expiry</th>
              <th className="p-3 text-left">Duration</th>
            </tr>
          </thead>
          <tbody>
            {filteredSchedules.length > 0 ? (
              filteredSchedules.map((schedule) => (
                <tr key={schedule.id} className="border-b hover:bg-gray-100 cursor-pointer">
                  <td className="p-3 text-black" onClick={() => handleRowClick(schedule)}>{schedule.client}</td>
                  <td className="p-3 text-black" onClick={() => handleRowClick(schedule)}>{schedule.location}</td>
                  <td className="p-3 text-black" onClick={() => handleRowClick(schedule)}>{schedule.date}</td>
                  <td className="p-3 text-black" onClick={() => handleRowClick(schedule)}>{schedule.expiry}</td>
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

          <label className="block text-black font-medium mt-3">Expiry Date</label>
          <input 
            type="text" 
            value={selectedSchedule.expiry} 
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
            onClick={handleDurationUpdate}
            className="mt-4 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition cursor-pointer w-full"
          >
            Update Duration
          </button>
        </div>
      )}
    </div>
  );
}
