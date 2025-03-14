import React, { useState, useEffect } from "react";

const AdminTicketingSystem = () => {
  const [tickets, setTickets] = useState([]);
  const [selectedTicket, setSelectedTicket] = useState(null);
  const [comment, setComment] = useState("");

  useEffect(() => {
    setTickets([
      {
        id: 1,
        name: "John Doe",
        email: "john@example.com",
        subject: "Login Issue",
        message: "I can't log in to my account.",
        status: "Pending",
        issuedBy: "Customer Support",
        dateIssued: "2025-02-28 14:30",
        comments: [],
      },
      {
        id: 2,
        name: "Jane Smith",
        email: "jane@example.com",
        subject: "Payment Error",
        message: "My payment was not processed.",
        status: "Resolved",
        issuedBy: "Finance Department",
        dateIssued: "2025-02-27 10:15",
        comments: [],
      },
    ]);
  }, []);

  const handleSelectTicket = (ticket) => {
    setSelectedTicket(ticket);
  };

  const handleBack = () => {
    setSelectedTicket(null);
    setComment("");
  };

  const handleResolveTicket = () => {
    setTickets(
      tickets.map((ticket) =>
        ticket.id === selectedTicket.id ? { ...ticket, status: "Resolved" } : ticket
      )
    );
    setSelectedTicket(null);
  };

  const handleAddComment = () => {
    if (comment.trim() !== "") {
      setTickets(
        tickets.map((ticket) =>
          ticket.id === selectedTicket.id
            ? { ...ticket, comments: [...ticket.comments, comment] }
            : ticket
        )
      );
      setComment("");
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen p-5">
      {/* Header */}
      <header className="flex justify-center items-center bg-gray-900 text-white p-5 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-white">Admin Ticketing System</h1>
      </header>

      <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-md mt-6 border border-gray-300">
        {!selectedTicket ? (
          <div>
            <h3 className="text-2xl font-semibold text-black mb-4">Tickets</h3>
            <ul className="space-y-4">
              {tickets.map((ticket) => (
                <li
                  key={ticket.id}
                  className="p-4 bg-gray-100 rounded-lg shadow-md flex justify-between items-center cursor-pointer hover:bg-gray-200 transition"
                  onClick={() => handleSelectTicket(ticket)}
                >
                  <div>
                    <h4 className="text-lg font-semibold text-black">{ticket.subject}</h4>
                    <span className="text-gray-600 text-sm">
                      Created by: {ticket.name} | {ticket.dateIssued}
                    </span>
                  </div>
                  <span
                    className={`px-3 py-1 rounded text-white text-sm font-semibold ${
                      ticket.status === "Pending" ? "bg-yellow-500" : "bg-green-500"
                    }`}
                  >
                    {ticket.status}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <div>
            <h3 className="text-2xl font-semibold text-black mb-4">Ticket Details</h3>
            <p className="text-lg text-black"><strong>Name:</strong> {selectedTicket.name}</p>
            <p className="text-lg text-black"><strong>Email:</strong> {selectedTicket.email}</p>
            <p className="text-lg text-black"><strong>Subject:</strong> {selectedTicket.subject}</p>
            <p className="text-lg text-black"><strong>Message:</strong> {selectedTicket.message}</p>
            <p className="text-lg text-black"><strong>Status:</strong> {selectedTicket.status}</p>
            <p className="text-lg text-black"><strong>Issued By:</strong> {selectedTicket.issuedBy}</p>
            <p className="text-lg text-black"><strong>Date Issued:</strong> {selectedTicket.dateIssued}</p>

            {/* Admin Comments */}
            <div className="mt-6">
              <h3 className="text-lg font-semibold text-black">Admin Comments</h3>
              <ul className="space-y-3 mt-3">
                {selectedTicket.comments.length > 0 ? (
                  selectedTicket.comments.map((cmt, index) => (
                    <li key={index} className="p-3 bg-gray-200 rounded text-black">{cmt}</li>
                  ))
                ) : (
                  <li className="text-gray-500 text-black">No comments yet.</li>
                )}
              </ul>
              <textarea
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder="Write a comment..."
                className="w-full mt-3 p-3 border border-gray-400 rounded text-black bg-gray-100"
              />
              <button
                className="mt-3 w-full bg-green-600 text-white p-3 rounded hover:bg-green-700 transition font-semibold cursor-pointer"
                onClick={handleAddComment}
              >
                Add Comment
              </button>
            </div>

            {/* Action Buttons */}
            {selectedTicket.status !== "Resolved" && (
              <button
                className="mt-4 w-full bg-blue-600 text-white p-3 rounded hover:bg-blue-700 transition font-semibold"
                onClick={handleResolveTicket}
              >
                Mark as Resolved
              </button>
            )}
            <button
              className="mt-3 w-full bg-red-500 text-white p-3 rounded hover:bg-red-600 transition font-semibold cursor-pointer"
              onClick={handleBack}
            >
              Back
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminTicketingSystem;
