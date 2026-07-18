const rutasActivas = [
  {
    id: 1,
    recolector: "Carlos M.",
    distrito: "San Isidro",
    paradas: 4,
    completadas: 1,
    horario: "Mar 14/7, 7:00 PM - 10:00 PM",
    estado: "en_progreso",
  },
  {
    id: 2,
    recolector: "Ana R.",
    distrito: "Miraflores",
    paradas: 3,
    completadas: 0,
    horario: "Mié 15/7, 7:00 PM - 10:00 PM",
    estado: "programada",
  },
];

export default function AdminRutas() {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-2xl font-extrabold text-gray-900 tracking-tight">
          Rutas de Recolección
        </h1>
        <p className="text-sm text-gray-500 mt-1">
          Optimizadas por distrito con Google Maps.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-5">
        {rutasActivas.map((r) => (
          <div
            key={r.id}
            className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 flex flex-col gap-4"
          >
            <div className="flex justify-between items-start">
              <div>
                <p className="text-base font-bold text-gray-900">{r.recolector}</p>
                <p className="text-xs text-gray-500 mt-0.5">{r.distrito}</p>
              </div>
              <span
                className={`text-xs font-bold px-2.5 py-1 rounded-full ${
                  r.estado === "en_progreso"
                    ? "bg-[#E8F5D8] text-[#536600]"
                    : "bg-gray-100 text-gray-500"
                }`}
              >
                {r.estado === "en_progreso" ? "En progreso" : "Programada"}
              </span>
            </div>

            <div className="w-full h-32 rounded-xl bg-gray-100 flex items-center justify-center">
              <span className="material-symbols-outlined text-[36px] text-gray-300">
                map
              </span>
            </div>

            <div>
              <div className="flex justify-between text-xs text-gray-500 mb-1">
                <span>Progreso</span>
                <span>
                  {r.completadas}/{r.paradas} paradas
                </span>
              </div>
              <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                <div
                  className="h-full bg-[#C0F200] rounded-full"
                  style={{ width: `${(r.completadas / r.paradas) * 100}%` }}
                />
              </div>
            </div>

            <p className="text-xs text-gray-500">{r.horario}</p>
          </div>
        ))}
      </div>
    </div>
  );
}