import { useNavigate } from "react-router-dom";

const historialAgrupado = [
  {
    fecha: "Hoy",
    items: [
      {
        id: 1,
        titulo: "8 Botellas PET escaneadas",
        detalle: "Detectado por IA · Eco-Scan",
        puntos: "+45",
        hora: "10:42 AM",
        icon: "water_bottle",
        iconBg: "#E5F6FF",
        iconColor: "#38BDF8",
      },
    ],
  },
  {
    fecha: "Ayer",
    items: [
      {
        id: 2,
        titulo: "Publicaste: Cartón corrugado",
        detalle: "Marketplace · San Isidro",
        puntos: "+20",
        hora: "16:15 PM",
        icon: "storefront",
        iconBg: "#FFF8E7",
        iconColor: "#D4A017",
      },
    ],
  },
  {
    fecha: "Esta semana",
    items: [
      {
        id: 3,
        titulo: "Iniciaste: Macetero Colgante",
        detalle: "Idea de reutilización · Botella PET",
        puntos: "+15",
        hora: "Hace 3 días",
        icon: "yard",
        iconBg: "#F0F8E2",
        iconColor: "#6B8E23",
      },
      {
        id: 4,
        titulo: "Retiro a EcoBilletera",
        detalle: "Transferencia a Yape",
        puntos: "-15.00",
        hora: "Hace 5 días",
        icon: "account_balance_wallet",
        iconBg: "#F3E8FF",
        iconColor: "#9333EA",
      },
    ],
  },
  {
    fecha: "Este mes",
    items: [
      {
        id: 5,
        titulo: "3 Cajas de Cartón escaneadas",
        detalle: "Detectado por IA · Eco-Scan",
        puntos: "+30",
        hora: "Hace 2 semanas",
        icon: "inventory_2",
        iconBg: "#FFF8E7",
        iconColor: "#D4A017",
      },
      {
        id: 6,
        titulo: "Solicitaste: Latas de aluminio",
        detalle: "Marketplace · Barranco",
        puntos: "+10",
        hora: "Hace 3 semanas",
        icon: "recycling",
        iconBg: "#F3E8FF",
        iconColor: "#9333EA",
      },
    ],
  },
];

export default function HistorialCompleto() {
  const navigate = useNavigate();

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
          Historial Completo
        </span>
        <div className="w-9"></div>
      </div>

      <main className="w-full px-4 pt-4 flex flex-col gap-5 pb-6">
        <div>
          <h1 className="text-xl font-extrabold text-gray-900 tracking-tight">
            Tu actividad
          </h1>
          <p className="text-[11px] text-gray-500 mt-1">
            Todo lo que has hecho por el planeta, en un solo lugar.
          </p>
        </div>

        {historialAgrupado.map((grupo) => (
          <section key={grupo.fecha} className="flex flex-col gap-2">
            <h2 className="text-[11px] font-bold text-gray-400 uppercase tracking-widest px-1">
              {grupo.fecha}
            </h2>

            <div className="bg-white rounded-[1.25rem] shadow-[0_4px_20px_rgb(0,0,0,0.03)] overflow-hidden">
              {grupo.items.map((item, idx) => (
                <div
                  key={item.id}
                  className={`flex items-center gap-3 px-4 py-3 ${
                    idx !== grupo.items.length - 1 ? "border-b border-gray-100" : ""
                  }`}
                >
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: item.iconBg, color: item.iconColor }}
                  >
                    <span
                      className="material-symbols-outlined text-[18px]"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      {item.icon}
                    </span>
                  </div>

                  <div className="flex-1 min-w-0">
                    <p className="text-[12px] font-bold text-gray-900 leading-tight">
                      {item.titulo}
                    </p>
                    <p className="text-[10px] text-gray-500 mt-0.5 leading-tight">
                      {item.detalle}
                    </p>
                  </div>

                  <div className="text-right flex-shrink-0">
                    <p
                      className={`text-[12px] font-extrabold leading-tight ${
                        item.puntos.startsWith("-") ? "text-gray-500" : "text-[#536600]"
                      }`}
                    >
                      {item.puntos}
                      {item.titulo.includes("Retiro") ? "" : " PTS"}
                    </p>
                    <p className="text-[10px] text-gray-400 mt-0.5 leading-tight">
                      {item.hora}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </main>
    </div>
  );
}