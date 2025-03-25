import React, { useState } from "react";
import { useSidebar } from "../components/ui/SidebarContext";
import { db } from "../../../firebaseConfig";
import { addDoc, collection, Timestamp } from "firebase/firestore";
import { getAuth } from "firebase/auth";

export default function AdvertisementManagement() {
  const { isCollapsed } = useSidebar();
  const [companyName, setCompanyName] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [schedule, setSchedule] = useState("");
  const [address, setAddress] = useState("");
  const [isLoading, setIsLoading] = useState(false); // Loading state

  const getUserId = () => {
    const auth = getAuth();
    const user = auth.currentUser;
    return user ? user.uid : null;
  };

  const handleSubmitAd = async () => {
    const userId = getUserId();
    if (!userId) {
      alert("Please log in to submit an advertisement.");
      return;
    }

    if (companyName && selectedFile && schedule && address) {
      try {
        setIsLoading(true); // Start loading

        const formData = new FormData();
        formData.append("file", selectedFile);
        formData.append("upload_preset", "yp3oxvpp");
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

        const adsRef = collection(db, "client_web", userId, "ads");
        const newAd = {
          companyName,
          adFileUrl: fileUrl,
          schedule,
          address,
          createdAt: Timestamp.now(),
          expiryDate: new Date(schedule),
        };

        await addDoc(adsRef, newAd);

        setCompanyName("");
        setSelectedFile(null);
        setSchedule("");
        setAddress("");
        alert("Ad successfully uploaded!");
      } catch (error) {
        console.error("Error uploading ad:", error);
        alert("Failed to upload advertisement. Please try again.");
      } finally {
        setIsLoading(false); // Stop loading
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
            disabled={isLoading}
          />
          <input
            type="file"
            onChange={(e) => setSelectedFile(e.target.files[0])}
            className="w-full p-3 border border-gray-400 rounded mt-2 text-black"
            disabled={isLoading}
          />
          <input
            type="text"
            placeholder="Enter Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="w-full p-3 border border-gray-400 rounded mt-2 text-black"
            disabled={isLoading}
          />
          <input
            type="date"
            value={schedule}
            onChange={(e) => setSchedule(e.target.value)}
            className="w-full p-3 border border-gray-400 rounded mt-2 text-black"
            disabled={isLoading}
          />

          <button
            onClick={handleSubmitAd}
            className={`w-full mt-4 bg-blue-900 text-white p-3 rounded shadow-md hover:bg-blue-800 transition ${
              isLoading ? "opacity-70 cursor-not-allowed" : ""
            }`}
            disabled={isLoading}
          >
            {isLoading ? "Uploading..." : "Submit Ad"}
          </button>

          {isLoading && (
            <p className="text-center text-sm text-blue-900 mt-2">Please wait, your ad is being uploaded...</p>
          )}
        </div>
      </div>
    </div>
  );
}
