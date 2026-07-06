const solicitudesPendientes = [
  {
    id: 1,
    nombre: "Yudith Pacco",
    direccion: "Av. José Larco 1234, San Isidro",
    materiales: "18 Botellas PET, 5 Cajas de Cartón",
    peso: "6.2 kg",
    horario: "Mar 14/7, 7:00 PM - 10:00 PM",
    estado: "pendiente",
  },
  {
    id: 2,
    nombre: "Juan Pérez",
    direccion: "Calle Los Pinos 456, Miraflores",
    materiales: "12 Latas de Aluminio",
    peso: "1.8 kg",
    horario: "Mié 15/7, 7:00 PM - 10:00 PM",
    estado: "pendiente",
  },
  {
    id: 3,
    nombre: "María Castro",
    direccion: "Jr. Las Flores 789, Barranco",
    materiales: "Cartón corrugado",
    peso: "4.5 kg",
    horario: "Jue 16/7, 7:00 PM - 10:00 PM",
    estado: "pendiente",
  },
];

export default function AdminDashboard() {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-2xl font-extrabold text-gray-900 tracking-tight">
          Dashboard
        </h1>
        <p className="text-sm text-gray-500 mt-1">
          Resumen de operaciones y solicitudes pendientes.
        </p>
      </div>

      <div className="grid grid-cols-4 gap-4">
        <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
          <span className="material-symbols-outlined text-[24px] text-[#536600]">
            list_alt
          </span>
          <p className="text-2xl font-extrabold text-gray-900 mt-2">
            {solicitudesPendientes.length}
          </p>
          <p className="text-xs text-gray-500 mt-0.5">Solicitudes pendientes</p>
        </div>
        <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
          <span className="material-symbols-outlined text-[24px] text-[#0288D1]">
            recycling
          </span>
          <p className="text-2xl font-extrabold text-gray-900 mt-2">12.5 kg</p>
          <p className="text-xs text-gray-500 mt-0.5">Recolectado esta semana</p>
        </div>
        <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
          <span className="material-symbols-outlined text-[24px] text-[#D4A017]">
            local_shipping
          </span>
          <p className="text-2xl font-extrabold text-gray-900 mt-2">4</p>
          <p className="text-xs text-gray-500 mt-0.5">Rutas activas</p>
        </div>
        <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
          <span className="material-symbols-outlined text-[24px] text-[#9333EA]">
            groups
          </span>
          <p className="text-2xl font-extrabold text-gray-900 mt-2">248</p>
          <p className="text-xs text-gray-500 mt-0.5">Usuarios activos</p>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="px-5 py-4 border-b border-gray-100 flex justify-between items-center">
          <h2 className="text-base font-bold text-gray-900">
            Solicitudes Pendientes
            </h2>

            <a
            href="/admin/solicitudes"
            className="text-xs font-bold text-[#536600] hover:underline"
            >
            Ver todas
            </a>
        </div>
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-gray-50 text-left text-xs text-gray-500 uppercase">
              <th className="px-5 py-3 font-semibold">Usuario</th>
              <th className="px-5 py-3 font-semibold">Dirección</th>
              <th className="px-5 py-3 font-semibold">Materiales</th>
              <th className="px-5 py-3 font-semibold">Peso</th>
              <th className="px-5 py-3 font-semibold">Horario</th>
              <th className="px-5 py-3 font-semibold"></th>
            </tr>
          </thead>
          <tbody>
            {solicitudesPendientes.map((s) => (
              <tr key={s.id} className="border-t border-gray-100">
                <td className="px-5 py-3 font-semibold text-gray-800">
                  {s.nombre}
                </td>
                <td className="px-5 py-3 text-gray-600">{s.direccion}</td>
                <td className="px-5 py-3 text-gray-600">{s.materiales}</td>
                <td className="px-5 py-3 text-gray-600">{s.peso}</td>
                <td className="px-5 py-3 text-gray-600">{s.horario}</td>
                <td className="px-5 py-3">
                  <button className="bg-[#C0F200] text-gray-900 text-xs font-bold px-3 py-1.5 rounded-full hover:opacity-90">
                    Asignar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}