import React, { useState } from "react";
import {
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../../../../firebaseConfig";
import { useNavigate } from "react-router-dom"; // React Router for Web

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate(); // ✅ React Router for navigation

  const handleLogin = async () => {
    setError("");
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log("Login successful!");
      navigate("/branch-dashboard"); // ✅ Correct way to navigate in React Web
    } catch (error) {
      console.error("Login error:", error.message);
      setError("Invalid email or password. Please try again.");
    }
  };

  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      console.log("Google Login successful!");
      navigate("/branch-dashboard"); // ✅ Correct way to navigate in React Web
    } catch (error) {
      console.error("Google Login error:", error.message);
      setError("Failed to sign in with Google. Please try again.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-green-800 to-red-800 px-4">
      <div className="w-full max-w-md bg-white p-10 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-center mb-4">Login to AuAdsTri</h2>

        {error && <p className="text-red-600 text-sm text-center">{error}</p>}

        <div className="space-y-5">
          <div>
            <label className="block font-medium text-gray-700 mb-2">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600"
            />
          </div>

          <div>
            <label className="block font-medium text-gray-700 mb-2">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600"
            />
          </div>

          <div className="text-right">
            <button
              onClick={() => navigate("/branch_forget_password")}
              className="text-green-600 hover:underline text-sm"
            >
              Forgot password?
            </button>
          </div>

          <div className="space-y-3">
            <button onClick={handleLogin} className="w-full bg-red-600 text-white py-3 rounded-lg shadow-lg">
              Sign in
            </button>

            <button
              onClick={handleGoogleLogin}
              className="w-full bg-white border-2 border-red-600 py-3 rounded-lg shadow-lg flex items-center justify-center"
            >
              <img
                src="https://img.icons8.com/color/24/000000/google-logo.png"
                alt="Google Logo"
                className="w-6 h-6 mr-2"
              />
              <span className="text-red-600 text-lg font-bold">Sign in with Google</span>
            </button>
          </div>
        </div>

        <p className="text-center text-gray-600 mt-6 text-sm">
          New to AuAdsTri?{" "}
          <button onClick={() => navigate("/branch_signup")} className="text-green-600 hover:underline">
            Join now
          </button>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
