import { useState } from "react";
import { useNavigate } from "react-router-dom";

const scanBg =
  "https://thumbs.dreamstime.com/b/caja-de-cart%C3%B3n-con-botellas-pl%C3%A1stico-usadas-en-la-mesa-cocina-problema-reciclaje-213086271.jpg";

const initialItems = [
  { id: 1, label: "Botellas PET", cantidad: 8, confianza: 96, icon: "water_bottle", color: "#38BDF8" },
  { id: 2, label: "Caja de Cartón", cantidad: 1, confianza: 94, icon: "inventory_2", color: "#C0F200" },
];

export default function AiResult() {
  const navigate = useNavigate();
  const [items, setItems] = useState(initialItems);

  const updateCantidad = (id, delta) => {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, cantidad: Math.max(0, item.cantidad + delta) }
          : item
      )
    );
  };

  return (
    <div className="min-h-full pb-32 bg-gray-50/50">
      {/* Header */}
      <div className="flex justify-between items-center px-4 pt-9 pb-3 sticky top-0 bg-white/90 backdrop-blur-xl z-20 border-b border-gray-100">
        <button
          onClick={() => navigate("/")}
          className="w-9 h-9 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-500 active:scale-90 transition-transform"
        >
          <span className="material-symbols-outlined text-[18px]">close</span>
        </button>
        <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
          Análisis IA
        </span>
        <div className="w-9"></div>
      </div>

      <main className="w-full px-4 pt-3 flex flex-col gap-4">

        {/* Foto escaneada */}
        <section className="relative w-full aspect-square rounded-[1.25rem] overflow-hidden shadow-[0_4px_20px_rgb(0,0,0,0.06)]">
          <div
            className="absolute inset-0 bg-no-repeat bg-center"
            style={{ backgroundImage: `url(${scanBg})`, backgroundSize: "auto 110%" }}
          ></div>
          <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-sm">
            <span className="material-symbols-outlined text-[14px] text-[#4CAF50]" style={{ fontVariationSettings: "'FILL' 1" }}>
              verified
            </span>
            <span className="text-[10px] font-bold text-gray-800">Precisión Alta</span>
          </div>
        </section>

        {/* Título + aviso de edición */}
        <div>
          <h1 className="text-lg font-extrabold text-gray-900 tracking-tight">
            Materiales Detectados
          </h1>
          <p className="text-[11px] text-gray-500 mt-0.5">
            ¿La cantidad no es correcta? Ajústala manualmente.
          </p>
        </div>

        {/* Cards de materiales con edición */}
        <section className="grid grid-cols-2 gap-3">
          {items.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-[1.25rem] p-3.5 shadow-[0_4px_20px_rgb(0,0,0,0.03)] flex flex-col gap-2"
            >
              <div className="flex justify-between items-start">
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: `${item.color}22`, color: item.color }}
                >
                  <span className="material-symbols-outlined text-[18px]">
                    {item.icon}
                  </span>
                </div>
                <span className="text-[9px] font-bold text-gray-400 bg-gray-100 px-2 py-0.5 rounded-full">
                  {item.confianza}%
                </span>
              </div>

              <p className="text-[11px] text-gray-500 font-medium leading-tight">
                {item.label}
              </p>

              {/* Control de cantidad editable */}
              <div className="flex items-center justify-between mt-0.5">
                <button
                  onClick={() => updateCantidad(item.id, -1)}
                  className="w-7 h-7 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 active:scale-90 transition-transform"
                >
                  <span className="material-symbols-outlined text-[16px]">remove</span>
                </button>
                <span className="text-xl font-extrabold text-gray-900">
                  {item.cantidad}
                </span>
                <button
                  onClick={() => updateCantidad(item.id, 1)}
                  className="w-7 h-7 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 active:scale-90 transition-transform"
                >
                  <span className="material-symbols-outlined text-[16px]">add</span>
                </button>
              </div>

              <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden mt-1">
                <div
                  className="h-full rounded-full"
                  style={{ width: `${item.confianza}%`, backgroundColor: item.color }}
                ></div>
              </div>
            </div>
          ))}
        </section>

        {/* Resumen de estimación */}
        <section className="bg-gray-900 text-white rounded-[1.25rem] p-4 relative overflow-hidden flex flex-col gap-2">
          <div className="absolute -right-6 -top-6 w-28 h-28 bg-[#C0F200]/10 rounded-full blur-2xl"></div>

          <div className="flex items-center gap-2 relative z-10">
            <span className="material-symbols-outlined text-[16px] text-[#C0F200]">
              monitoring
            </span>
            <h3 className="text-[10px] font-bold text-[#C0F200] uppercase tracking-widest">
              Estimación Total
            </h3>
          </div>

          <div className="flex justify-between items-end relative z-10">
            <div>
              <p className="text-[10px] text-gray-400">Peso estimado</p>
              <p className="text-xl font-extrabold">~1.5 kg</p>
            </div>
            <div className="w-px h-10 bg-white/10"></div>
            <div className="text-right">
              <p className="text-[10px] text-gray-400">Valor estimado</p>
              <p className="text-xl font-extrabold text-[#C0F200]">S/ 4.20</p>
            </div>
          </div>
        </section>

        {/* Botón continuar - dentro del flujo normal, NO absolute */}
        <button
          onClick={() => navigate("/scan/decision")}
          className="w-full h-14 bg-[#C0F200] text-gray-900 rounded-full font-bold flex items-center justify-center gap-2 shadow-[0_8px_20px_rgba(192,242,0,0.3)] active:scale-95 transition-all duration-200"
        >
          <span className="text-sm">Continuar</span>
          <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
        </button>
      </main>
    </div>
  );
}
