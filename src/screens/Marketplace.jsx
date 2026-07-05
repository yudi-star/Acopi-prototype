import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PublicarModal from "../components/ui/PublicarModal";

const distritos = ["Miraflores", "San Isidro", "Barranco", "Surco"];

const publicacionesIniciales = [
  {
    id: 1,
    titulo: "Lote de Botellas Ámbar",
    imagen: "https://images.unsplash.com/photo-1595981234058-a9302fb97229?w=600&q=80",
    distrito: "Miraflores",
    distancia: "2.5km",
    material: "Vidrio",
    materialColor: "#38BDF8",
    materialBg: "#E5F6FF",
    usuario: "@juanp",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    estado: "disponible",
  },
  {
    id: 2,
    titulo: "Cartón corrugado limpio",
    imagen: "https://images.unsplash.com/photo-1607166452427-7e4477079cb9?w=600&q=80",
    distrito: "San Isidro",
    distancia: "4km",
    material: "Cartón",
    materialColor: "#D4A017",
    materialBg: "#FFF8E7",
    usuario: "@mariacr",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    estado: "disponible",
  },
  {
    id: 3,
    titulo: "Botellas PET 500ml",
    imagen: "https://images.unsplash.com/photo-1571727153934-b9e0059b7d4d?w=600&q=80",
    distrito: "Surco",
    distancia: "1.2km",
    material: "Plástico",
    materialColor: "#6B8E23",
    materialBg: "#F0F8E2",
    usuario: "@eco_dave",
    avatar: "https://randomuser.me/api/portraits/men/65.jpg",
    estado: "reservado",
  },
  {
    id: 4,
    titulo: "Latas de aluminio (bolsa)",
    imagen: "https://images.unsplash.com/photo-1611270629569-8b357cb88da9?w=600&q=80",
    distrito: "Barranco",
    distancia: "3km",
    material: "Metal",
    materialColor: "#9333EA",
    materialBg: "#F3E8FF",
    usuario: "@luciam",
    avatar: "https://randomuser.me/api/portraits/women/21.jpg",
    estado: "disponible",
  },
  {
    id: 5,
    titulo: "Ropa usada en buen estado",
    imagen: "https://images.unsplash.com/photo-1489274495757-95c7c837b101?w=600&q=80",
    distrito: "Miraflores",
    distancia: "0.8km",
    material: "Textil",
    materialColor: "#DB2777",
    materialBg: "#FCE7F3",
    usuario: "@karlar",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    estado: "disponible",
  },
];

const materialColores = {
  "Cartón": { color: "#D4A017", bg: "#FFF8E7" },
  "Vidrio": { color: "#38BDF8", bg: "#E5F6FF" },
  "Plástico": { color: "#6B8E23", bg: "#F0F8E2" },
  "Metal": { color: "#9333EA", bg: "#F3E8FF" },
  "Textil": { color: "#DB2777", bg: "#FCE7F3" },
};

