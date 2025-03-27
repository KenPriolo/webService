import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../../../../firebaseConfig";
import { useState } from "react";
import { doc, getDoc } from "firebase/firestore"; // Firestore functions

const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Fetch user data from Firestore using their email in the 'accountBranch' collection
      const userRef = doc(db, "accounts", email); // Use email as the document ID
      const userDoc = await getDoc(userRef);

      if (userDoc.exists()) {
        const userData = userDoc.data();
        const role = userData.role;

        // Check user role and redirect accordingly
        if (role === "client") {
          navigate("/branch-dashboard"); // Redirect to branch dashboard for clients
        } else if (role === "admin") {
          navigate("/admin-dashboard"); // Redirect to admin dashboard for admins
        } else {
          setError("Invalid role, access denied.");
        }
      } else {
        setError("User not found.");
      }
    } catch (err) {
      setError("Error logging in. Please try again.");
    }
  };

  return (
    <div className="flex items-center justify-center h-full">
      <form onSubmit={handleLogin} className="flex flex-col justify-between h-[400px] space-y-4 w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-blue-900 mb-6">Login to AuAdsTri</h2>
        {error && <p className="text-red-600 text-sm text-center mb-3">{error}</p>}

        <div className="space-y-6">
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
            <input
              type="password"
              className="w-full p-3 rounded-md border border-gray-300 text-black"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="flex justify-between">
            <button
              type="button"
              onClick={() => navigate("/branch-login/forget-password")}
              className="text-blue-600 text-sm"
            >
              Forgot password?
            </button>
          </div>
        </div>

        <div className="space-y-4 mt-4">
          <div className="flex justify-between">
            <button onClick={() => navigate("/")} className="bg-blue-900 text-white px-6 py-2 rounded-md">Home</button>
            <button type="submit" className="bg-blue-900 text-white px-6 py-2 rounded-md">Sign In</button>
          </div>

          <p className="text-center text-blue-900 text-sm">
            New to AuAdsTri?{" "}
            <button onClick={() => navigate("/branch-login/signup")} className="underline">Join now</button>
          </p>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
