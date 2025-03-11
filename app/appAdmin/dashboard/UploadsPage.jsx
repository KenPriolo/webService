import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function UploadsPage() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [ads, setAds] = useState([
    { client: 'ABC Corp', file: 'ad1.jpg', location: 'New York', schedule: '2025-03-01 10:00', expiry: '2025-03-10 23:59' },
    { client: 'XYZ Ltd', file: 'ad2.png', location: 'Los Angeles', schedule: '2025-03-05 15:30', expiry: '2025-03-15 23:59' },
    { client: 'ABC Corp', file: 'ad3.gif', location: 'Chicago', schedule: '2025-03-10 12:00', expiry: '2025-03-20 23:59' },
  ]);

  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedAd, setSelectedAd] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDate(new Date());
    }, 60000);
    return () => clearInterval(interval);
  }, []);

  const filteredAds = ads.filter(ad => 
    ad.client.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAdClick = (ad) => {
    setSelectedAd(ad);
  };

  return (
    <div className="bg-gray-100 min-h-screen p-5">
      <header className="flex justify-center items-center bg-gray-800 text-white p-5 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold">Uploaded Advertisements</h1>
      </header>

      <div className="bg-white p-5 rounded-lg shadow-md mt-5">
        <input
          type="text"
          placeholder="Search by Client Name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded mb-4"
        />

        <h3 className="text-lg font-semibold mb-3">List of Uploaded Ads</h3>
        <ul className="space-y-3">
          {filteredAds.map((ad, index) => {
            const isExpired = new Date(ad.expiry) < currentDate;
            return (
              <li key={index} className={`p-4 rounded-lg shadow-md flex justify-between cursor-pointer ${isExpired ? 'bg-red-200 text-red-700' : 'bg-gray-100 hover:bg-gray-200'}`} onClick={() => handleAdClick(ad)}>
                <span className="font-bold">{ad.client}</span>
                <span>{ad.file}</span>
                <span>{ad.location}</span>
                <span><strong>Start:</strong> {ad.schedule}</span>
                <span><strong>Expiry:</strong> {ad.expiry}</span>
              </li>
            );
          })}
        </ul>
      </div>

      {selectedAd && (
        <div className="bg-white p-5 rounded-lg shadow-md mt-5">
          <h3 className="text-lg font-semibold">Advertisement Details</h3>
          <input type="text" value={selectedAd.client} readOnly className="w-full p-2 border border-gray-300 rounded mt-2 bg-gray-200" />
          <input type="text" value={selectedAd.file} readOnly className="w-full p-2 border border-gray-300 rounded mt-2 bg-gray-200" />
          <input type="text" value={selectedAd.location} readOnly className="w-full p-2 border border-gray-300 rounded mt-2 bg-gray-200" />
          <input type="text" value={selectedAd.schedule} readOnly className="w-full p-2 border border-gray-300 rounded mt-2 bg-gray-200" />
          <input type="text" value={selectedAd.expiry} readOnly className="w-full p-2 border border-gray-300 rounded mt-2 bg-gray-200" />
        </div>
      )}
    </div>
  );
}
