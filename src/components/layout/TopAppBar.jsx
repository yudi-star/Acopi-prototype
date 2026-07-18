import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logoAcopi from "../../assets/images/logo-acopi.png";
import NotificacionesModal from "../ui/NotificacionesModal";

export default function TopAppBar({ points = "1,250", back = false }) {
  const navigate = useNavigate();
  const [notifAbiertas, setNotifAbiertas] = useState(false);

  return (
    <>
      <header className="bg-white/90 backdrop-blur-xl sticky top-0 flex justify-between items-center w-full px-5 pt-9 pb-3 z-50 border-b border-gray-100 shadow-[0_4px_20px_rgb(0,0,0,0.02)]">
        {back ? (
          <button
            onClick={() => navigate(-1)}
            className="w-9 h-9 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-600 active:scale-90 transition-transform"
          >
            <span className="material-symbols-outlined text-[18px]">
              arrow_back
            </span>
          </button>
        ) : (
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-full bg-gray-50 border border-gray-100 p-0.5 flex items-center justify-center overflow-hidden shadow-sm">
              <img
                src={logoAcopi}
                alt="ACOPI"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <div className="flex flex-col justify-center">
              <span className="text-[9px] text-gray-500 font-bold uppercase tracking-wider mb-0.5 leading-none">
                Hola, ecofriend
              </span>
            </div>
          </div>
        )}

        <div className="flex items-center gap-2.5">
          <div className="bg-gradient-to-r from-[#C0F200] to-[#a3d100] px-2.5 py-1.5 rounded-full shadow-sm flex items-center gap-1 border border-[#b3e000]">
            <span
              className="material-symbols-outlined text-[13px] text-gray-900"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              eco
            </span>
            <span className="text-[11px] font-extrabold text-gray-900 leading-none tracking-wide">
              {points}
            </span>
          </div>

          {!back && (
            <button
              onClick={() => setNotifAbiertas(true)}
              className="relative w-8 h-8 flex items-center justify-center text-gray-500 bg-gray-50 rounded-full border border-gray-100 transition-colors hover:bg-gray-100 active:scale-90"
            >
              <span className="material-symbols-outlined text-[18px]">
                notifications
              </span>
              <span className="absolute top-1 right-1.5 w-2 h-2 bg-red-500 border-2 border-white rounded-full"></span>
            </button>
          )}
        </div>
      </header>

      <NotificacionesModal
        isOpen={notifAbiertas}
        onClose={() => setNotifAbiertas(false)}
      />
    </>
  );
}