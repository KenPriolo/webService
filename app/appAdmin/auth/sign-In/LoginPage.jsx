import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../../../../firebaseConfig";

const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false); // For loading state

  const handleLogin = async () => {
    if (!email || !password) {
      setError("Email and password are required.");
      return;
    }

    setError("");
    setIsLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/admin-dashboard");
    } catch (err) {
      setError("Invalid email or password. Please try again.");
    } finally {
      setIsLoading(false); // Reset loading state after request
    }
  };

  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();
    setIsLoading(true); // Set loading state for Google sign-in
    try {
      await signInWithPopup(auth, provider);
      navigate("/admin-dashboard");
    } catch (err) {
      setError("Failed to sign in with Google. Please try again.");
    } finally {
      setIsLoading(false); // Reset loading state after request
    }
  };

  return (
    <div className="flex items-center justify-center h-full">
      <div className="flex flex-col justify-between h-[400px] space-y-4 w-full max-w-md">
        <div>
          <h2 className="text-3xl font-bold text-center mb-4 text-blue-900">Login to AuAdsTri</h2>
          {error && <p className="text-red-600 text-sm text-center mb-3">{error}</p>}
          <div className="flex items-center justify-center h-full">
            <div className="space-y-4 w-full max-w-md">
              <div>
                <label>Email Address</label>
                <input
                  type="email"
                  className="w-full p-2 rounded border border-gray-300 text-black"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div>
                <label>Password</label>
                <input
                  type="password"
                  className="w-full p-2 rounded border border-gray-300 text-black"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="text-right">
          <button
            onClick={() => navigate("/admin-login/forget-password")}
            className="text-green-600 hover:underline text-sm"
          >
            Forgot password?
          </button>
        </div>

        <div className="space-y-4">
          <button
            onClick={handleGoogleLogin}
            className="bg-white text-blue-900 border border-blue-900 w-full py-2 rounded flex items-center justify-center gap-2"
            disabled={isLoading} // Disable the button while loading
          >
            <img src="https://img.icons8.com/color/24/000000/google-logo.png" alt="Google" />
            {isLoading ? "Signing in with Google..." : "Sign in with Google"}
          </button>
          <div className="flex justify-between">
            <button onClick={() => navigate("/")} className="bg-blue-900 text-white px-4 py-2 rounded">Home</button>
            <button
              onClick={handleLogin}
              className="bg-blue-900 text-white px-4 py-2 rounded"
              disabled={isLoading} // Disable the button while loading
            >
              {isLoading ? "Signing in..." : "Sign In"}
            </button>
          </div>
          <p className="text-center text-blue-900 text-sm">
            New to AuAdsTri?{" "}
            <button onClick={() => navigate("/admin-login/signup")} className="underline">Join now</button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
