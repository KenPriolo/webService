import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LocationsPage() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [locations, setLocations] = useState([
    { id: 1, client: "ABC Corporation", name: "New York - Times Square" },
    { id: 2, client: "XYZ Ltd.", name: "Los Angeles - Hollywood Blvd" },
    { id: 3, client: "ABC Corporation", name: "Chicago - Millennium Park" },
    { id: 4, client: "XYZ Ltd.", name: "San Francisco - Golden Gate Bridge" }
  ]);

  const handleDelete = (id) => {
    setLocations(locations.filter(location => location.id !== id));
  };

  const filteredLocations = locations.filter(location => 
    location.client.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-gray-100 min-h-screen p-5">
      <header className="flex justify-center items-center bg-gray-800 text-white p-5 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold">Locations Assigned</h1>
      </header>
      
      <input
        type="text"
        placeholder="Search by client name..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded my-4"
      />

      <div className="bg-white p-5 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold mb-3">Uploaded Locations</h3>
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-blue-500 text-white">
              <th className="p-3 text-left">#</th>
              <th className="p-3 text-left">Client Name</th>
              <th className="p-3 text-left">Location Name</th>
              <th className="p-3 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredLocations.length > 0 ? (
              filteredLocations.map((location, index) => (
                <tr key={location.id} className="border-b hover:bg-gray-100">
                  <td className="p-3">{index + 1}</td>
                  <td className="p-3">{location.client}</td>
                  <td className="p-3">{location.name}</td>
                  <td className="p-3">
                    <button 
                      className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                      onClick={() => handleDelete(location.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="text-center font-bold p-4">No locations match your search.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}