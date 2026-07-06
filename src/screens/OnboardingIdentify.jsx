import { useNavigate } from "react-router-dom";

export default function OnboardingIdentify() {
  const navigate = useNavigate();

  return (
    <div className="h-full w-full bg-white flex flex-col px-6 pt-10 pb-8">
      <div className="flex-1 flex flex-col items-center justify-center gap-6">
        <div className="relative w-full max-w-[260px] aspect-square rounded-[2rem] bg-gradient-to-br from-[#F0F8E2] to-[#E5F6FF] flex items-center justify-center overflow-hidden shadow-inner">
          <span
            className="material-symbols-outlined text-[100px] text-[#536600]"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            smart_toy
          </span>
          <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full flex items-center gap-1">
            <span className="material-symbols-outlined text-[12px] text-[#38BDF8]">
              water_bottle
            </span>
            <span className="text-[9px] font-bold text-gray-700">Plastic PET: 1.2kg</span>
          </div>
          <div className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full flex items-center gap-1">
            <span className="material-symbols-outlined text-[12px] text-[#9333EA]">
              inventory_2
            </span>
            <span className="text-[9px] font-bold text-gray-700">Aluminum: 0.5kg</span>
          </div>
        </div>

        <div className="text-center px-2">
          <h1 className="text-xl font-extrabold text-gray-900 tracking-tight">
            La IA identifica materiales
          </h1>
          <p className="text-[12px] text-gray-500 mt-2 leading-relaxed">
            Nuestros modelos de visión por computadora calculan peso y valor real.
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex justify-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-gray-200"></span>
          <span className="w-6 h-2 rounded-full bg-[#C0F200]"></span>
          <span className="w-2 h-2 rounded-full bg-gray-200"></span>
        </div>
        <button
          onClick={() => navigate("/onboarding/2")}
          className="w-full h-12 bg-[#C0F200] text-gray-900 rounded-full font-bold text-sm flex items-center justify-center gap-2 active:scale-95 transition-transform"
        >
          Siguiente
          <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
        </button>
      </div>
    </div>
  );
}