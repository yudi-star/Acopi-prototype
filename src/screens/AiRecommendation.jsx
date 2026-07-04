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

  const handleSelect = (id) => {
    if (id === "acumular") navigate("/scan/resultado");
    if (id === "reutilizar") navigate("/ideas");
    if (id === "compartir") navigate("/market");
  };

  return (
    <div className="min-h-full pb-32 bg-gray-50/50">
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
    </div>
  );
}