import { useState } from "react";
import { useNavigate } from "react-router-dom";

const diasSemana = ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"];

// Día objetivo por semana: 1=Lunes, 2=Martes, 3=Miércoles, 4=Jueves
const diaObjetivoPorSemana = [1, 2, 3, 4];

function getProximasSemanas() {
  const hoy = new Date();
  const semanas = [];

  for (let s = 0; s < 4; s++) {
    const inicioSemana = new Date(hoy);
    inicioSemana.setDate(hoy.getDate() + s * 7);

    const diaObjetivo = diaObjetivoPorSemana[s];
    const diferenciaDias = (diaObjetivo - inicioSemana.getDay() + 7) % 7;
    const fecha = new Date(inicioSemana);
    fecha.setDate(inicioSemana.getDate() + diferenciaDias);

    semanas.push({
      label: `Semana ${s + 1}`,
      opcion: {
        id: `semana-${s}`,
        dia: diasSemana[fecha.getDay()],
        fecha: `${fecha.getDate()}/${fecha.getMonth() + 1}`,
        horaInicio: "7:00 PM",
        horaFin: "10:00 PM",
      },
    });
  }
  return semanas;
}

export default function RecojoModal({ isOpen, onClose, onConfirmar }) {
  const navigate = useNavigate();
  const [seleccionado, setSeleccionado] = useState(null);
  const semanas = getProximasSemanas();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-end justify-center bg-black/40">
      <div className="bg-white w-full max-h-[85%] rounded-t-[1.5rem] overflow-y-auto animate-slide-up">
        <style>{`
          @keyframes slide-up {
            from { transform: translateY(100%); }
            to { transform: translateY(0); }
          }
          .animate-slide-up { animation: slide-up 0.25s ease-out; }
        `}</style>

        <div className="flex justify-between items-center px-4 pt-4 pb-3 sticky top-0 bg-white border-b border-gray-100 z-10">
          <div>
            <span className="text-sm font-bold text-gray-900">Programar Recojo</span>
            <p className="text-[10px] text-gray-500 mt-0.5">
              Un horario fijo por semana, en la noche entre semana.
            </p>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-500 active:scale-90 transition-transform flex-shrink-0"
          >
            <span className="material-symbols-outlined text-[16px]">close</span>
          </button>
        </div>

        <div className="px-4 py-3 flex flex-col gap-4">
          {/* Dirección guardada (de solo lectura, viene del perfil) */}
          <div className="bg-gray-50 rounded-xl p-3 flex items-center gap-2.5 border border-gray-100">
            <span className="material-symbols-outlined text-[18px] text-gray-500 flex-shrink-0">
              location_on
            </span>
            <div className="flex-1 min-w-0">
              <p className="text-[9px] font-bold text-gray-400 uppercase tracking-wider">
                Recojo en
              </p>
              <p className="text-[11px] font-semibold text-gray-800 truncate">
                Av. José Larco 1234, Dpto 502 · San Isidro
              </p>
            </div>
            <button
              onClick={() => navigate("/recojo")}
              className="text-[10px] font-bold text-[#0288D1] flex-shrink-0"
            >
              Cambiar
            </button>
          </div>

          {semanas.map((semana) => (
            <div key={semana.label} className="flex flex-col gap-1.5">
              <h3 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                {semana.label}
              </h3>
              <button
                onClick={() => setSeleccionado(semana.opcion)}
                className={`rounded-xl p-3 border text-left transition-all ${
                  seleccionado?.id === semana.opcion.id
                    ? "bg-[#C0F200]/20 border-[#C0F200]"
                    : "bg-white border-gray-200"
                }`}
              >
                <p className="text-[12px] font-bold text-gray-900">
                  {semana.opcion.dia} {semana.opcion.fecha}
                </p>
                <p className="text-[10px] text-gray-500 mt-0.5">
                  {semana.opcion.horaInicio} - {semana.opcion.horaFin}
                </p>
              </button>
            </div>
          ))}
        </div>

        <div className="sticky bottom-0 bg-white border-t border-gray-100 px-4 py-3">
          <button
            onClick={() => seleccionado && onConfirmar(seleccionado)}
            disabled={!seleccionado}
            className={`w-full h-12 rounded-full font-bold text-sm transition-all ${
              seleccionado
                ? "bg-[#C0F200] text-gray-900 active:scale-95"
                : "bg-gray-100 text-gray-400 cursor-not-allowed"
            }`}
          >
            Confirmar Recojo
          </button>
        </div>
      </div>
    </div>
  );
}