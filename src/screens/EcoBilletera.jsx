import { useNavigate } from "react-router-dom";
import TopAppBar from "../components/layout/TopAppBar";

const meses = [
  { key: "Ene", value: 8 },
  { key: "Feb", value: 14 },
  { key: "Mar", value: 6 },
  { key: "Abr", value: 34, highlight: true },
];

const movimientos = [
  {
    id: 1,
    titulo: "Recojo Semanal - Plástico PET",
    detalle: "Mar 14/7, 7:30 PM • Ruta San Isidro",
    monto: "+ S/ 4.20",
    tipo: "positivo",
    icon: "recycling",
    iconBg: "#E8F5D8",
    iconColor: "#536600",
  },
  {
    id: 2,
    titulo: "Recojo Semanal - Cartón",
    detalle: "Lun 6/7, 8:00 PM • Ruta San Isidro",
    monto: "+ S/ 3.10",
    tipo: "positivo",
    icon: "recycling",
    iconBg: "#E8F5D8",
    iconColor: "#536600",
  },
  {
    id: 3,
    titulo: "Retiro Yape",
    detalle: "1 Jul, 09:00 AM",
    monto: "- S/ 15.00",
    tipo: "negativo",
    icon: "account_balance",
    iconBg: "#FFEAE5",
    iconColor: "#BA1A1A",
  },
];

export default function EcoBilletera() {
  const navigate = useNavigate();

  return (
    <div className="min-h-full pb-32 bg-gray-50/50">
      <TopAppBar points="1,250" />

      <main className="w-full px-4 pt-5 flex flex-col gap-4">
        {/* TITULO */}
        <section className="flex flex-col items-center text-center pt-1">
          <h1 className="text-[22px] font-extrabold text-gray-900 tracking-tight leading-tight">
            EcoBilletera
          </h1>
          <p className="text-[11px] text-gray-500 mt-1 leading-snug">
            Gestiona tus ingresos por reciclaje
          </p>
        </section>

        {/* SALDO ACTUAL */}
        <section className="bg-white rounded-[1.25rem] p-5 shadow-[0_4px_20px_rgb(0,0,0,0.03)] flex flex-col gap-3 relative overflow-hidden">
          <div className="absolute -top-12 -right-12 w-40 h-40 bg-gradient-to-br from-[#C0F200]/40 to-transparent rounded-full blur-2xl pointer-events-none" />

          <div className="flex justify-between items-start relative z-10">
            <span className="text-[9px] font-bold text-gray-500 uppercase tracking-widest">
              Saldo Actual
            </span>
            <span
              className="material-symbols-outlined text-[20px] text-[#536600]"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              account_balance_wallet
            </span>
          </div>

          <div className="relative z-10 -mt-1">
            <span className="text-[34px] font-extrabold text-gray-900 tracking-tight leading-none">
              S/ 45.50
            </span>
          </div>

          <button
            onClick={() => navigate("/billetera/retirar")}
            className="relative z-10 w-full h-11 rounded-xl bg-gradient-to-r from-[#C0F200] to-[#9fc700] text-gray-900 font-bold text-[12px] flex items-center justify-center gap-2 shadow-[0_6px_16px_rgba(192,242,0,0.3)] active:scale-95 transition-all duration-200"
          >
            <span className="material-symbols-outlined text-[16px]">payments</span>
            Retirar mediante Yape
          </button>

          <p className="text-[9px] text-gray-400 text-center relative z-10 -mt-1">
            Monto mínimo S/10
          </p>
        </section>

        {/* INGRESOS MENSUALES */}
        <section className="bg-white rounded-[1.25rem] p-4 shadow-[0_4px_20px_rgb(0,0,0,0.03)] flex flex-col gap-4">
          <div className="flex justify-between items-center">
            <h2 className="text-[13px] font-extrabold text-gray-900 tracking-tight">
              Ingresos Mensuales
            </h2>
            <span className="material-symbols-outlined text-[18px] text-gray-400">
              bar_chart
            </span>
          </div>

          <div className="flex items-end justify-between gap-3 h-28 px-1">
            {meses.map((m) => (
              <div
                key={m.key}
                className="flex flex-col items-center gap-1.5 flex-1"
              >
                {m.highlight && (
                  <span className="bg-gray-900 text-white text-[8px] font-bold px-1.5 py-0.5 rounded-full leading-none">
                    S/{m.value}
                  </span>
                )}
                <div
                  className={`w-full rounded-md transition-all ${
                    m.highlight ? "bg-[#C0F200]" : "bg-gray-200"
                  }`}
                  style={{ height: `${m.value * 2.2}px` }}
                />
                <span
                  className={`text-[9px] font-bold ${
                    m.highlight ? "text-[#536600]" : "text-gray-400"
                  }`}
                >
                  {m.key}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* HISTORIAL DE MOVIMIENTOS */}
        <section className="bg-white rounded-[1.25rem] p-4 shadow-[0_4px_20px_rgb(0,0,0,0.03)] flex flex-col gap-1">
          <div className="flex justify-between items-center mb-1">
            <h2 className="text-[13px] font-extrabold text-gray-900 tracking-tight">
              Historial de Movimientos
            </h2>
            <button className="text-[10px] font-bold text-[#536600] active:opacity-70">
              Ver todos
            </button>
          </div>

          {movimientos.map((mov, idx) => (
            <div
              key={mov.id}
              className={`flex items-center gap-3 py-2.5 ${
                idx !== movimientos.length - 1 ? "border-b border-gray-100" : ""
              }`}
            >
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: mov.iconBg, color: mov.iconColor }}
              >
                <span
                  className="material-symbols-outlined text-[18px]"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  {mov.icon}
                </span>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-[12px] font-bold text-gray-900 leading-tight">
                  {mov.titulo}
                </p>
                <p className="text-[10px] text-gray-500 mt-0.5 leading-tight">
                  {mov.detalle}
                </p>
              </div>
              <span
                className={`text-[12px] font-extrabold whitespace-nowrap ${
                  mov.tipo === "positivo"
                    ? "text-[#536600]"
                    : "text-[#BA1A1A]"
                }`}
              >
                {mov.monto}
              </span>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
}
