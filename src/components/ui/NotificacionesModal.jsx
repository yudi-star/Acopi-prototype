const notificaciones = [
  {
    id: 1,
    tipo: "recojo",
    titulo: "Tu recojo está programado",
    detalle: "Carlos M. llegará el martes 14/7 entre 7-10 PM.",
    tiempo: "Hace 1 hora",
    icon: "local_shipping",
    bg: "#E8F5D8",
    color: "#536600",
    leida: false,
  },
  {
    id: 2,
    tipo: "logro",
    titulo: "¡Nuevo logro desbloqueado!",
    detalle: "Alcanzaste el Nivel 12 - Explorador Eco.",
    tiempo: "Hace 5 horas",
    icon: "workspace_premium",
    bg: "#FEF3C7",
    color: "#D4A017",
    leida: false,
  },
  {
    id: 3,
    tipo: "market",
    titulo: "Nueva solicitud en el Marketplace",
    detalle: "@juanp quiere tus Botellas de Plástico.",
    tiempo: "Ayer",
    icon: "storefront",
    bg: "#E0F2FE",
    color: "#0288D1",
    leida: true,
  },
  {
    id: 4,
    tipo: "pago",
    titulo: "Pago acreditado",
    detalle: "Recibiste S/ 4.20 en tu EcoBilletera.",
    tiempo: "Hace 2 días",
    icon: "payments",
    bg: "#F3E8FF",
    color: "#9333EA",
    leida: true,
  },
];

export default function NotificacionesModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-end justify-center bg-black/40">
      <style>{`
        @keyframes slide-up {
          from { transform: translateY(100%); }
          to { transform: translateY(0); }
        }
        .animate-slide-up { animation: slide-up 0.25s ease-out; }
      `}</style>

      <div className="bg-white w-full max-h-[75%] rounded-t-[1.5rem] overflow-y-auto animate-slide-up">
        <div className="flex justify-between items-center px-4 pt-4 pb-3 sticky top-0 bg-white border-b border-gray-100 z-10">
          <span className="text-sm font-bold text-gray-900">Notificaciones</span>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-500 active:scale-90 transition-transform"
          >
            <span className="material-symbols-outlined text-[16px]">close</span>
          </button>
        </div>

        <div className="px-4 py-3 flex flex-col gap-2">
          {notificaciones.map((n) => (
            <div
              key={n.id}
              className={`flex items-start gap-3 p-3 rounded-xl transition-colors ${
                n.leida ? "bg-white" : "bg-[#F7FBEA]"
              }`}
            >
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: n.bg, color: n.color }}
              >
                <span
                  className="material-symbols-outlined text-[18px]"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  {n.icon}
                </span>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-[12px] font-bold text-gray-900 leading-tight">
                  {n.titulo}
                </p>
                <p className="text-[11px] text-gray-500 mt-0.5 leading-snug">
                  {n.detalle}
                </p>
                <p className="text-[9px] text-gray-400 mt-1 font-medium">
                  {n.tiempo}
                </p>
              </div>
              {!n.leida && (
                <span className="w-2 h-2 rounded-full bg-[#C0F200] flex-shrink-0 mt-1"></span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}