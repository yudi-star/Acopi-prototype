import { useState } from "react";
import { useNavigate } from "react-router-dom";
import TopAppBar from "../components/layout/TopAppBar";

const materiales = [
  {
    id: 1,
    label: "Plástico PET",
    cantidad: "x12",
    icon: "water_bottle",
    bg: "#E0F2FE",
    color: "#0288D1",
  },
  {
    id: 2,
    label: "Cartón",
    cantidad: "2.5 kg",
    icon: "inventory_2",
    bg: "#FEF3C7",
    color: "#D4A017",
  },
  {
    id: 3,
    label: "Electrónicos",
    cantidad: "x1",
    icon: "bolt",
    bg: "#FEF9C3",
    color: "#CA8A04",
  },
];

const fechas = [
  { dia: "Hoy", num: "14" },
  { dia: "Jue", num: "15" },
  { dia: "Vie", num: "16" },
  { dia: "Sáb", num: "17" },
  { dia: "Dom", num: "18" },
  { dia: "Lun", num: "19" },
];

const horarios = [
  { label: "Mañana (9am - 1pm)" },
  { label: "Tarde (2pm - 6pm)" },
];

export default function SolicitarRecojo() {
  const navigate = useNavigate();
  const [fechaSel, setFechaSel] = useState(1);
  const [horarioSel, setHorarioSel] = useState(1);
  const [distrito, setDistrito] = useState("Miraflores");
  const [direccion, setDireccion] = useState("Av. José Larco 1234, Dpto 502");
  const [referencia, setReferencia] = useState("");

  return (
    <div className="min-h-full pb-32 bg-gray-50/50">
      {/* HEADER */}
      <TopAppBar back points="1,250" />

      <main className="w-full px-4 pt-5 flex flex-col gap-4">
        {/* TÍTULO */}
        <section>
          <h1 className="text-[24px] font-extrabold text-[#536600] tracking-tight leading-tight">
            Solicitud de Recojo
          </h1>
          <p className="text-[12px] text-gray-500 mt-1 leading-snug">
            Programa la recolección de tus materiales reciclables.
          </p>
        </section>

        {/* MATERIALES DETECTADOS */}
        <section className="bg-white rounded-[1.25rem] p-4 shadow-[0_4px_20px_rgb(0,0,0,0.03)] relative overflow-hidden">
          <div className="absolute -top-12 -right-12 w-40 h-40 bg-gradient-to-br from-[#C0F200]/30 to-transparent rounded-full blur-2xl pointer-events-none" />

          <div className="flex justify-between items-start relative z-10 gap-2">
            <div className="flex items-center gap-2">
              <span
                className="material-symbols-outlined text-[18px] text-[#536600]"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                auto_awesome
              </span>
              <h2 className="text-[13px] font-extrabold text-gray-900 tracking-tight">
                Materiales Detectados
              </h2>
            </div>
            <span className="bg-[#E8F5D8] text-[#536600] text-[10px] font-extrabold px-2.5 py-1 rounded-full border border-[#D4E8B5] flex-shrink-0">
              Lote #492
            </span>
          </div>

          <p className="text-[11px] text-gray-500 mt-2 relative z-10 leading-snug">
            La IA de ACOPI ha clasificado tu último escaneo.
          </p>

          <div className="grid grid-cols-2 gap-2 mt-3 relative z-10">
            {materiales.map((mat) => (
              <div
                key={mat.id}
                className="bg-gray-50 rounded-xl p-3 flex flex-col items-center text-center border border-gray-100"
              >
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center mb-1.5"
                  style={{ backgroundColor: mat.bg, color: mat.color }}
                >
                  <span
                    className="material-symbols-outlined text-[20px]"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    {mat.icon}
                  </span>
                </div>
                <p className="text-[11px] font-bold text-gray-800 leading-tight">
                  {mat.label}
                </p>
                <p className="text-[10px] text-gray-500 mt-0.5">{mat.cantidad}</p>
              </div>
            ))}
            <button className="bg-gray-50 rounded-xl p-3 flex flex-col items-center justify-center text-center border-2 border-dashed border-gray-300 active:scale-95 transition-transform min-h-[88px]">
              <span className="material-symbols-outlined text-[22px] text-gray-400">
                add
              </span>
              <p className="text-[11px] font-bold text-gray-500 mt-1">
                Añadir más
              </p>
            </button>
          </div>
        </section>

        {/* FECHA DE RECOJO */}
        <section className="bg-white rounded-[1.25rem] p-4 shadow-[0_4px_20px_rgb(0,0,0,0.03)] flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <span
              className="material-symbols-outlined text-[18px] text-gray-700]"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              calendar_month
            </span>
            <h2 className="text-[13px] font-extrabold text-gray-900 tracking-tight">
              Fecha de Recojo
            </h2>
          </div>

          <div className="flex gap-2 overflow-x-auto pb-1 -mx-1 px-1 scrollbar-hide">
            {fechas.map((f, idx) => {
              const selected = fechaSel === idx;
              return (
                <button
                  key={idx}
                  onClick={() => setFechaSel(idx)}
                  className={`flex flex-col items-center justify-center px-3 py-2 rounded-2xl min-w-[64px] flex-shrink-0 transition-all ${
                    selected
                      ? "bg-[#C0F200] text-gray-900 shadow-[0_4px_12px_rgba(192,242,0,0.3)]"
                      : "bg-gray-50 text-gray-600 border border-gray-100"
                  }`}
                >
                  <span
                    className={`text-[10px] font-bold ${
                      selected ? "" : "font-medium"
                    }`}
                  >
                    {f.dia}
                  </span>
                  <span className="text-xl font-extrabold leading-tight mt-0.5">
                    {f.num}
                  </span>
                </button>
              );
            })}
          </div>
        </section>

        {/* HORARIO PREFERIDO */}
        <section className="flex flex-col gap-2">
          <div className="flex items-center gap-2 px-1">
            <span
              className="material-symbols-outlined text-[16px] text-gray-700"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              schedule
            </span>
            <h2 className="text-[13px] font-extrabold text-gray-900 tracking-tight">
              Horario preferido
            </h2>
          </div>
          <div className="grid grid-cols-2 gap-2">
            {horarios.map((h, idx) => {
              const selected = horarioSel === idx;
              return (
                <button
                  key={idx}
                  onClick={() => setHorarioSel(idx)}
                  className={`px-3 py-3 rounded-2xl text-[11px] font-bold text-center transition-all leading-tight ${
                    selected
                      ? "bg-white border-2 border-[#C0F200] text-[#536600] shadow-[0_2px_8px_rgba(192,242,0,0.15)]"
                      : "bg-white border border-gray-200 text-gray-600"
                  }`}
                >
                  {h.label}
                </button>
              );
            })}
          </div>
        </section>

        {/* UBICACIÓN */}
        <section className="bg-white rounded-[1.25rem] p-4 shadow-[0_4px_20px_rgb(0,0,0,0.03)] flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <span
              className="material-symbols-outlined text-[18px] text-gray-700"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              location_on
            </span>
            <h2 className="text-[13px] font-extrabold text-gray-900 tracking-tight">
              Ubicación
            </h2>
          </div>

          <div>
            <label className="text-[10px] font-extrabold text-gray-500 uppercase tracking-wider">
              Distrito
            </label>
            <div className="mt-1.5 bg-gray-50 border border-gray-200 rounded-xl px-3 py-2.5 flex justify-between items-center">
              <span className="text-[12px] font-semibold text-gray-800">
                {distrito}
              </span>
              <span className="material-symbols-outlined text-[18px] text-gray-400">
                expand_more
              </span>
            </div>
          </div>

          <div>
            <label className="text-[10px] font-extrabold text-gray-500 uppercase tracking-wider">
              Dirección exacta
            </label>
            <div className="mt-1.5 bg-gray-50 border border-gray-200 rounded-xl px-3 py-2.5 flex items-center gap-2">
              <span className="material-symbols-outlined text-[16px] text-gray-400">
                search
              </span>
              <input
                type="text"
                value={direccion}
                onChange={(e) => setDireccion(e.target.value)}
                className="flex-1 bg-transparent outline-none text-[12px] text-gray-800 placeholder-gray-400 min-w-0"
                placeholder="Av. Larco 1234..."
              />
            </div>
          </div>

          <div>
            <label className="text-[10px] font-extrabold text-gray-500 uppercase tracking-wider">
              Referencia (Opcional)
            </label>
            <div className="mt-1.5 bg-gray-50 border border-gray-200 rounded-xl px-3 py-2.5">
              <input
                type="text"
                value={referencia}
                onChange={(e) => setReferencia(e.target.value)}
                className="w-full bg-transparent outline-none text-[12px] text-gray-800 placeholder-gray-400"
                placeholder="Frente al parque..."
              />
            </div>
          </div>
        </section>

        {/* CONFIRMAR */}
        <button
          onClick={() => navigate("/recojo/estado")}
          className="w-full h-14 rounded-full bg-gradient-to-r from-[#C0F200] to-[#9fc700] text-gray-900 font-extrabold text-[13px] flex items-center justify-center gap-2 shadow-[0_8px_20px_rgba(192,242,0,0.3)] active:scale-95 transition-all mt-2"
        >
          Confirmar Recojo
          <span className="material-symbols-outlined text-[18px]">
            arrow_forward
          </span>
        </button>

        <p className="text-[10px] text-gray-500 text-center px-4 leading-snug">
          Ganarás aproximadamente{" "}
          <span className="font-extrabold text-[#536600]">+150 PTS</span> por
          este recojo.
        </p>
      </main>
    </div>
  );
}
