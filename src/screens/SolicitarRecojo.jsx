import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import TopAppBar from "../components/layout/TopAppBar";

const infoMaterial = {
  PET: { label: "Botellas PET", icon: "water_bottle", bg: "#E0F2FE", color: "#0288D1", cantidad: "x18" },
  "Cartón": { label: "Cartón", icon: "inventory_2", bg: "#FEF3C7", color: "#D4A017", cantidad: "2.5 kg" },
};

const diasSemana = ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"];
const diaObjetivoPorSemana = [1, 2, 3, 4];

function getProximasSemanas() {
  const hoy = new Date();
  return diaObjetivoPorSemana.map((diaObjetivo, s) => {
    const inicioSemana = new Date(hoy);
    inicioSemana.setDate(hoy.getDate() + s * 7);
    const diferenciaDias = (diaObjetivo - inicioSemana.getDay() + 7) % 7;
    const fecha = new Date(inicioSemana);
    fecha.setDate(inicioSemana.getDate() + diferenciaDias);
    return {
      id: `semana-${s}`,
      label: `Semana ${s + 1}`,
      dia: diasSemana[fecha.getDay()],
      fecha: `${fecha.getDate()}/${fecha.getMonth() + 1}`,
      horaInicio: "7:00 PM",
      horaFin: "10:00 PM",
    };
  });
}

export default function SolicitarRecojo() {
  const navigate = useNavigate();
  const location = useLocation();
  const materialesDetectados = location.state?.materiales || ["PET", "Cartón"];

  const [slotSel, setSlotSel] = useState(null);
  const [distrito, setDistrito] = useState("San Isidro");
  const [direccion, setDireccion] = useState("Av. José Larco 1234, Dpto 502");
  const [referencia, setReferencia] = useState("");

  const semanas = getProximasSemanas();

  const usarMiUbicacion = () => {
    setDireccion("Ubicación actual detectada (GPS simulado)");
    setDistrito("San Isidro");
  };

  return (
    <div className="min-h-full pb-32 bg-gray-50/50">
      <TopAppBar back points="1,250" />

      <main className="w-full px-4 pt-5 flex flex-col gap-4">
        <section>
          <h1 className="text-[24px] font-extrabold text-[#536600] tracking-tight leading-tight">
            Solicitud de Recojo
          </h1>
          <p className="text-[12px] text-gray-500 mt-1 leading-snug">
            Programa la recolección de tus materiales reciclables.
          </p>
        </section>

        {/* MATERIALES DETECTADOS - ahora reales, no hardcodeados */}
        <section className="bg-white rounded-[1.25rem] p-4 shadow-[0_4px_20px_rgb(0,0,0,0.03)] relative overflow-hidden">
          <div className="absolute -top-12 -right-12 w-40 h-40 bg-gradient-to-br from-[#C0F200]/30 to-transparent rounded-full blur-2xl pointer-events-none" />

          <div className="flex items-center gap-2 relative z-10">
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

          <p className="text-[11px] text-gray-500 mt-2 relative z-10 leading-snug">
            La IA de ACOPI ha clasificado tu último escaneo.
          </p>

          <div className="grid grid-cols-2 gap-2 mt-3 relative z-10">
            {materialesDetectados.map((mKey) => {
              const mat = infoMaterial[mKey];
              if (!mat) return null;
              return (
                <div
                  key={mKey}
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
              );
            })}
            <button
              onClick={() => navigate("/scan")}
              className="bg-gray-50 rounded-xl p-3 flex flex-col items-center justify-center text-center border-2 border-dashed border-gray-300 active:scale-95 transition-transform min-h-[88px]"
            >
              <span className="material-symbols-outlined text-[22px] text-gray-400">add</span>
              <p className="text-[11px] font-bold text-gray-500 mt-1">Añadir más</p>
            </button>
          </div>
        </section>

        {/* HORARIO - coherente con RecojoModal (1 vez/semana, noche) */}
        <section className="bg-white rounded-[1.25rem] p-4 shadow-[0_4px_20px_rgb(0,0,0,0.03)] flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <span
              className="material-symbols-outlined text-[18px] text-gray-700"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              calendar_month
            </span>
            <h2 className="text-[13px] font-extrabold text-gray-900 tracking-tight">
              Horario de Recojo
            </h2>
          </div>
          <p className="text-[10px] text-gray-500">
            Solo se recoge una vez por semana, en la noche (7pm - 10pm).
          </p>

          <div className="flex flex-col gap-2">
            {semanas.map((s) => {
              const selected = slotSel?.id === s.id;
              return (
                <button
                  key={s.id}
                  onClick={() => setSlotSel(s)}
                  className={`rounded-xl p-3 border text-left transition-all ${
                    selected ? "bg-[#C0F200]/20 border-[#C0F200]" : "bg-gray-50 border-gray-200"
                  }`}
                >
                  <p className="text-[11px] font-bold text-gray-400 uppercase tracking-wider">
                    {s.label}
                  </p>
                  <p className="text-[12px] font-bold text-gray-900 mt-0.5">
                    {s.dia} {s.fecha} · {s.horaInicio} - {s.horaFin}
                  </p>
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
              <span className="text-[12px] font-semibold text-gray-800">{distrito}</span>
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
              <span className="material-symbols-outlined text-[16px] text-gray-400 flex-shrink-0">
                search
              </span>
              <input
                type="text"
                value={direccion}
                onChange={(e) => setDireccion(e.target.value)}
                className="flex-1 bg-transparent outline-none text-[12px] text-gray-800 placeholder-gray-400 min-w-0"
              />
            </div>
            <button
              onClick={usarMiUbicacion}
              className="text-[10px] font-bold text-[#0288D1] mt-1.5 active:opacity-70"
            >
              Usar mi ubicación
            </button>
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

        <button
          onClick={() => navigate("/recojo/estado")}
          disabled={!slotSel}
          className={`w-full h-14 rounded-full font-extrabold text-[13px] flex items-center justify-center gap-2 transition-all mt-2 ${
            slotSel
              ? "bg-gradient-to-r from-[#C0F200] to-[#9fc700] text-gray-900 shadow-[0_8px_20px_rgba(192,242,0,0.3)] active:scale-95"
              : "bg-gray-100 text-gray-400 cursor-not-allowed"
          }`}
        >
          Confirmar Recojo
          <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
        </button>

        <p className="text-[10px] text-gray-500 text-center px-4 leading-snug">
          Ganarás aproximadamente{" "}
          <span className="font-extrabold text-[#536600]">+150 PTS</span> por este recojo.
        </p>
      </main>
    </div>
  );
}