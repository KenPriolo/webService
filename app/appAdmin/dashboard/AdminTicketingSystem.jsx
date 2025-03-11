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
        comments: []
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
        comments: []
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
    setTickets(tickets.map(ticket => 
      ticket.id === selectedTicket.id ? { ...ticket, status: "Resolved" } : ticket
    ));
    setSelectedTicket(null);
  };

  const handleAddComment = () => {
    if (comment.trim() !== "") {
      setTickets(tickets.map(ticket =>
        ticket.id === selectedTicket.id
          ? { ...ticket, comments: [...ticket.comments, comment] }
          : ticket
      ));
      setComment("");
    }
  };

  return (
    <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-xl font-bold text-center mb-4">Admin Ticketing System</h2>
      {!selectedTicket ? (
        <div>
          <h3 className="text-lg font-semibold mb-2">Tickets</h3>
          <ul className="space-y-3">
            {tickets.map(ticket => (
              <li key={ticket.id} className="p-4 bg-gray-100 rounded-lg shadow-md flex justify-between cursor-pointer hover:bg-gray-200" onClick={() => handleSelectTicket(ticket)}>
                <div>
                  <strong>{ticket.subject}</strong> <br />
                  <span className="text-gray-600 text-sm">Created by: {ticket.name} | {ticket.dateIssued}</span>
                </div>
                <span className={`px-3 py-1 rounded text-white ${ticket.status === "Pending" ? "bg-yellow-500" : "bg-green-500"}`}>{ticket.status}</span>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div>
          <h3 className="text-lg font-semibold mb-2">Ticket Details</h3>
          <p><strong>Name:</strong> {selectedTicket.name}</p>
          <p><strong>Email:</strong> {selectedTicket.email}</p>
          <p><strong>Subject:</strong> {selectedTicket.subject}</p>
          <p><strong>Message:</strong> {selectedTicket.message}</p>
          <p><strong>Status:</strong> {selectedTicket.status}</p>
          <p><strong>Issued By:</strong> {selectedTicket.issuedBy}</p>
          <p><strong>Date Issued:</strong> {selectedTicket.dateIssued}</p>

          <div className="mt-4">
            <h3 className="text-md font-semibold">Admin Comments</h3>
            <ul className="space-y-2 mt-2">
              {selectedTicket.comments.length > 0 ? (
                selectedTicket.comments.map((cmt, index) => (
                  <li key={index} className="p-2 bg-gray-200 rounded">{cmt}</li>
                ))
              ) : (
                <li className="text-gray-500">No comments yet.</li>
              )}
            </ul>
            <textarea
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="Write a comment..."
              className="w-full mt-3 p-2 border rounded"
            />
            <button className="mt-2 w-full bg-green-600 text-white p-2 rounded hover:bg-green-700" onClick={handleAddComment}>Add Comment</button>
          </div>

          {selectedTicket.status !== "Resolved" && (
            <button className="mt-4 w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700" onClick={handleResolveTicket}>Mark as Resolved</button>
          )}
          <button className="mt-2 w-full bg-red-500 text-white p-2 rounded hover:bg-red-600" onClick={handleBack}>Back</button>
        </div>
      )}
    </div>
  );
};

export default AdminTicketingSystem;