import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../../firebaseConfig";
import { useState } from "react";

const SignUpPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate("/admin-login");
    } catch (err) {
      setError("Error signing up. Please try again.");
    }
  };

  return (
    <div className="flex items-center justify-center h-full">
      <form onSubmit={handleSignUp} className="flex flex-col justify-between h-[400px] space-y-4 w-full max-w-md">
        <div>
          <h2 className="text-3xl font-bold text-center mb-4 text-blue-900">Sign Up for AuAdsTri</h2>
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
                  required
                />
              </div>
              <div>
                <label>Password</label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    className="w-full p-2 rounded border border-gray-300 text-black"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-2 text-blue-900"
                  >
                    {showPassword ? "🙈" : "👁"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex justify-between">
            <button onClick={() => navigate("/")} className="bg-blue-900 text-white px-4 py-2 rounded">Home</button>
            <button type="submit" className="bg-blue-900 text-white px-4 py-2 rounded">Sign Up</button>
          </div>
          <p className="text-center text-blue-900 text-sm">
            Already have an account?{" "}
            <button onClick={() => navigate("/admin-login")} className="underline">Log in</button>
          </p>
        </div>
      </form>
    </div>
  );
};

export default SignUpPage;
