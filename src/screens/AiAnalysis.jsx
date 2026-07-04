import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const analysisSteps = [
  "Analizando materiales...",
  "Detectando composición...",
  "Estimando peso y valor...",
];

export default function AiAnalysis() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/scan/resultado");
    }, 3500);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="relative w-full h-full bg-gray-900 overflow-hidden flex flex-col items-center justify-center px-8">
      <style>{`
        @keyframes pulse-ring {
          0% { transform: scale(0.8); opacity: 0.6; }
          100% { transform: scale(1.4); opacity: 0; }
        }
        .pulse-ring {
          animation: pulse-ring 1.8s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        @keyframes text-cycle {
          0%, 30% { opacity: 1; }
          33%, 63% { opacity: 0; }
          66%, 96% { opacity: 0; }
          100% { opacity: 1; }
        }
      `}</style>

      {/* Fondo oscuro con leve textura */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-800 to-black opacity-95"></div>

      {/* Núcleo IA con anillos pulsantes */}
      <div className="relative z-10 flex items-center justify-center mb-8">
        <div className="absolute w-28 h-28 rounded-full border-2 border-[#C0F200]/40 pulse-ring"></div>
        <div className="absolute w-40 h-40 rounded-full border border-[#38BDF8]/20 pulse-ring" style={{ animationDelay: "0.4s" }}></div>
        <div className="absolute w-52 h-52 rounded-full border border-[#C0F200]/10 pulse-ring" style={{ animationDelay: "0.8s" }}></div>

        <div className="relative w-20 h-20 rounded-full bg-[#C0F200] flex items-center justify-center shadow-[0_0_30px_rgba(192,242,0,0.4)]">
          <span className="material-symbols-outlined text-gray-900 text-[36px]">
            memory
          </span>
        </div>
      </div>

      {/* Texto rotativo */}
      <div className="relative z-10 text-center h-10 flex items-center justify-center">
        <p className="text-[#C0F200] font-bold text-lg tracking-tight">
          {analysisSteps[0]}
        </p>
      </div>

      <p className="relative z-10 text-gray-400 text-xs text-center mt-2 max-w-[260px] leading-relaxed">
        Nuestra IA está identificando y clasificando tus reciclables con precisión.
      </p>

      {/* Barra de progreso */}
      <div className="relative z-10 w-full max-w-[260px] h-2 bg-gray-800 rounded-full overflow-hidden mt-6 shadow-inner">
        <div className="h-full bg-gradient-to-r from-[#38BDF8] to-[#C0F200] rounded-full animate-pulse" style={{ width: "70%" }}></div>
      </div>
    </div>
  );
}