export default function Marketplace() {
  const navigate = useNavigate();
  const [distritoActivo, setDistritoActivo] = useState(null);
  const [modalAbierto, setModalAbierto] = useState(false);
  const [listaPublicaciones, setListaPublicaciones] = useState(publicacionesIniciales);

  const toggleDistrito = (d) => {
    setDistritoActivo((prev) => (prev === d ? null : d));
  };

  const handlePublicar = (datos) => {
    const nueva = {
        id: Date.now(),
        titulo: datos.titulo,
        imagen: datos.imagen,
        distrito: datos.distrito,
        distancia: "0km",
        material: datos.material,
        materialColor: materialColores[datos.material]?.color || "#536600",
        materialBg: materialColores[datos.material]?.bg || "#F0F8E2",
        usuario: "@yudith",
        avatar: "https://randomuser.me/api/portraits/women/33.jpg",
        estado: "disponible",
    };
    setListaPublicaciones((prev) => [nueva, ...prev]);
    setDistritoActivo(null); // por si había un filtro activo que oculte la nueva card

    setTimeout(() => {
        const scrollArea = document.getElementById("phone-scroll-area");
        if (scrollArea) scrollArea.scrollTo({ top: 0, behavior: "smooth" });
    }, 100);
    };

  const publicacionesFiltradas = distritoActivo
    ? listaPublicaciones.filter((p) => p.distrito === distritoActivo)
    : listaPublicaciones;

  return (
    <div className="min-h-full pb-32 bg-gray-50/50 relative">
      {/* Header con back + close */}
      <div className="flex justify-between items-center px-4 pt-9 pb-3 sticky top-0 bg-white/90 backdrop-blur-xl z-20 border-b border-gray-100">
        <button
          onClick={() => navigate(-1)}
          className="w-9 h-9 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-500 active:scale-90 transition-transform"
        >
          <span className="material-symbols-outlined text-[18px]">arrow_back</span>
        </button>
        <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
          Marketplace
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
            Marketplace
          </h1>
          <p className="text-[11px] text-gray-500 mt-1 leading-relaxed">
            Conecta, dona y recibe materiales reciclables. Juntos cerramos el ciclo.
          </p>
        </div>

        {/* Filtros */}
        <div className="flex gap-2 overflow-x-auto pb-1 -mx-4 px-4" style={{ scrollbarWidth: "none" }}>
          <button
            onClick={() => setDistritoActivo(null)}
            className={`flex items-center gap-1 px-3.5 py-2 rounded-full text-[11px] font-bold flex-shrink-0 active:scale-95 transition-all ${
              distritoActivo === null
                ? "bg-[#C0F200] text-gray-900"
                : "bg-white text-gray-700 border border-gray-200"
            }`}
          >
            <span className="material-symbols-outlined text-[14px]">tune</span>
            Todos
          </button>
          {distritos.map((d) => (
            <button
              key={d}
              onClick={() => toggleDistrito(d)}
              className={`px-3.5 py-2 rounded-full text-[11px] font-semibold flex-shrink-0 active:scale-95 transition-all ${
                distritoActivo === d
                  ? "bg-[#C0F200] text-gray-900"
                  : "bg-white text-gray-700 border border-gray-200"
              }`}
            >
              {d}
            </button>
          ))}
        </div>

        {/* Cards */}
        <section className="flex flex-col gap-4">
          {publicacionesFiltradas.length === 0 && (
            <p className="text-sm text-gray-400 text-center py-8">
              No hay publicaciones en este distrito por ahora.
            </p>
          )}

          {publicacionesFiltradas.map((pub) => (
            <article
              key={pub.id}
              className="bg-white rounded-[1.25rem] p-3 shadow-[0_4px_20px_rgb(0,0,0,0.03)] flex flex-col gap-2.5"
            >
              <div className="relative w-full h-40 rounded-xl overflow-hidden bg-gray-100">
                <img
                  src={pub.imagen}
                  alt={pub.titulo}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3.5 right-3.5 z-10 bg-white shadow-sm px-2.5 py-1 rounded-full flex items-center gap-1.5">
                  <span
                    className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${
                      pub.estado === "disponible" ? "bg-[#4CAF50]" : "bg-gray-400"
                    }`}
                  ></span>
                  <span className="text-[8px] font-bold uppercase text-gray-700 tracking-wide whitespace-nowrap">
                    {pub.estado === "disponible" ? "Disponible" : "Reservado"}
                  </span>
                </div>
              </div>

              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-sm font-bold text-gray-900 leading-tight">
                    {pub.titulo}
                  </h3>
                  <p className="text-[11px] text-gray-500 mt-1 flex items-center gap-0.5">
                    <span className="material-symbols-outlined text-[13px]">location_on</span>
                    {pub.distrito}, {pub.distancia}
                  </p>
                </div>
                <span
                  className="text-[9px] font-bold px-2 py-1 rounded-md flex-shrink-0"
                  style={{ backgroundColor: pub.materialBg, color: pub.materialColor }}
                >
                  {pub.material}
                </span>
              </div>

              <div className="flex justify-between items-center pt-2 border-t border-gray-100">
                <div className="flex items-center gap-1.5">
                  <img
                    src={pub.avatar}
                    alt={pub.usuario}
                    className="w-6 h-6 rounded-full object-cover bg-gray-200"
                  />
                  <span className="text-[11px] font-semibold text-gray-700">
                    {pub.usuario}
                  </span>
                </div>
                {pub.estado === "disponible" ? (
                  <button className="text-[11px] font-bold text-[#536600] active:opacity-70">
                    Solicitar
                  </button>
                ) : (
                  <span className="text-[11px] text-gray-400">No disponible</span>
                )}
              </div>
            </article>
          ))}
        </section>
      </main>

      <button
        onClick={() => setModalAbierto(true)}
        className="fixed bottom-24 right-4 w-14 h-14 bg-[#C0F200] rounded-full flex items-center justify-center shadow-[0_8px_24px_rgba(192,242,0,0.4)] active:scale-90 transition-transform z-30"
      >
        <span className="material-symbols-outlined text-gray-900 text-[24px]">add</span>
      </button>

      <PublicarModal
        isOpen={modalAbierto}
        onClose={() => setModalAbierto(false)}
        onPublicar={handlePublicar}
      />
    </div>
  );
}