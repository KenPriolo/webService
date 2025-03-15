import React, { useState } from "react";

export default function TicketingSystem() {
  const [tickets, setTickets] = useState([
    {
      id: 1,
      subject: "Ad Display Issue",
      message: "My ad is not displaying properly.",
      status: "Pending",
    },
  ]);

  const handleResolve = (id) => {
    setTickets(
      tickets.map((ticket) =>
        ticket.id === id ? { ...ticket, status: "Resolved" } : ticket
      )
    );
  };

  return (
    <div className="bg-gray-100 min-h-screen p-5">
      {/* Header */}
      <header className="flex justify-center items-center bg-gray-900 text-white p-5 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-white">Ticketing System</h1>
      </header>
      <div className="bg-white p-6 rounded-lg shadow-md mt-5 border border-gray-300">
        <h3 className="text-lg font-semibold text-black mb-3">Support Tickets</h3>
        <ul className="space-y-4">
          {tickets.map((ticket) => (
            <li
              key={ticket.id}
              className="p-4 bg-gray-100 rounded-lg shadow-md flex justify-between items-center"
            >
              <div>
                <h4 className="text-lg font-semibold text-black">{ticket.subject}</h4>
                <p className="text-sm text-black">{ticket.message}</p>
                <span
                  className={`px-3 py-1 rounded text-white text-sm font-semibold ${
                    ticket.status === "Pending" ? "bg-yellow-500" : "bg-green-500"
                  }`}
                >
                  {ticket.status}
                </span>
              </div>
              {ticket.status === "Pending" && (
                <button
                  className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                  onClick={() => handleResolve(ticket.id)}
                >
                  Resolve
                </button>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
