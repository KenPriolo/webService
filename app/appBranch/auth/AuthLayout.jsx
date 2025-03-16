import React, { useEffect, useState } from "react";
import { useNavigate, useLocation, Outlet } from "react-router-dom";

const AuthLayout = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [loading, setLoading] = useState(false);
  const [animationKey, setAnimationKey] = useState("");

  const isActive = (path) => location.pathname === path;

  useEffect(() => {
    setAnimationKey(location.pathname);
    setLoading(true);
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 400);
    return () => clearTimeout(timeout);
  }, [location.pathname]);

  return (
    <div
        className="min-h-screen bg-cover bg-center flex flex-col items-center justify-center relative"
        style={{
        backgroundImage: "url('../../../../assets/geo.jpg')",
        }}
    >
      <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
      <div className="bg-gray-100 p-8 rounded-md w-full max-w-lg shadow-lg text-gray-800 relative overflow-hidden">

        {/* Tabs */}
        <div className="flex justify-around mb-6 bg-gray-200 p-2 rounded z-20 relative">
          <button
            onClick={() => navigate("/branch-login/signup")}
            className={`flex-1 text-center py-2 ${isActive("/branch-login/signup") ? "bg-white text-blue-900 font-semibold" : "hover:bg-white hover:text-blue-900"}`}
          >
            REGISTER
          </button>
          <button
            onClick={() => navigate("/branch-login")}
            className={`flex-1 text-center py-2 ${isActive("/branch-login") ? "bg-white text-blue-900 font-semibold" : "hover:bg-white hover:text-blue-900"}`}
          >
            LOGIN
          </button>
          <button
            onClick={() => navigate("/branch-login/forget-password")}
            className={`flex-1 text-center py-2 ${isActive("/branch-login/forget-password") ? "bg-white text-blue-900 font-semibold" : "hover:bg-white hover:text-blue-900"}`}
          >
            FORGOT PASSWORD
          </button>
        </div>

        {/* Animate form section */}
        <div
          key={animationKey}
          className={`transition-all duration-500 transform ${
            loading ? "opacity-0 translate-x-10" : "opacity-100 translate-x-0"
          }`}
        >
          <div className="min-h-[400px] flex flex-col justify-center">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
