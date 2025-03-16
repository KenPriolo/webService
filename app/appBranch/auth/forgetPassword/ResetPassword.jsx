import React, { useState } from "react";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../../../../firebaseConfig"; // Import auth from Firebase config
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setError("");

    try {
      await sendPasswordResetEmail(auth, email); // Use Firebase to send reset email
      setMessage("Password reset email sent! Check your inbox.");
      setTimeout(() => navigate("/branch-login"), 5000); // Redirect to login after 5 seconds
    } catch (error) {
      console.error("Error sending reset email:", error.message);
      setError("Failed to send reset email. Please check your email and try again.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-black to-white text-black px-4">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg flex flex-col border-2 border-black">
        <h2 className="text-3xl font-bold text-center mb-4 text-black">Forgot Password</h2>
        <p className="text-center text-gray-600 mb-6">
          Enter your email address and we'll send you a link to reset your password.
        </p>

        {message && <p className="text-green-600 text-sm text-center">{message}</p>}
        {error && <p className="text-red-600 text-sm text-center">{error}</p>}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block font-medium text-gray-700 mb-2">Email</label>
            <input 
              type="email" 
              name="email"
              value={email} 
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
              placeholder="Enter your email"
            />
          </div>

          <button 
            type="submit" 
            className="w-full py-3 text-lg bg-black text-white rounded-lg hover:bg-gray-800"
          >
            Send Reset Link
          </button>
        </form>

        <p className="text-center text-gray-600 mt-6 text-sm">
          Remember your password?{" "}
          <button 
            onClick={() => navigate("/branch-login")} 
            className="text-black hover:underline"
          >
            Log in
          </button>
        </p>
      </div>
    </div>
  );
};

export default ForgotPassword;
