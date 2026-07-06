import { useState } from "react";
import { useNavigate } from "react-router-dom";
import TopAppBar from "../components/layout/TopAppBar";

function Toggle({ on, onChange }) {
  return (
    <button
      onClick={onChange}
      aria-pressed={on}
      className={`w-10 h-6 rounded-full relative transition-colors duration-200 flex-shrink-0 ${
        on ? "bg-[#C0F200]" : "bg-gray-200"
      }`}
    >
      <span
        className={`absolute top-0.5 w-5 h-5 bg-white rounded-full shadow transition-all duration-200 ${
          on ? "right-0.5" : "left-0.5"
        }`}
      />
    </button>
  );
}

const actividadReciente = [
  {
    id: 1,
    titulo: "8 Botellas PET escaneadas",
    detalle: "Detectado por IA · Eco-Scan",
    puntos: "+45",
    fecha: "Hace 2 horas",
    icon: "water_bottle",
    iconBg: "#E5F6FF",
    iconColor: "#38BDF8",
  },
  {
    id: 2,
    titulo: "Publicaste: Cartón corrugado",
    detalle: "Marketplace · San Isidro",
    puntos: "+20",
    fecha: "Ayer",
    icon: "storefront",
    iconBg: "#FFF8E7",
    iconColor: "#D4A017",
  },
  {
    id: 3,
    titulo: "Iniciaste: Macetero Colgante",
    detalle: "Idea de reutilización · Botella PET",
    puntos: "+15",
    fecha: "Hace 3 días",
    icon: "yard",
    iconBg: "#F0F8E2",
    iconColor: "#6B8E23",
  },
  {
    id: 4,
    titulo: "Retiro a EcoBilletera",
    detalle: "Transferencia a Yape",
    puntos: "-15.00",
    fecha: "Hace 1 semana",
    icon: "account_balance_wallet",
    iconBg: "#F3E8FF",
    iconColor: "#9333EA",
  },
];

