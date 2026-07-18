import { useState } from "react";

const solicitudesIniciales = [
  {
    id: 1,
    nombre: "Yudith Pacco",
    distrito: "San Isidro",
    direccion: "Av. José Larco 1234, Dpto 502",
    materiales: "15 Botellas PET, 1 Caja de Cartón",
    peso: "6.2 kg",
    horario: "Mar 14/7, 7:00 PM - 10:00 PM",
    estado: "pendiente",
    recolector: null,
  },
  {
    id: 2,
    nombre: "Juan Pérez",
    distrito: "Miraflores",
    direccion: "Calle Los Pinos 456",
    materiales: "12 Latas de Aluminio",
    peso: "1.8 kg",
    horario: "Mié 15/7, 7:00 PM - 10:00 PM",
    estado: "pendiente",
    recolector: null,
  },
  {
    id: 3,
    nombre: "María Castro",
    distrito: "Barranco",
    direccion: "Jr. Las Flores 789",
    materiales: "Cartón corrugado",
    peso: "4.5 kg",
    horario: "Jue 16/7, 7:00 PM - 10:00 PM",
    estado: "asignado",
    recolector: "Carlos M.",
  },
];

const recolectores = ["Carlos M.", "Ana R.", "Diego F."];
const distritos = ["Todos", "San Isidro", "Miraflores", "Barranco", "Surco"];

export default function AdminSolicitudes() {
  const [solicitudes, setSolicitudes] = useState(solicitudesIniciales);
  const [filtroDistrito, setFiltroDistrito] = useState("Todos");
  const [notificacion, setNotificacion] = useState(null);

  const asignarRecolector = (id, recolector) => {
    setSolicitudes((prev) =>
      prev.map((s) =>
        s.id === id ? { ...s, estado: "asignado", recolector } : s
      )
    );
    mostrarNotificacion(
      `Se asignó a ${recolector}. El usuario fue notificado de su ruta programada.`
    );
  };

  const marcarEnCamino = (id) => {
    setSolicitudes((prev) =>
      prev.map((s) => (s.id === id ? { ...s, estado: "en_camino" } : s))
    );
    mostrarNotificacion(
      `Notificación enviada al usuario: "El recolector está cerca de tu ubicación."`
    );
  };

  const marcarCompletado = (id) => {
    setSolicitudes((prev) =>
      prev.map((s) => (s.id === id ? { ...s, estado: "completado" } : s))
    );
    mostrarNotificacion(
      `Recojo completado. Pago acreditado en la EcoBilletera del usuario.`
    );
  };

  const mostrarNotificacion = (msg) => {
    setNotificacion(msg);
    setTimeout(() => setNotificacion(null), 3500);
  };

  const solicitudesFiltradas =
    filtroDistrito === "Todos"
      ? solicitudes
      : solicitudes.filter((s) => s.distrito === filtroDistrito);

  const badgeEstado = {
    pendiente: { label: "Pendiente", bg: "bg-yellow-100", text: "text-yellow-700" },
    asignado: { label: "Asignado", bg: "bg-blue-100", text: "text-blue-700" },
    en_camino: { label: "En camino", bg: "bg-[#E8F5D8]", text: "text-[#536600]" },
    completado: { label: "Completado", bg: "bg-gray-100", text: "text-gray-500" },
  };

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-2xl font-extrabold text-gray-900 tracking-tight">
          Solicitudes de Recojo
        </h1>
        <p className="text-sm text-gray-500 mt-1">
          Asigna recolectores y notifica a los usuarios en cada etapa.
        </p>
      </div>

      {/* Toast de notificación simulada */}
      {notificacion && (
        <div className="fixed top-6 right-6 z-50 bg-gray-900 text-white px-5 py-3 rounded-xl shadow-lg flex items-center gap-3 max-w-sm animate-fade-in">
          <span className="material-symbols-outlined text-[#C0F200] text-[20px]">
            notifications_active
          </span>
          <p className="text-sm">{notificacion}</p>
        </div>
      )}

      {/* Filtro por distrito */}
      <div className="flex gap-2">
        {distritos.map((d) => (
          <button
            key={d}
            onClick={() => setFiltroDistrito(d)}
            className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
              filtroDistrito === d
                ? "bg-[#C0F200] text-gray-900"
                : "bg-white border border-gray-200 text-gray-600"
            }`}
          >
            {d}
          </button>
        ))}
      </div>

      {/* Tabla */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-gray-50 text-left text-xs text-gray-500 uppercase">
              <th className="px-5 py-3 font-semibold">Usuario</th>
              <th className="px-5 py-3 font-semibold">Dirección</th>
              <th className="px-5 py-3 font-semibold">Materiales</th>
              <th className="px-5 py-3 font-semibold">Horario</th>
              <th className="px-5 py-3 font-semibold">Estado</th>
              <th className="px-5 py-3 font-semibold">Acción</th>
            </tr>
          </thead>
          <tbody>
            {solicitudesFiltradas.map((s) => {
              const badge = badgeEstado[s.estado];
              return (
                <tr key={s.id} className="border-t border-gray-100">
                  <td className="px-5 py-3 font-semibold text-gray-800">
                    {s.nombre}
                    <p className="text-xs text-gray-400 font-normal">{s.distrito}</p>
                  </td>
                  <td className="px-5 py-3 text-gray-600">{s.direccion}</td>
                  <td className="px-5 py-3 text-gray-600">
                    {s.materiales}
                    <p className="text-xs text-gray-400">{s.peso}</p>
                  </td>
                  <td className="px-5 py-3 text-gray-600">{s.horario}</td>
                  <td className="px-5 py-3">
                    <span className={`${badge.bg} ${badge.text} text-xs font-bold px-2.5 py-1 rounded-full`}>
                      {badge.label}
                    </span>
                    {s.recolector && (
                      <p className="text-xs text-gray-400 mt-1">{s.recolector}</p>
                    )}
                  </td>
                  <td className="px-5 py-3">
                    {s.estado === "pendiente" && (
                      <select
                        onChange={(e) =>
                          e.target.value && asignarRecolector(s.id, e.target.value)
                        }
                        defaultValue=""
                        className="text-xs border border-gray-200 rounded-lg px-2 py-1.5 bg-white"
                      >
                        <option value="" disabled>
                          Asignar...
                        </option>
                        {recolectores.map((r) => (
                          <option key={r} value={r}>
                            {r}
                          </option>
                        ))}
                      </select>
                    )}
                    {s.estado === "asignado" && (
                      <button
                        onClick={() => marcarEnCamino(s.id)}
                        className="bg-[#0288D1] text-white text-xs font-bold px-3 py-1.5 rounded-full hover:opacity-90"
                      >
                        Notificar "en camino"
                      </button>
                    )}
                    {s.estado === "en_camino" && (
                      <button
                        onClick={() => marcarCompletado(s.id)}
                        className="bg-[#C0F200] text-gray-900 text-xs font-bold px-3 py-1.5 rounded-full hover:opacity-90"
                      >
                        Marcar completado
                      </button>
                    )}
                    {s.estado === "completado" && (
                      <span className="text-xs text-gray-400">✓ Finalizado</span>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in { animation: fade-in 0.3s ease-out; }
      `}</style>
    </div>
  );
}