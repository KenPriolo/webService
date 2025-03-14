import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LocationsPage() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [locations, setLocations] = useState([
    { id: 1, client: "ABC Corporation", name: "New York - Times Square" },
    { id: 2, client: "XYZ Ltd.", name: "Los Angeles - Hollywood Blvd" },
    { id: 3, client: "ABC Corporation", name: "Chicago - Millennium Park" },
    { id: 4, client: "XYZ Ltd.", name: "San Francisco - Golden Gate Bridge" },
  ]);

  const [selectedLocation, setSelectedLocation] = useState(null);
  const [editClient, setEditClient] = useState("");
  const [editLocation, setEditLocation] = useState("");

  const handleEdit = (location) => {
    setSelectedLocation(location);
    setEditClient(location.client);
    setEditLocation(location.name);
  };

  const handleSave = () => {
    setLocations(locations.map((loc) =>
      loc.id === selectedLocation.id
        ? { ...loc, client: editClient, name: editLocation }
        : loc
    ));
    setSelectedLocation(null); // Hide the editor after saving
  };

  const filteredLocations = locations.filter((location) =>
    location.client.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-gray-100 min-h-screen p-5">
      {/* Header */}
      <header className="flex justify-center items-center bg-gray-900 text-white p-5 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-white">Locations Assigned</h1>
      </header>

      {/* Search Input */}
      <input
        type="text"
        placeholder="Search by client name..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full p-3 border border-gray-400 rounded my-4 text-black shadow-sm"
      />

      {/* Locations Table */}
      <div className="bg-white p-5 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold text-black mb-3">Uploaded Locations</h3>
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
                  <td className="p-3 text-black">{index + 1}</td>
                  <td className="p-3 text-black">{location.client}</td>
                  <td className="p-3 text-black">{location.name}</td>
                  <td className="p-3">
                    <button
                      className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600 cursor-pointer"
                      onClick={() => handleEdit(location)}
                    >
                      Edit
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="text-center font-bold p-4 text-black">No locations match your search.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Edit Section - Appears when editing a location */}
      {selectedLocation && (
        <div className="bg-white p-5 rounded-lg shadow-md mt-5">
          <h3 className="text-lg font-semibold text-black">Edit Location Details</h3>
          <label className="block text-black font-medium mt-3">Client Name</label>
          <input
            type="text"
            value={editClient}
            onChange={(e) => setEditClient(e.target.value)}
            className="w-full p-3 border border-gray-400 rounded mt-2 text-black bg-gray-100"
          />

          <label className="block text-black font-medium mt-3">Location Name</label>
          <input
            type="text"
            value={editLocation}
            onChange={(e) => setEditLocation(e.target.value)}
            className="w-full p-3 border border-gray-400 rounded mt-2 text-black bg-gray-100"
          />

          <button
            onClick={handleSave}
            className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition cursor-pointer"
          >
            Save Changes
          </button>
        </div>
      )}
    </div>
  );
}