export default function MiPerfil() {
  const navigate = useNavigate();
  const [toggles, setToggles] = useState({
    recordatorios: true,
    logros: true,
    boletin: false,
    perfilPublico: true,
    compartirImpacto: true,
  });

  const setToggle = (key) =>
    setToggles((prev) => ({ ...prev, [key]: !prev[key] }));

  return (
    <div className="min-h-full pb-32 bg-gray-50/50">
      <TopAppBar points="1,250" />

      <main className="w-full px-4 pt-5 flex flex-col gap-4">
        {/* PERFIL CARD */}
        <section className="bg-white rounded-[1.25rem] p-6 shadow-[0_4px_20px_rgb(0,0,0,0.03)] flex flex-col items-center gap-2 relative overflow-hidden">
          <div className="absolute -top-12 -right-12 w-40 h-40 bg-gradient-to-br from-[#C0F200]/30 to-transparent rounded-full blur-2xl pointer-events-none" />

          {/* Avatar */}
          <div className="relative z-10 mb-1">
            <div className="w-24 h-24 rounded-full border-4 border-white shadow-md overflow-hidden">
              <img
                src="https://randomuser.me/api/portraits/women/33.jpg"
                alt="Yudith"
                className="w-full h-full object-cover"
              />
            </div>
            <button className="absolute bottom-0 right-0 w-7 h-7 rounded-full bg-white border border-gray-200 flex items-center justify-center shadow-sm active:scale-90 transition-transform">
              <span className="material-symbols-outlined text-[14px] text-gray-600">
                edit
              </span>
            </button>
          </div>

          <div className="text-center relative z-10">
            <h1 className="text-lg font-extrabold text-gray-900 tracking-tight leading-tight">
              Yudith Pacco
            </h1>
            <p className="text-[11px] text-gray-500 mt-0.5">@yudith</p>
          </div>

          {/* Badge pill */}
          <div className="bg-[#E0F2FE] border border-[#BAE6FD] px-3 py-1 rounded-full flex items-center gap-1.5 relative z-10 mt-1">
            <span
              className="material-symbols-outlined text-[12px] text-[#0288D1]"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              eco
            </span>
            <span className="text-[10px] font-bold text-[#0288D1] tracking-wide">
              Explorador Eco - Nivel 24
            </span>
          </div>
        </section>

        {/* PRÓXIMO NIVEL */}
        <section className="bg-white rounded-[1.25rem] p-4 shadow-[0_4px_20px_rgb(0,0,0,0.03)] flex flex-col gap-2.5">
          <span className="text-[9px] font-bold text-gray-500 uppercase tracking-widest">
            Próximo Nivel
          </span>
          <div className="flex justify-between items-end">
            <span className="text-xl font-extrabold text-[#536600] leading-none">
              Nivel 25
            </span>
            <span className="text-[12px] font-bold text-gray-700">
              1,250 / 2,000 pts
            </span>
          </div>
          <div className="w-full h-2.5 bg-gray-100 rounded-full overflow-hidden p-[1px] shadow-inner">
            <div
              className="h-full rounded-full shadow-[inset_0_-1px_3px_rgba(0,0,0,0.1)]"
              style={{
                width: "62.5%",
                background: "linear-gradient(90deg, #C0F200, #38BDF8)",
              }}
            />
          </div>
          <p className="text-[10px] text-gray-500 leading-snug mt-0.5">
            Faltan 750 puntos para alcanzar el título de "Maestro del Reciclaje".
          </p>
        </section>

        {/* HISTORIAL DE RECICLAJE */}
        <h2 className="text-base font-extrabold text-gray-900 tracking-tight px-1 mt-1">
          Historial de Reciclaje
        </h2>

        {/* TOTAL RECICLADO */}
        <section
        onClick={() => navigate("/perfil/impacto")}
        className="bg-white rounded-[1.25rem] p-4 shadow-[0_4px_20px_rgb(0,0,0,0.03)] flex items-center gap-3 active:scale-[0.99] transition-transform cursor-pointer"
        >
        <div className="w-10 h-10 rounded-full bg-[#E0F2FE] flex items-center justify-center flex-shrink-0">
            <span
            className="material-symbols-outlined text-[18px] text-[#0288D1]"
            style={{ fontVariationSettings: "'FILL' 1" }}
            >
            recycling
            </span>
        </div>
        <div className="flex-1">
            <p className="text-[9px] font-bold text-gray-500 uppercase tracking-widest">
            Total Reciclado
            </p>
            <p className="text-lg font-extrabold text-gray-900 leading-tight mt-0.5">
            45.2 kg
            </p>
        </div>
        </section>

        {/* PLÁSTICO AHORRADO */}
        <section
        onClick={() => navigate("/perfil/impacto")}
        className="bg-white rounded-[1.25rem] p-4 shadow-[0_4px_20px_rgb(0,0,0,0.03)] flex items-center gap-3 active:scale-[0.99] transition-transform cursor-pointer"
        >
        <div className="w-10 h-10 rounded-full bg-[#FEF3C7] flex items-center justify-center flex-shrink-0">
            <span
            className="material-symbols-outlined text-[18px] text-[#D4A017]"
            style={{ fontVariationSettings: "'FILL' 1" }}
            >
            local_drink
            </span>
        </div>
        <div className="flex-1">
            <p className="text-[9px] font-bold text-gray-500 uppercase tracking-widest">
            Plástico Ahorrado
            </p>
            <p className="text-lg font-extrabold text-gray-900 leading-tight mt-0.5">
            320 botellas
            </p>
        </div>
        </section>

        {/* ACTIVIDAD RECIENTE */}
        <section className="bg-white rounded-[1.25rem] p-4 shadow-[0_4px_20px_rgb(0,0,0,0.03)] flex flex-col gap-1">
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-[13px] font-extrabold text-gray-900 tracking-tight">
              Actividad Reciente
            </h3>
            <button
            onClick={() => navigate("/perfil/historial")}
            className="text-[10px] font-bold text-[#536600] active:opacity-70"
            >
            Ver todo
            </button>
          </div>

          {actividadReciente.map((act, idx) => (
            <div
              key={act.id}
              className={`flex items-center gap-3 py-2.5 ${
                idx !== actividadReciente.length - 1
                  ? "border-b border-gray-100"
                  : ""
              }`}
            >
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: act.iconBg, color: act.iconColor }}
              >
                <span
                  className="material-symbols-outlined text-[18px]"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  {act.icon}
                </span>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-[12px] font-bold text-gray-900 leading-tight">
                  {act.titulo}
                </p>
                <p className="text-[10px] text-gray-500 mt-0.5 leading-tight">
                  {act.detalle}
                </p>
              </div>
              <div className="text-right flex-shrink-0">
                <p
                    className={`text-[12px] font-extrabold leading-tight ${
                    act.puntos.startsWith("-") ? "text-gray-500" : "text-[#536600]"
                    }`}
                >
                    {act.puntos} {act.titulo.includes("Retiro") ? "" : "PTS"}
                </p>
                <p className="text-[10px] text-gray-400 mt-0.5 leading-tight">
                    {act.fecha}
                </p>
                </div>
            </div>
          ))}
        </section>

        {/* NOTIFICACIONES */}
        <section className="bg-white rounded-[1.25rem] p-4 shadow-[0_4px_20px_rgb(0,0,0,0.03)] flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <span
              className="material-symbols-outlined text-[18px] text-[#536600]"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              notifications
            </span>
            <h3 className="text-[13px] font-extrabold text-gray-900 tracking-tight">
              Notificaciones
            </h3>
          </div>
          <div className="flex flex-col gap-3 mt-1">
            <div className="flex justify-between items-center">
              <span className="text-[12px] text-gray-700 font-medium">
                Recordatorios de Escaneo
              </span>
              <Toggle
                on={toggles.recordatorios}
                onChange={() => setToggle("recordatorios")}
              />
            </div>
            <div className="flex justify-between items-center">
              <span className="text-[12px] text-gray-700 font-medium">
                Nuevos Logros y Niveles
              </span>
              <Toggle on={toggles.logros} onChange={() => setToggle("logros")} />
            </div>
            <div className="flex justify-between items-center">
              <span className="text-[12px] text-gray-700 font-medium">
                Boletín Ecológico
              </span>
              <Toggle
                on={toggles.boletin}
                onChange={() => setToggle("boletin")}
              />
            </div>
          </div>
        </section>

        {/* PRIVACIDAD */}
        <section className="bg-white rounded-[1.25rem] p-4 shadow-[0_4px_20px_rgb(0,0,0,0.03)] flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <span
              className="material-symbols-outlined text-[18px] text-[#536600]"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              lock
            </span>
            <h3 className="text-[13px] font-extrabold text-gray-900 tracking-tight">
              Privacidad
            </h3>
          </div>
          <div className="flex flex-col gap-3 mt-1">
            <div className="flex justify-between items-center">
              <span className="text-[12px] text-gray-700 font-medium">
                Perfil Público
              </span>
              <Toggle
                on={toggles.perfilPublico}
                onChange={() => setToggle("perfilPublico")}
              />
            </div>
            <div className="flex justify-between items-center">
              <span className="text-[12px] text-gray-700 font-medium">
                Compartir Datos de Impacto
              </span>
              <Toggle
                on={toggles.compartirImpacto}
                onChange={() => setToggle("compartirImpacto")}
              />
            </div>
            <button className="flex items-center gap-2 mt-1 active:opacity-70">
              <span className="material-symbols-outlined text-[14px] text-gray-500">
                description
              </span>
              <span className="text-[12px] text-gray-500 font-medium underline">
                Términos y Condiciones
              </span>
            </button>
          </div>
        </section>

        {/* CERRAR SESIÓN */}
        <button
          onClick={() => navigate("/login")}
          className="w-full h-12 border-2 border-[#FF8A80] text-[#D32F2F] rounded-full font-bold text-[12px] flex items-center justify-center gap-2 mt-2 active:scale-[0.98] transition-transform bg-white"
        >
          <span className="material-symbols-outlined text-[16px]">logout</span>
          Cerrar Sesión
        </button>
      </main>
    </div>
  );
}
