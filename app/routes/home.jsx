import { useNavigate } from "react-router-dom";
import { Facebook, Twitter, Instagram } from "lucide-react";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div
      className="min-h-screen bg-cover bg-center flex flex-col items-left justify-center relative"
      style={{ backgroundImage: "url('../../assets/geo.jpg')" }}
    >
      <div className="absolute inset-0 bg-black opacity-70"></div>

      <div className="relative z-10 text-left text-white px-5 ml-10">
        <p className="text-sm uppercase tracking-widest mb-3">Welcome to AuAdsTri</p>
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
          An intelligent ad system <br />
          that activates dynamic <br />
          campaigns based on <br />
          real-time geofencing.
        </h1>

        <div className="flex gap-4 justify-start">
          <button
            onClick={() => navigate("/admin-login")}
            className="border border-white px-6 py-3 rounded-md hover:bg-white hover:text-black transition"
          >
            Login to Admin
          </button>
          <button
            onClick={() => navigate("/branch-login")}
            className="border border-white px-6 py-3 rounded-md hover:bg-white hover:text-black transition"
          >
            Login to Client
          </button>
        </div>
      </div>


      <div className="absolute right-5 bottom-5 flex flex-col gap-4 z-10">
        {[<Facebook size={20} />, <Twitter size={20} />, <Instagram size={20} />].map((icon, idx) => (
          <button
            key={idx}
            className="text-white border border-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-white hover:text-black transition"
          >
            {icon}
          </button>
        ))}
      </div>
    </div>
  );
}
