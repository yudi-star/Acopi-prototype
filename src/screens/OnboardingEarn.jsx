import { useNavigate } from "react-router-dom";

export default function OnboardingEarn() {
  const navigate = useNavigate();

  return (
    <div className="h-full w-full bg-white flex flex-col px-6 pt-10 pb-8">
      <div className="flex-1 flex flex-col items-center justify-center gap-6">
        <div className="relative w-full max-w-[260px] aspect-square rounded-[2rem] bg-gradient-to-br from-[#C0F200]/20 to-[#38BDF8]/10 flex items-center justify-center">
          <span
            className="material-symbols-outlined text-[100px] text-[#536600]"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            payments
          </span>
        </div>

        <div className="text-center px-2">
          <h1 className="text-xl font-extrabold text-gray-900 tracking-tight">
            Gana dinero reciclando
          </h1>
          <p className="text-[12px] text-gray-500 mt-2 leading-relaxed">
            Recibe pagos instantáneos en tu EcoBilletera y cuida el planeta.
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex justify-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-gray-200"></span>
          <span className="w-2 h-2 rounded-full bg-gray-200"></span>
          <span className="w-2 h-2 rounded-full bg-gray-200"></span>
        </div>
        <button
          onClick={() => navigate("/login")}
          className="w-full h-12 bg-[#C0F200] text-gray-900 rounded-full font-bold text-sm flex items-center justify-center gap-2 active:scale-95 transition-transform"
        >
          Comenzar
          <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
        </button>
      </div>
    </div>
  );
}