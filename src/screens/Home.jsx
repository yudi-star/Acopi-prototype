import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import TopAppBar from "../components/layout/TopAppBar";
import pandaVideo from '../assets/videos/eco-panda.mp4';
import pandasoImg from '../assets/images/panda solo.png';

const quickActions = [
  { label: "Chat IA", icon: "smart_toy", color: "text-[#0088CC]", bg: "bg-[#E5F6FF]", to: "/chat" },
  { label: "Marketplace", icon: "storefront", color: "text-[#D4A017]", bg: "bg-[#FFF8E7]", to: "/market" },
  { label: "Mi Mascota", icon: "pets", color: "text-[#6B8E23]", bg: "bg-[#F0F8E2]", to: "/mascota" },
  { label: "Recojo", icon: "local_shipping", color: "text-[#696969]", bg: "bg-[#F5F5F5]", to: "/recojo/estado" },
];

export default function Home() {
  const navigate = useNavigate();
  const [visible, setVisible] = useState(true);
  const [animatingOut, setAnimatingOut] = useState(false);

  useEffect(() => {
    // 3. Lógica: esperar 4s, iniciar animación de salida, luego quitar del DOM
    const timer = setTimeout(() => {
      setAnimatingOut(true);
      setTimeout(() => setVisible(false), 500);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-full pb-32 bg-gray-50/50 relative">
      <style>{`
        @keyframes slideUp { from { transform: translateY(100%); opacity: 0; } to { transform: translateY(0); opacity: 1; } }
        @keyframes fadeOut { from { opacity: 1; } to { opacity: 0; } }
        .animate-slide-up { animation: slideUp 0.6s ease-out forwards; }
        .animate-fade-out { animation: fadeOut 0.5s ease-out forwards; }
        @keyframes fill-bar {
          0% { width: 0%; }
          100% { width: 75%; }
        }
        @keyframes flow-water {
          0% { background-position: 200% 0; }
          100% { background-position: 0% 0; }
        }
        .water-bar {
          background: linear-gradient(90deg, #C0F200, #38BDF8, #C0F200);
          background-size: 200% 100%;
          animation: fill-bar 1.5s cubic-bezier(0.1, 0.8, 0.2, 1) forwards, flow-water 2.5s linear infinite;
        }
      `}</style>

      {/* MASCOTA DE BIENVENIDA (FLOTANTE) */}
      {visible && (
        <div className={`fixed bottom-24 right-4 z-50 flex flex-col items-center gap-1 ${animatingOut ? 'animate-fade-out' : 'animate-slide-up'}`}>

          {/* Burbuja con punta hacia abajo */}
          <div className="relative bg-white px-3 py-2 rounded-2xl shadow-lg border border-lime-100 text-[10px] font-bold text-lime-900 max-w-[140px] text-center mb-1">
            ¡Hola Yudith! 👋 ¡Vamos a transformar el mundo!

            {/* La punta (triángulo) */}
            <div className="absolute -bottom-2 left-1/2 -ml-2 w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[8px] border-t-white"></div>
            {/* Sombra de la punta (opcional, para que coincida con la burbuja) */}
            <div className="absolute -bottom-[9px] left-1/2 -ml-2 w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[8px] border-t-lime-100 -z-10"></div>
          </div>

          {/* Mascota */}
          <div className="w-20 h-20 rounded-full border-4 border-white shadow-xl overflow-hidden bg-white flex-shrink-0 animate-bounce-slow">
            <video src={pandaVideo} autoPlay loop muted playsInline className="w-full h-full object-cover" />
          </div>
        </div>
      )}

      <TopAppBar points="1,250" />

      <main className="w-full px-4 pt-4 flex flex-col gap-4">

        {/* TARJETA SALDO */}
        <section className="bg-white rounded-[1.25rem] p-4 shadow-[0_4px_20px_rgb(0,0,0,0.03)] flex flex-col relative overflow-hidden">
          <div className="absolute top-0 right-0 w-28 h-28 bg-lime-50 rounded-full blur-3xl opacity-60 -mr-8 -mt-8 pointer-events-none"></div>

          <h2 className="text-[9px] font-bold text-gray-500 uppercase tracking-widest mb-1 z-10">
            SALDO ECOBILLETERA
          </h2>

          <span className="text-3xl font-extrabold text-gray-900 tracking-tight z-10">
            S/ 45.50
          </span>

          <div className="flex flex-col gap-1.5 mt-3 z-10">
            <div className="flex justify-between items-end">
              <span className="text-[10px] text-gray-600 font-bold">
                Nivel Ecológico
              </span>
              <span className="text-[10px] text-gray-500 font-medium tracking-wide">
                Nivel 12 (750/1000 Pts)
              </span>
            </div>
            <div className="w-full h-2.5 bg-gray-100 rounded-full overflow-hidden p-[1px] shadow-inner">
              <div className="water-bar rounded-full h-full shadow-[inset_0_-1px_3px_rgba(0,0,0,0.1)]"></div>
            </div>
          </div>

          {/* Botones de acción */}
          <div className="flex gap-2 mt-4 z-10">
            <button
              onClick={() => navigate("/billetera/retirar")}
              className="flex-1 h-10 bg-[#C0F200] text-gray-900 rounded-xl font-bold text-[11px] flex items-center justify-center gap-1.5 active:scale-95 transition-transform"
            >
              <span className="material-symbols-outlined text-[15px]">payments</span>
              Retirar
            </button>
            <button
              onClick={() => navigate("/billetera")}
              className="flex-1 h-10 bg-gray-50 border border-gray-200 text-gray-700 rounded-xl font-bold text-[11px] flex items-center justify-center gap-1.5 active:scale-95 transition-transform"
            >
              <span className="material-symbols-outlined text-[15px]">receipt_long</span>
              Ver detalles
            </button>
          </div>
        </section>

        {/* TARJETA PANDA */}
        <section
          onClick={() => navigate("/mascota")}
          className="bg-white rounded-[1.25rem] p-3.5 shadow-[0_4px_20px_rgb(0,0,0,0.03)] flex flex-col gap-3 cursor-pointer hover:bg-gray-50 transition-all duration-200"
        >
          <div className="flex items-center gap-3">
            <div className="w-[60px] h-[60px] rounded-full bg-gray-100 flex-shrink-0 flex items-center justify-center border border-gray-100 shadow-sm overflow-hidden">
              <img
                src={pandasoImg}
                alt="Eco-Panda"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex flex-col gap-1 flex-grow">
              <div>
                <h3 className="text-base font-bold text-gray-900 leading-tight">Eco-Panda</h3>
                <p className="text-[10px] text-gray-500 font-medium">Tu compañero verde</p>
              </div>
              <div className="flex flex-wrap gap-1.5 mt-1">
                <span className="bg-[#C0F200] text-gray-900 px-2.5 py-0.5 rounded-full text-[9px] font-bold">Nivel 12</span>
                <span className="bg-[#E0F2FE] text-[#0288D1] px-2.5 py-0.5 rounded-full text-[9px] font-bold flex items-center gap-1">
                  <span className="material-symbols-outlined text-[11px]" style={{ fontVariationSettings: "'FILL' 1" }}>sentiment_satisfied</span>
                  Feliz
                </span>
              </div>
            </div>
          </div>

          <button className="w-full h-10 bg-gray-50 border border-gray-200 text-gray-700 rounded-xl font-bold text-[11px] flex items-center justify-center gap-1.5 active:scale-95 transition-transform">
            <span className="material-symbols-outlined text-[15px]">pets</span>
            Ver Mascota
          </button>
        </section>

        {/* BOTÓN FOTO */}
        <button
          onClick={() => navigate("/scan")}
          className="w-full h-12 bg-[#C0F200] text-gray-900 rounded-2xl font-bold flex items-center justify-center gap-2 shadow-[0_8px_20px_rgba(192,242,0,0.25)] active:scale-95 transition-all duration-200"
        >
          <span className="material-symbols-outlined text-[18px] font-medium">
            photo_camera
          </span>
          <span className="text-[13px]">Tomar Fotografía</span>
        </button>

        {/* QUICK ACTIONS */}
        <section className="grid grid-cols-2 gap-3">
          {quickActions.map((action, index) => (
            <button
              key={index}
              onClick={() => action.to && navigate(action.to)}
              className="bg-white rounded-[1.25rem] p-3 shadow-[0_4px_20px_rgb(0,0,0,0.03)] flex flex-col items-center justify-center gap-2 active:scale-95 transition-all duration-200"
            >
              <div className={`w-10 h-10 rounded-full ${action.bg} ${action.color} flex items-center justify-center`}>
                <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                  {action.icon}
                </span>
              </div>
              <span className="text-[10px] text-gray-800 font-bold">
                {action.label}
              </span>
            </button>
          ))}
        </section>
      </main>
    </div>
  );
}