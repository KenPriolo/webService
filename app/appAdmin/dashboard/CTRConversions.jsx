import { useState } from "react";
import { TrendingUp } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function CTRConversions() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [ctrData, setCtrData] = useState([
    { client: "ABC Corporation", file: "ad1.jpg", views: 5000, clicks: 250, ctr: "5%", conversions: 20 },
    { client: "XYZ Ltd.", file: "ad2.png", views: 8000, clicks: 400, ctr: "5%", conversions: 35 },
  ]);
  
  const [selectedCTR, setSelectedCTR] = useState(null);

  const filteredData = ctrData.filter(data => 
    data.client.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleRowClick = (data) => {
    setSelectedCTR(data);
  };

  return (
    <div className="bg-gray-100 min-h-screen p-5">
      <header className="flex justify-between items-center bg-gray-800 text-white p-5 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold">CTR & Conversions</h1>
        <TrendingUp size={32} />
      </header>
      
      <input
        type="text"
        placeholder="Search by client name..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded my-4"
      />

      <div className="bg-white p-5 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold mb-3">CTR & Conversions Data</h3>
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-blue-500 text-white">
              <th className="p-3 text-left">Client Name</th>
              <th className="p-3 text-left">File Name</th>
              <th className="p-3 text-left">Views</th>
              <th className="p-3 text-left">Clicks</th>
              <th className="p-3 text-left">CTR</th>
              <th className="p-3 text-left">Conversions</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.length > 0 ? (
              filteredData.map((data, index) => (
                <tr key={index} className="border-b hover:bg-gray-100 cursor-pointer" onClick={() => handleRowClick(data)}>
                  <td className="p-3">{data.client}</td>
                  <td className="p-3">{data.file}</td>
                  <td className="p-3">{data.views}</td>
                  <td className="p-3">{data.clicks}</td>
                  <td className="p-3">{data.ctr}</td>
                  <td className="p-3">{data.conversions}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="text-center font-bold p-4">No data matches your search.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {selectedCTR && (
        <div className="bg-white p-5 rounded-lg shadow-md mt-5">
          <h3 className="text-lg font-semibold">CTR & Conversions Details</h3>
          <input type="text" value={selectedCTR.client} readOnly className="w-full p-2 border border-gray-300 rounded mt-2 bg-gray-200" />
          <input type="text" value={selectedCTR.file} readOnly className="w-full p-2 border border-gray-300 rounded mt-2 bg-gray-200" />
          <input type="text" value={selectedCTR.views} readOnly className="w-full p-2 border border-gray-300 rounded mt-2 bg-gray-200" />
          <input type="text" value={selectedCTR.clicks} readOnly className="w-full p-2 border border-gray-300 rounded mt-2 bg-gray-200" />
          <input type="text" value={selectedCTR.ctr} readOnly className="w-full p-2 border border-gray-300 rounded mt-2 bg-gray-200" />
          <input type="text" value={selectedCTR.conversions} readOnly className="w-full p-2 border border-gray-300 rounded mt-2 bg-gray-200" />
        </div>
      )}
    </div>
  );
}