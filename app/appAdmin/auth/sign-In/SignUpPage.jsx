import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../../firebaseConfig";
import { useNavigate } from "react-router-dom"; // Use navigate for navigation

const SignUpPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();
    setError("");

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      console.log("Sign-up successful!");
      navigate("/admin-login"); // Navigate to dashboard after signup
    } catch (error) {
      console.error("Sign-up error:", error.message);
      setError("Error signing up. Please try again.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-green-800 to-red-800 text-white px-4">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg flex flex-col text-gray-900 border-2 border-red-700">
        <h2 className="text-3xl font-bold text-center mb-4 text-red-700">Sign Up for AuAdsTri</h2>

        {error && <p className="text-red-600 text-sm text-center">{error}</p>}

        <form onSubmit={handleSignUp} className="space-y-4">
          <div>
            <label className="block font-medium text-gray-700 mb-2">Email</label>
            <input 
              type="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
              placeholder="Enter your email"
            />
          </div>
          
          <div>
            <label className="block font-medium text-gray-700 mb-2">Password</label>
            <div className="relative">
              <input 
                type={showPassword ? "text" : "password"} 
                value={password} 
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
                placeholder="Enter your password"
              />
              <button 
                type="button" 
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-red-700 text-lg"
              >
                {showPassword ? "🙈" : "👁"}
              </button>
            </div>
          </div>

          <button 
            type="submit" 
            className="w-full py-3 text-lg bg-red-700 text-white rounded-lg hover:bg-red-800 transition"
          >
            Sign Up
          </button>
        </form>

        <p className="text-center text-gray-600 mt-4 text-sm">
          Already have an account?{" "}
          <button 
            onClick={() => navigate("/admin-login")} 
            className="text-green-600 hover:underline"
          >
            Log in
          </button>
        </p>
      </div>
    </div>
  );
};

export default SignUpPage;
