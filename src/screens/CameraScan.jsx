import { useNavigate } from "react-router-dom";

const scanBg = "https://thumbs.dreamstime.com/b/caja-de-cart%C3%B3n-con-botellas-pl%C3%A1stico-usadas-en-la-mesa-cocina-problema-reciclaje-213086271.jpg";

export default function CameraScan() {
  const navigate = useNavigate();

  return (
    <div className="relative w-full h-full bg-gray-900 overflow-hidden flex flex-col">
      <style>{`
        @keyframes scan-line {
          0% { top: 15%; opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { top: 85%; opacity: 0; }
        }
        .scan-line {
          animation: scan-line 2.5s ease-in-out infinite;
        }
        @keyframes pulse-box {
          0%, 100% { opacity: 0.6; }
          50% { opacity: 1; }
        }
        .hologram-box {
          animation: pulse-box 1.8s ease-in-out infinite;
        }
      `}</style>

      {/* Fondo real - SIN zoom excesivo */}
      <div
        className="absolute inset-0 bg-no-repeat bg-center"
        style={{
          backgroundImage: `url(${scanBg})`,
          backgroundSize: "auto 110%",
        }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/10 to-black/70"></div>

      {/* Header flotante */}
      <div className="relative z-20 flex justify-between items-center px-4 pt-9 pb-3">
        <button
          onClick={() => navigate("/")}
          className="w-9 h-9 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white active:scale-90 transition-transform"
        >
          <span className="material-symbols-outlined text-[18px]">close</span>
        </button>

        <div className="bg-white/10 backdrop-blur-md px-3 py-1.5 rounded-full flex items-center gap-1.5">
          <span className="material-symbols-outlined text-[13px] text-[#C0F200]">
            info
          </span>
          <span className="text-[10px] font-bold text-white tracking-wide">
            Eco-Scan Activo
          </span>
        </div>

        <button className="w-9 h-9 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white active:scale-90 transition-transform">
          <span className="material-symbols-outlined text-[18px]">more_vert</span>
        </button>
      </div>

      {/* Área de escaneo */}
      <div className="relative flex-1">
        <div className="absolute left-4 right-4 h-[2px] bg-[#C0F200] shadow-[0_0_10px_#C0F200] scan-line z-10"></div>

        {/* Caja 1: Plástico */}
        <div
          className="hologram-box absolute border-2 border-dashed border-[#C0F200] rounded-lg"
          style={{ top: "18%", left: "10%", width: "80%", height: "48%" }}
        >
          <div className="absolute -top-6 left-0 bg-black/60 backdrop-blur-sm px-2 py-0.5 rounded text-[9px] font-bold text-[#C0F200] whitespace-nowrap">
            Plástico PET (96%)
          </div>
        </div>

        {/* Caja 2: Cartón  */}
        <div
          className="hologram-box absolute border-2 border-dashed border-[#C0F200] rounded-lg"
          style={{ top: "68%", left: "8%", width: "84%", height: "20%" }}
        >
          <div className="absolute -top-6 left-0 bg-black/60 backdrop-blur-sm px-2 py-0.5 rounded text-[9px] font-bold text-[#C0F200] whitespace-nowrap">
            Cartón (95%)
          </div>
        </div>

        {/* Texto de guía */}
        <div className="absolute top-[3%] left-0 w-full px-8 text-center z-10">
          <p className="text-white text-sm font-bold drop-shadow-lg leading-snug">
            Toma una fotografía donde se vean claramente los materiales reciclables.
          </p>
        </div>
      </div>

      {/* Controles inferiores */}
      <div className="relative z-20 flex justify-between items-center px-8 pb-10 pt-4 bg-gradient-to-t from-black/80 to-transparent">
        <button className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white active:scale-90 transition-transform">
          <span className="material-symbols-outlined text-[20px]">flash_auto</span>
        </button>

        <div className="relative">
          <div className="absolute inset-0 bg-[#C0F200]/30 rounded-full animate-ping"></div>
          <button
            onClick={() => navigate("/scan/analizando")}
            className="relative w-16 h-16 bg-[#C0F200] rounded-full border-4 border-white flex items-center justify-center shadow-[0_0_20px_rgba(192,242,0,0.5)] active:scale-90 transition-transform"
          >
            <span className="material-symbols-outlined text-gray-900 text-[24px]">
              camera
            </span>
          </button>
        </div>

        <button className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-md border-2 border-white/20 flex items-center justify-center text-white active:scale-90 transition-transform overflow-hidden">
          <span className="material-symbols-outlined text-[18px]">image</span>
        </button>
      </div>
    </div>
  );
}