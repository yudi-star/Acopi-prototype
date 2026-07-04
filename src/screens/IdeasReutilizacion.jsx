import { useNavigate, useLocation } from "react-router-dom";

const nombresAmigables = {
  PET: "Botellas de Plástico",
  "Cartón": "Cartón",
};

const ideasPorMaterial = {
  PET: [
    {
      id: "pet-1",
      titulo: "Macetero Colgante",
      desc: "Transforma una botella de plástico en un moderno macetero para tus plantas de interior.",
      nivel: "Fácil",
      tiempo: "15 min",
      imagen: "https://i.pinimg.com/736x/95/d7/a5/95d7a5971fdd6f6d45dce61544e6fd38.jpg",
      pasos: [
        "Corta la botella por la mitad.",
        "Haz 2 agujeros en el borde y pasa un cordón.",
        "Añade tierra, tu planta favorita y cuélgalo.",
      ],
      color: "#38BDF8",
      bg: "#E5F6FF",
    },
    {
      id: "pet-2",
      titulo: "Regadera Casera",
      desc: "Perfora la tapa de la botella para crear una regadera práctica para tus plantas.",
      nivel: "Fácil",
      tiempo: "5 min",
      imagen: "https://www.saponedivaleria.com/wp-content/uploads/2019/03/regadera-e1553949493307.jpg",
      pasos: [
        "Lava bien la botella.",
        "Haz varios agujeros pequeños en la tapa con un clavo caliente.",
        "Llena de agua y listo para usar.",
      ],
      color: "#38BDF8",
      bg: "#E5F6FF",
    },
    {
      id: "pet-3",
      titulo: "Portalápices",
      desc: "Corta la parte inferior de la botella y decórala para guardar lápices y plumones.",
      nivel: "Fácil",
      tiempo: "10 min",
      imagen: "https://i.pinimg.com/736x/47/02/d1/4702d1d0c5ba6f3a7a0da2a006a667e1.jpg",
      pasos: [
        "Corta la base de la botella a la altura deseada.",
        "Lija o cubre el borde cortado con cinta.",
        "Decora con pintura o papel adhesivo.",
      ],
      color: "#38BDF8",
      bg: "#E5F6FF",
    },
  ],
  "Cartón": [
    {
      id: "carton-1",
      titulo: "Organizador de Escritorio",
      desc: "Convierte la caja en compartimentos para ordenar tus útiles de oficina.",
      nivel: "Fácil",
      tiempo: "20 min",
      imagen: "https://publipromocionales.com/wp-content/uploads/2017/09/A2227_lrg.jpg",
      pasos: [
        "Corta la caja en secciones de distintas alturas.",
        "Pinta o forra con papel decorativo si quieres.",
        "Une las secciones con cinta o pegamento.",
      ],
      color: "#D4A017",
      bg: "#FFF8E7",
    },
    {
      id: "carton-2",
      titulo: "Casita para Mascotas",
      desc: "Usa la caja como base para una casita simple para gatos o perros pequeños.",
      nivel: "Medio",
      tiempo: "30 min",
      imagen: "https://i.blogs.es/58416a/act15-decoraciones-lg/650_1200.jpg",
      pasos: [
        "Corta una entrada circular en un lado de la caja.",
        "Refuerza las esquinas con cinta.",
        "Forra el interior con tela o manta suave.",
      ],
      color: "#D4A017",
      bg: "#FFF8E7",
    },
    {
      id: "carton-3",
      titulo: "Tablero de Juegos",
      desc: "Aplana la caja y dibuja un tablero para juegos de mesa caseros.",
      nivel: "Fácil",
      tiempo: "15 min",
      imagen: "https://i.pinimg.com/736x/3b/5e/2d/3b5e2d3b0b9668663f04a8ca71727e19.jpg",
      pasos: [
        "Desarma y aplana la caja.",
        "Dibuja o pega el diseño del tablero que quieras.",
        "Plastifica o cubre con cinta transparente para que dure.",
      ],
      color: "#D4A017",
      bg: "#FFF8E7",
    },
  ],
};

export default function IdeasReutilizacion() {
  const navigate = useNavigate();
  const location = useLocation();

  const materialesDetectados = location.state?.materiales || ["PET", "Cartón"];

  const ideasFiltradas = materialesDetectados.flatMap(
    (material) => ideasPorMaterial[material] || []
  );

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
          Ideas de Reutilización
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
            💡 Ideas para ti
          </h1>
          <p className="text-[11px] text-gray-500 mt-1">
            Basado en lo que detectamos:{" "}
            {materialesDetectados
              .map((m) => nombresAmigables[m] || m)
              .join(" y ")}
            .
          </p>
        </div>

        {ideasFiltradas.length === 0 && (
          <p className="text-sm text-gray-400 text-center py-8">
            No encontramos ideas para estos materiales todavía.
          </p>
        )}

        {ideasFiltradas.map((idea) => (
          <section
            key={idea.id}
            className="bg-white rounded-[1.25rem] overflow-hidden shadow-[0_4px_20px_rgb(0,0,0,0.03)] flex flex-col gap-3"
          >
            <div className="w-full aspect-[16/10] bg-gray-100 overflow-hidden">
              <img
                src={idea.imagen}
                alt={idea.titulo}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="px-4 flex flex-col gap-3 pb-4">
              <div className="flex items-center gap-2">
                <span
                  className="text-[9px] font-bold px-2 py-1 rounded-full"
                  style={{ backgroundColor: idea.bg, color: idea.color }}
                >
                  {idea.nivel}
                </span>
                <span className="text-[9px] font-bold text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                  {idea.tiempo}
                </span>
              </div>

              <div>
                <h2 className="text-base font-bold text-gray-900">{idea.titulo}</h2>
                <p className="text-[11px] text-gray-500 mt-1 leading-relaxed">
                  {idea.desc}
                </p>
              </div>

              <ol className="flex flex-col gap-2">
                {idea.pasos.map((paso, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span
                      className="w-5 h-5 rounded-full flex items-center justify-center text-[9px] font-bold flex-shrink-0 mt-0.5"
                      style={{ backgroundColor: idea.bg, color: idea.color }}
                    >
                      {i + 1}
                    </span>
                    <span className="text-[11px] text-gray-700 leading-snug">{paso}</span>
                  </li>
                ))}
              </ol>

              <button
                className="w-full h-11 rounded-full font-bold text-[12px] flex items-center justify-center gap-2 active:scale-95 transition-all duration-200"
                style={{ backgroundColor: idea.color, color: "#fff" }}
              >
                <span className="material-symbols-outlined text-[16px]">add_task</span>
                Iniciar Proyecto
              </button>
            </div>
          </section>
        ))}
      </main>
    </div>
  );
}