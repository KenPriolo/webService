import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../../../firebaseConfig";
import { useState } from "react";
import { doc, setDoc } from "firebase/firestore"; // Firestore functions

const SignUpPage = () => {
  const navigate = useNavigate();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Store user data including full name and role in Firestore
      const userRef = doc(db, "accounts", email); // Use email as the document ID
      await setDoc(userRef, {
        fullName: fullName,
        email: user.email,
        role: "client", // Set role as 'admin'
      });

      navigate("/login"); // Redirect to login after successful signup
    } catch (err) {
      setError("Error signing up. Please try again.");
    }
  };

  return (
    <div className="flex items-center justify-center h-full">
      <form onSubmit={handleSignUp} className="flex flex-col justify-between h-[400px] space-y-4 w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-blue-900 mb-1">Sign Up for AuAdsTri</h2>
        {error && <p className="text-red-600 text-sm text-center mb-3">{error}</p>}

        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">Full Name</label>
            <input
              type="text"
              className="w-full p-3 rounded-md border border-gray-300 text-black"
              placeholder="Enter your full name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
            />
          </div>

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

          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                className="w-full p-3 rounded-md border border-gray-300 text-black"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-3 text-blue-900"
              >
                {showPassword ? "🙈" : "👁"}
              </button>
            </div>
          </div>
        </div>

        <div className="space-y-4 mt-4">
          <div className="flex justify-between">
            <button onClick={() => navigate("/")} className="bg-blue-900 text-white px-6 py-2 rounded-md">Home</button>
            <button type="submit" className="bg-blue-900 text-white px-6 py-2 rounded-md">Sign Up</button>
          </div>
          <p className="text-center text-blue-900 text-sm">
            Already have an account?{" "}
            <button onClick={() => navigate("/login")} className="underline">Log in</button>
          </p>
        </div>
      </form>
    </div>
  );
};

export default SignUpPage;
