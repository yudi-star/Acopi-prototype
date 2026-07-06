import { useNavigate } from "react-router-dom";

export default function OnboardingScan() {
  const navigate = useNavigate();

  return (
    <div className="h-full w-full bg-white flex flex-col px-6 pt-9 pb-8">
      <h1 className="text-center text-lg font-extrabold text-[#536600] tracking-tight mb-2">
        ACOPI
      </h1>

      <div className="flex-1 flex flex-col items-center justify-center gap-6">
        <div className="relative w-full max-w-[260px] aspect-square rounded-[2rem] bg-gray-900 flex items-center justify-center overflow-hidden shadow-lg">
          <span
            className="material-symbols-outlined text-[90px] text-white/80"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            photo_camera
          </span>
          <div className="absolute inset-4 border-2 border-dashed border-[#C0F200]/60 rounded-2xl"></div>
        </div>

        <div className="text-center px-2">
          <h1 className="text-xl font-extrabold text-gray-900 tracking-tight">
            Toma una foto
          </h1>
          <p className="text-[12px] text-gray-500 mt-2 leading-relaxed">
            Usa nuestra IA para identificar materiales reciclables al instante.
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex justify-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-gray-200"></span>
          <span className="w-2 h-2 rounded-full bg-gray-200"></span>
          <span className="w-6 h-2 rounded-full bg-[#C0F200]"></span>
        </div>
        <button
          onClick={() => navigate("/onboarding/3")}
          className="w-full h-12 bg-[#C0F200] text-gray-900 rounded-full font-bold text-sm flex items-center justify-center gap-2 active:scale-95 transition-transform"
        >
          Siguiente
          <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
        </button>
        <button
          onClick={() => navigate("/login")}
          className="text-[11px] text-gray-400 font-medium text-center active:opacity-70"
        >
          Omitir introducción
        </button>
      </div>
    </div>
  );
}