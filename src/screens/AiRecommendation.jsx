import { useState } from "react";
import { useNavigate } from "react-router-dom";

const options = [
  {
    id: "acumular",
    title: "Acumular para vender",
    desc: "Sigue sumando y vende a centros autorizados.",
    icon: "payments",
    color: "#D4A017",
    bg: "#FFF8E7",
    recomendado: false,
  },
  {
    id: "reutilizar",
    title: "Reutilizar",
    desc: "La IA te da ideas para darle una segunda vida.",
    icon: "recycling",
    color: "#536600",
    bg: "#F0F8E2",
    recomendado: true,
  },
  {
    id: "compartir",
    title: "Compartir",
    desc: "Publícalo para que alguien más lo recoja.",
    icon: "handshake",
    color: "#0088CC",
    bg: "#E5F6FF",
    recomendado: false,
  },
];

export default function AiRecommendation() {
  const navigate = useNavigate();
  const [mostrarConfirmacion, setMostrarConfirmacion] = useState(false);

  const handleSelect = (id) => {
    if (id === "acumular") {
      setMostrarConfirmacion(true);
      return;
    }
    if (id === "reutilizar")
      navigate("/ideas", { state: { materiales: ["PET", "Cartón"] } });
    if (id === "compartir") navigate("/market");
  };

  return (
    <div className="min-h-full pb-32 bg-gray-50/50 relative">
      <div className="flex justify-between items-center px-4 pt-9 pb-3 sticky top-0 bg-white/90 backdrop-blur-xl z-20 border-b border-gray-100">
        <button
          onClick={() => navigate(-1)}
          className="w-9 h-9 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-500 active:scale-90 transition-transform"
        >
          <span className="material-symbols-outlined text-[18px]">arrow_back</span>
        </button>
        <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
          Decisión
        </span>
        <button
          onClick={() => navigate("/")}
          className="w-9 h-9 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-500 active:scale-90 transition-transform"
        >
          <span className="material-symbols-outlined text-[18px]">close</span>
        </button>
      </div>

      <main className="w-full px-4 pt-4 flex flex-col gap-4">
        <div>
          <h1 className="text-xl font-extrabold text-gray-900 tracking-tight">
            ¿Qué quieres hacer?
          </h1>
          <p className="text-[11px] text-gray-500 mt-1 leading-relaxed">
            Hemos analizado tu objeto. Elige el mejor camino para tu contribución ecológica.
          </p>
        </div>

        <section className="flex flex-col gap-3">
          {options.map((opt) => (
            <button
              key={opt.id}
              onClick={() => handleSelect(opt.id)}
              className={`bg-white rounded-[1.25rem] p-4 shadow-[0_4px_20px_rgb(0,0,0,0.03)] flex items-center gap-3 text-left active:scale-[0.98] transition-all duration-200 relative ${
                opt.recomendado ? "ring-2 ring-[#C0F200]" : ""
              }`}
            >
              {opt.recomendado && (
                <span className="absolute -top-2 right-4 bg-[#C0F200] text-gray-900 text-[8px] font-bold px-2 py-0.5 rounded-full shadow-sm">
                  RECOMENDADO
                </span>
              )}

              <div
                className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: opt.bg, color: opt.color }}
              >
                <span
                  className="material-symbols-outlined text-[22px]"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  {opt.icon}
                </span>
              </div>

              <div className="flex-1">
                <h2 className="text-sm font-bold text-gray-900 leading-tight">
                  {opt.title}
                </h2>
                <p className="text-[11px] text-gray-500 mt-0.5 leading-tight">
                  {opt.desc}
                </p>
              </div>

              <span className="material-symbols-outlined text-gray-300 text-[18px]">
                chevron_right
              </span>
            </button>
          ))}
        </section>
      </main>

      {/* Modal de confirmación al elegir "Acumular" */}
      {mostrarConfirmacion && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/40 px-6">
          <div className="bg-white rounded-[1.5rem] p-6 w-full max-w-[320px] flex flex-col items-center text-center gap-3">
            <div className="w-16 h-16 rounded-full bg-[#E8F5D8] flex items-center justify-center">
              <span
                className="material-symbols-outlined text-[28px] text-[#536600]"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                savings
              </span>
            </div>

            <h2 className="text-base font-extrabold text-gray-900">
              ¡Guardado para acumular!
            </h2>
            <p className="text-[12px] text-gray-500 leading-relaxed">
              La IA sumó estos materiales a tu inventario. Sigue escaneando y
              cuando tengas suficiente, solicita el recojo desde el chat o tu
              perfil para ganar dinero.
            </p>

            <div className="flex flex-col gap-2 w-full mt-2">
              <button
                onClick={() => navigate("/recojo")}
                className="w-full h-11 bg-[#C0F200] text-gray-900 rounded-full font-bold text-[12px] active:scale-95 transition-transform"
              >
                Ver mi progreso
              </button>
              <button
                onClick={() => navigate("/")}
                className="w-full h-11 bg-gray-50 border border-gray-200 text-gray-700 rounded-full font-bold text-[12px] active:scale-95 transition-transform"
              >
                Volver a Inicio
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}