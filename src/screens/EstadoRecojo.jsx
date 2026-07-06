import { useNavigate } from "react-router-dom";
import TopAppBar from "../components/layout/TopAppBar";

const pasos = [
  {
    id: 1,
    titulo: "Solicitud enviada",
    descripcion: "Tu solicitud ha sido registrada exitosamente.",
    timestamp: "10:00 AM - Hoy",
    icon: "send",
    estado: "completado",
  },
  {
    id: 2,
    titulo: "Verificada por IA",
    descripcion:
      "Nuestra IA ha validado los materiales reciclables en tu solicitud.",
    timestamp: "10:05 AM - Hoy",
    icon: "auto_awesome",
    estado: "completado",
  },
  {
    id: 3,
    titulo: "Ruta programada",
    descripcion: "Un recolector ha sido asignado y se dirige a tu zona.",
    timestamp: null,
    icon: "alt_route",
    estado: "activo",
    recolector: { nombre: "Carlos M.", rating: "4.9", recojos: "120" },
  },
  {
    id: 4,
    titulo: "En camino",
    descripcion: "El recolector está cerca de tu ubicación.",
    timestamp: null,
    icon: "local_shipping",
    estado: "pendiente",
  },
  {
    id: 5,
    titulo: "Recolectado",
    descripcion: "Los materiales han sido entregados al recolector.",
    timestamp: null,
    icon: "inventory_2",
    estado: "pendiente",
  },
  {
    id: 6,
    titulo: "Pago realizado",
    descripcion: "Tus puntos ACOPI han sido acreditados a tu cuenta.",
    timestamp: null,
    icon: "payments",
    estado: "pendiente",
  },
];

function StepIcon({ estado, icon }) {
  if (estado === "completado") {
    return (
      <div className="w-10 h-10 rounded-full bg-[#536600] flex items-center justify-center flex-shrink-0 shadow-sm">
        <span
          className="material-symbols-outlined text-white text-[18px]"
          style={{ fontVariationSettings: "'FILL' 1" }}
        >
          {icon}
        </span>
      </div>
    );
  }
  if (estado === "activo") {
    return (
      <div className="w-10 h-10 rounded-full bg-[#C0F200] flex items-center justify-center flex-shrink-0 shadow-[0_0_0_4px_rgba(192,242,0,0.25)]">
        <span
          className="material-symbols-outlined text-gray-900 text-[18px]"
          style={{ fontVariationSettings: "'FILL' 1" }}
        >
          {icon}
        </span>
      </div>
    );
  }
  return (
    <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0 border border-gray-200">
      <span
        className="material-symbols-outlined text-gray-400 text-[18px]"
        style={{ fontVariationSettings: "'FILL' 1" }}
      >
        {icon}
      </span>
    </div>
  );
}

export default function EstadoRecojo() {
  const navigate = useNavigate();

  return (
    <div className="min-h-full pb-32 bg-gray-50/50">
      {/* HEADER */}
      <TopAppBar points="1,250" />

      <main className="w-full px-4 pt-5 flex flex-col gap-4">
        {/* TÍTULO */}
        <section>
          <h1 className="text-[22px] font-extrabold text-gray-900 tracking-tight leading-tight">
            Seguimiento de Recojo
          </h1>
          <p className="text-[12px] text-gray-500 mt-1 leading-snug">
            Revisa el estado de tu recolección ecológica en tiempo real.
          </p>
        </section>

        {/* TIMELINE */}
        <section className="bg-white rounded-[1.25rem] p-4 shadow-[0_4px_20px_rgb(0,0,0,0.03)]">
          <div className="flex flex-col">
            {pasos.map((paso, idx) => {
              const isLast = idx === pasos.length - 1;
              const isPending = paso.estado === "pendiente";

              return (
                <div key={paso.id} className="flex gap-3">
                  <div className="flex flex-col items-center">
                    <StepIcon estado={paso.estado} icon={paso.icon} />
                    {!isLast && (
                      <div
                        className="w-0.5 flex-1 mt-1"
                        style={{
                          minHeight: "20px",
                          backgroundColor: isPending ? "#D1D5DB" : "#536600",
                        }}
                      />
                    )}
                  </div>

                  <div className={`flex-1 ${isLast ? "" : "pb-5"}`}>
                    <h3
                      className={`text-[13px] font-extrabold leading-tight ${
                        isPending ? "text-gray-400" : "text-gray-900"
                      }`}
                    >
                      {paso.titulo}
                    </h3>
                    <p
                      className={`text-[11px] mt-1 leading-snug ${
                        isPending ? "text-gray-400" : "text-gray-600"
                      }`}
                    >
                      {paso.descripcion}
                    </p>
                    {paso.timestamp && (
                      <p className="text-[10px] text-gray-500 mt-1.5 font-medium tracking-wide">
                        {paso.timestamp}
                      </p>
                    )}
                    {paso.recolector && (
                      <div className="bg-gray-50 rounded-2xl p-2.5 mt-3 flex items-center gap-3 border border-gray-100">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#E8F5D8] to-[#C0F200] flex-shrink-0 flex items-center justify-center text-lg shadow-sm">
                          👷
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-[12px] font-extrabold text-gray-900 leading-tight">
                            {paso.recolector.nombre}
                          </p>
                          <div className="flex items-center gap-1 mt-0.5">
                            <span
                              className="material-symbols-outlined text-[12px] text-[#D4A017]"
                              style={{ fontVariationSettings: "'FILL' 1" }}
                            >
                              star
                            </span>
                            <span className="text-[10px] text-gray-600 font-semibold">
                              {paso.recolector.rating} ({paso.recolector.recojos}{" "}
                              recojos)
                            </span>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* CONTACTAR SOPORTE */}
        <button
          onClick={() => alert("Conectando con soporte…")}
          className="w-full h-12 border-2 border-gray-300 text-gray-700 rounded-full font-bold text-[12px] flex items-center justify-center gap-2 active:scale-[0.98] transition-transform bg-white mt-1"
        >
          <span className="material-symbols-outlined text-[16px]">
            support_agent
          </span>
          Contactar Soporte
        </button>
      </main>
    </div>
  );
}
