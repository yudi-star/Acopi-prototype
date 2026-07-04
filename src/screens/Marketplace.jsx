import { useNavigate } from "react-router-dom";

const filtros = ["Miraflores", "San Isidro", "Barranco", "Surco"];

const publicaciones = [
  {
    id: 1,
    titulo: "Lote de Botellas Ámbar",
    imagen: "https://images.unsplash.com/photo-1550989460-0adf9ea622e2?w=600&q=80",
    ubicacion: "Miraflores, 2.5km",
    material: "Vidrio",
    materialColor: "#38BDF8",
    materialBg: "#E5F6FF",
    usuario: "@juanp",
    estado: "disponible",
  },
  {
    id: 2,
    titulo: "Cartón corrugado limpio",
    imagen: "https://images.unsplash.com/photo-1607166452427-7e4477079cb9?w=600&q=80",
    ubicacion: "San Isidro, 4km",
    material: "Cartón",
    materialColor: "#D4A017",
    materialBg: "#FFF8E7",
    usuario: "@mariacr",
    estado: "disponible",
  },
  {
    id: 3,
    titulo: "Botellas PET 500ml",
    imagen: "https://images.unsplash.com/photo-1571727153934-b9e0059b7d4d?w=600&q=80",
    ubicacion: "Surco, 1.2km",
    material: "Plástico",
    materialColor: "#6B8E23",
    materialBg: "#F0F8E2",
    usuario: "@eco_dave",
    estado: "reservado",
  },
];

export default function Marketplace() {
  const navigate = useNavigate();

  return (
    <div className="min-h-full pb-32 bg-gray-50/50 relative">
      <div className="flex justify-between items-center px-4 pt-9 pb-3 sticky top-0 bg-white/90 backdrop-blur-xl z-20 border-b border-gray-100">
        <div className="w-9"></div>
        <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
          Marketplace
        </span>
        <div className="w-9"></div>
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

        {/* Filtros horizontales */}
        <div className="flex gap-2 overflow-x-auto pb-1 -mx-4 px-4 scrollbar-hide">
          <button className="flex items-center gap-1 bg-[#C0F200] text-gray-900 px-3.5 py-2 rounded-full text-[11px] font-bold flex-shrink-0 active:scale-95 transition-transform">
            <span className="material-symbols-outlined text-[14px]">tune</span>
            Filtros
          </button>
          {filtros.map((f) => (
            <button
              key={f}
              className="bg-white text-gray-700 border border-gray-200 px-3.5 py-2 rounded-full text-[11px] font-semibold flex-shrink-0 active:scale-95 transition-transform"
            >
              {f}
            </button>
          ))}
        </div>

        {/* Cards de publicaciones */}
        <section className="flex flex-col gap-4">
          {publicaciones.map((pub) => (
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
                <div className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-md flex items-center gap-1">
                  <span
                    className={`w-1.5 h-1.5 rounded-full ${
                      pub.estado === "disponible" ? "bg-[#4CAF50]" : "bg-gray-400"
                    }`}
                  ></span>
                  <span className="text-[8px] font-bold uppercase text-gray-600 tracking-wide">
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
                    {pub.ubicacion}
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
                  <div className="w-6 h-6 rounded-full bg-gray-200"></div>
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

      {/* Botón flotante para publicar */}
      <button
        onClick={() => navigate("/market/publicar")}
        className="fixed bottom-24 right-4 w-14 h-14 bg-[#C0F200] rounded-full flex items-center justify-center shadow-[0_8px_24px_rgba(192,242,0,0.4)] active:scale-90 transition-transform z-30"
      >
        <span className="material-symbols-outlined text-gray-900 text-[24px]">add</span>
      </button>
    </div>
  );
}