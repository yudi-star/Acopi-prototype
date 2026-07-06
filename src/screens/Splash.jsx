import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import logoAcopi from "../assets/images/logo-acopi.png";

export default function Splash() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/onboarding/1");
    }, 2200);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="h-full w-full bg-gradient-to-b from-[#F7FBEA] to-white flex flex-col items-center justify-center relative overflow-hidden">
      <style>{`
        @keyframes fill-progress {
          from { width: 0%; }
          to { width: 100%; }
        }
        .progress-fill { animation: fill-progress 2s ease-out forwards; }
        @keyframes pulse-logo {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        .logo-pulse { animation: pulse-logo 1.8s ease-in-out infinite; }
      `}</style>

      {/* Blobs decorativos */}
      <div className="absolute -top-10 -left-10 w-40 h-40 bg-[#C0F200]/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 -right-10 w-48 h-48 bg-[#38BDF8]/10 rounded-full blur-3xl"></div>

      <div className="relative z-10 flex flex-col items-center gap-4">
        <div className="w-40 h-40 rounded-full bg-white shadow-[0_8px_30px_rgba(192,242,0,0.3)] flex items-center justify-center overflow-hidden logo-pulse p-1">
          <img
            src={logoAcopi}
            alt="ACOPI"
            className="w-full h-full object-contain"
          />
        </div>

        <div className="text-center">
          <h1 className="text-2xl font-extrabold text-[#3A4D00] tracking-tight">
            ACOPI
          </h1>
          <p className="text-[12px] text-gray-500 mt-1">
            Recicla. Gana. Cuida el planeta.
          </p>
        </div>
      </div>

      <div className="absolute bottom-14 w-40 flex flex-col items-center gap-2">
        <div className="w-full h-1 bg-gray-100 rounded-full overflow-hidden">
          <div className="h-full bg-[#C0F200] rounded-full progress-fill"></div>
        </div>
        <span className="text-[9px] text-gray-400 font-medium">v2.0.26</span>
      </div>
    </div>
  );
}