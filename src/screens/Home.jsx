import { useNavigate } from "react-router-dom";
import TopAppBar from "../components/layout/TopAppBar";

const quickActions = [
  { label: "Chat IA", icon: "smart_toy", color: "text-[#0088CC]", bg: "bg-[#E5F6FF]" },
  { label: "Marketplace", icon: "storefront", color: "text-[#D4A017]", bg: "bg-[#FFF8E7]" },
  { label: "Mi Mascota", icon: "pets", color: "text-[#6B8E23]", bg: "bg-[#F0F8E2]" },
  { label: "Recojo", icon: "local_shipping", color: "text-[#696969]", bg: "bg-[#F5F5F5]" },
];

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-full pb-32 bg-gray-50/50">
      <style>{`
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
        </section>

        {/* TARJETA PANDA */}
        <section
          onClick={() => navigate("/mascota")}
          className="bg-white rounded-[1.25rem] p-3.5 shadow-[0_4px_20px_rgb(0,0,0,0.03)] flex flex-col gap-3 cursor-pointer hover:bg-gray-50 transition-all duration-200"
        >
          <div className="flex items-center gap-3">
            <div className="w-[60px] h-[60px] rounded-full bg-gray-100 flex-shrink-0 flex items-center justify-center text-3xl border border-gray-100 shadow-sm overflow-hidden">
              🐼
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

          {/* BOTÓN VER MASCOTA */}
          <button
            className="w-full py-2 bg-gray-900 text-white text-[11px] font-bold rounded-xl active:scale-95 transition-transform"
          >
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