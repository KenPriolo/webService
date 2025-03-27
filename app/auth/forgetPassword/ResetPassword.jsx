import { useNavigate } from "react-router-dom";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../../../firebaseConfig";
import { useState } from "react";

const ForgotPassword = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setError("");
    try {
      await sendPasswordResetEmail(auth, email);
      setMessage("Password reset email sent! Check your inbox.");
      setTimeout(() => navigate("/login"), 4000); // Navigate to login after 4 seconds
    } catch (err) {
      setError("Failed to send reset email.");
    }
  };

  return (
    <div className="flex items-center justify-center h-full">
      <form onSubmit={handleSubmit} className="flex flex-col justify-between h-[400px] space-y-4 w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-blue-900 mb-6">Forgot Password</h2>
        <div className="space-y-6">
          <p className="text-center text-sm mb-4">Enter your email to reset your password.</p>
          {message && <p className="text-green-600 text-sm text-center mb-2">{message}</p>}
          {error && <p className="text-red-600 text-sm text-center mb-2">{error}</p>}

          <div>
            <label className="block text-sm font-medium text-gray-700">Email Address</label>
            <input
              type="email"
              className="w-full p-3 rounded-md border border-gray-300 text-black"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
        </div>

        <div className="space-y-4 mt-6">
          <div className="flex justify-between">
            <button onClick={() => navigate("/")} className="bg-blue-900 text-white px-6 py-2 rounded-md">Home</button>
            <button type="submit" className="bg-blue-900 text-white px-6 py-2 rounded-md">Send Link</button>
          </div>

          <p className="text-center text-blue-900 text-sm">
            Remember your password?{" "}
            <button type="button" onClick={() => navigate("/login")} className="underline">Log in</button>
          </p>
        </div>
      </form>
    </div>
  );
};

export default ForgotPassword;
