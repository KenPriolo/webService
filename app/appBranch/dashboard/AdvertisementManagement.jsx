import React, { useState } from "react";
import { useSidebar } from "../components/ui/SidebarContext";
import { db } from "../../../firebaseConfig";
import { addDoc, collection, Timestamp, getDocs } from "firebase/firestore";
import { getAuth } from "firebase/auth";  // Import Firebase Authentication to get the user ID

export default function AdvertisementManagement() {
  const { isCollapsed } = useSidebar();
  const [companyName, setCompanyName] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [schedule, setSchedule] = useState("");  // Will store the date value (without time)
  const [address, setAddress] = useState(""); // New state for the address field

  // Function to get the logged-in user's ID
  const getUserId = () => {
    const auth = getAuth();
    const user = auth.currentUser;  // Get the current logged-in user
    return user ? user.uid : null;  // Return user ID if logged in, otherwise return null
  };

  const handleSubmitAd = async () => {
    const userId = getUserId();
    if (!userId) {
      alert("Please log in to submit an advertisement.");
      return;
    }

    if (companyName && selectedFile && schedule && address) { // Make sure all required fields are filled
      try {
        // Upload video to Cloudinary
        const formData = new FormData();
        formData.append("file", selectedFile);
        formData.append("upload_preset", "yp3oxvpp");  // Cloudinary preset for video upload
        formData.append("resource_type", "video");
        formData.append("chunk_size", "6000000");

        const uploadResponse = await fetch("https://api.cloudinary.com/v1_1/dafdsqf6h/video/upload", {
          method: "POST",
          body: formData,
        });

        if (!uploadResponse.ok) {
          throw new Error("Failed to upload video to Cloudinary");
        }

        const uploadData = await uploadResponse.json();
        const fileUrl = uploadData.secure_url;

        // Get the reference to the user's ads collection
        const adsRef = collection(db, "client_web", userId, "ads");  // Use the userId dynamically

        // Create the ad data object
        const newAd = {
          companyName,
          adFileUrl: fileUrl,
          schedule,
          address,  // Add the address field here
          createdAt: Timestamp.now(),  // Created at the time of submission
          expiryDate: new Date(schedule), // Assuming expiry date is the same as schedule
        };

        // Save the ad data to Firestore under the userId path (client_web/{userId}/ads)
        await addDoc(adsRef, newAd);

        // Clear form fields after submission
        setCompanyName("");
        setSelectedFile(null);
        setSchedule("");
        setAddress(""); // Clear the address field
        alert("Ad successfully uploaded!");

      } catch (error) {
        console.error("Error uploading ad:", error);
        alert("Failed to upload advertisement. Please try again.");
      }
    } else {
      alert("Please fill all required fields.");
    }
  };

  return (
    <div className={`min-h-screen relative transition-all duration-300 ${isCollapsed ? 'pl-5' : 'pl-0'}`}>
      <div className="absolute inset-0 bg-cover bg-center z-0" style={{ backgroundImage: "url('../../../../assets/geo.jpg')" }}></div>
      <div className="absolute inset-0 bg-black opacity-70 z-0"></div>
      <div className="relative z-10 p-5">
        {/* Header */}
        <header className="flex justify-center items-center bg-white text-blue-900 p-5 rounded-lg shadow-md">
          <h1 className="text-2xl font-bold">Advertisement Management</h1>
        </header>

        <div className="bg-white p-6 rounded-lg shadow-md mt-5 border border-gray-300">
          <h3 className="text-lg font-semibold text-blue-900 mb-3">Upload New Advertisement</h3>
          <input
            type="text"
            placeholder="Enter Company Name"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
            className="w-full p-3 border border-gray-400 rounded mt-2 text-black"
          />
          <input
            type="file"
            onChange={(e) => setSelectedFile(e.target.files[0])}
            className="w-full p-3 border border-gray-400 rounded mt-2 text-black"
          />
          <input
            type="text"
            placeholder="Enter Address"  // Address input field
            value={address}
            onChange={(e) => setAddress(e.target.value)}  // Update address on input change
            className="w-full p-3 border border-gray-400 rounded mt-2 text-black"
          />
          {/* Date input without time */}
          <input
            type="date"
            value={schedule}
            onChange={(e) => setSchedule(e.target.value)}  // Store only the date (no time)
            className="w-full p-3 border border-gray-400 rounded mt-2 text-black"
          />
          <button
            onClick={handleSubmitAd}
            className="w-full mt-4 bg-blue-900 text-white p-3 rounded shadow-md hover:bg-blue-800 transition"
          >
            Submit Ad
          </button>
        </div>
      </div>
    </div>
  );
}
