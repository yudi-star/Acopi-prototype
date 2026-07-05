import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const initialMessages = [
  { id: 1, type: "date", text: "Hoy, 10:42 AM" },
  {
    id: 2,
    from: "bot",
    text: "¡Hola! He analizado las fotos que enviaste de tu estación de reciclaje en casa. ¿En qué más puedo ayudarte hoy?",
  },
  {
    id: 3,
    from: "user",
    text: "¿Ya puedo solicitar un recojo?",
  },
  {
    id: 4,
    from: "bot",
    rich: true,
    summary: {
      texto:
        "¡Sí! Según mi análisis de las imágenes recientes, has acumulado suficiente material. Aquí tienes el resumen de tu inventario estimado:",
      peso: "6.2",
      unidad: "kg",
      items: [
        { cantidad: 18, label: "Botellas (PET)", icon: "water_bottle", bg: "#E0F2FE", color: "#0288D1" },
        { cantidad: 5, label: "Cartones", icon: "inventory_2", bg: "#FEF3C7", color: "#D4A017" },
      ],
      progreso: 85,
      progresoLabel: "Progreso Nivel Eco-Héroe",
      detalle: "Este recojo te dará ~150 pts adicionales.",
    },
  },
];

function BotAvatar() {
  return (
    <div className="w-7 h-7 rounded-full bg-[#C0F200] flex items-center justify-center flex-shrink-0 mb-1 shadow-sm">
      <span
        className="material-symbols-outlined text-[14px] text-[#3A4D00]"
        style={{ fontVariationSettings: "'FILL' 1" }}
      >
        eco
      </span>
    </div>
  );
}

function SummaryCard({ summary, onProgramar }) {
  return (
    <div className="bg-white rounded-[1.25rem] p-3.5 shadow-[0_4px_20px_rgb(0,0,0,0.03)] max-w-[82%] flex flex-col gap-3">
      <p className="text-[12px] text-gray-800 leading-snug">{summary.texto}</p>

      {/* BANNER DE PESO (ancho completo) */}
      <div className="flex items-center gap-3 bg-[#E8F5D8] rounded-xl p-3 border border-[#D4E8B5]">
        <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center flex-shrink-0 shadow-sm">
          <span
            className="material-symbols-outlined text-[20px] text-[#536600]"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            scale
          </span>
        </div>
        <div className="flex items-baseline gap-1">
          <span className="text-2xl font-extrabold text-[#3A4D00] leading-none">
            {summary.peso}
          </span>
          <span className="text-sm font-bold text-[#536600] leading-none">
            {summary.unidad}
          </span>
        </div>
        <span className="text-[8px] font-extrabold text-[#536600] uppercase tracking-wider ml-auto text-right leading-tight">
          Peso Total
          <br />
          Estimado
        </span>
      </div>

      {/* ITEMS (apilados verticalmente, cada uno ancho completo) */}
      <div className="flex flex-col gap-1.5">
        {summary.items.map((it, idx) => (
          <div
            key={idx}
            className="bg-gray-50 rounded-lg p-2.5 flex items-center gap-3 border border-gray-100"
          >
            <div
              className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0"
              style={{ backgroundColor: it.bg, color: it.color }}
            >
              <span
                className="material-symbols-outlined text-[18px]"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                {it.icon}
              </span>
            </div>
            <div className="flex items-baseline gap-1.5 min-w-0 flex-1">
              <span className="text-lg font-extrabold text-gray-900 leading-none flex-shrink-0">
                {it.cantidad}
              </span>
              <span className="text-[11px] text-gray-600 font-semibold whitespace-nowrap">
                {it.label}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-1.5">
        <div className="flex justify-between items-end">
          <span className="text-[10px] font-bold text-gray-700">
            {summary.progresoLabel}
          </span>
          <span className="text-[10px] font-extrabold text-[#536600]">
            {summary.progreso}%
          </span>
        </div>
        <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden p-[1px] shadow-inner">
          <div
            className="h-full rounded-full"
            style={{
              width: `${summary.progreso}%`,
              background: "linear-gradient(90deg, #C0F200, #38BDF8)",
            }}
          />
        </div>
        <p className="text-[10px] text-gray-500 leading-snug">
          {summary.detalle}
        </p>
      </div>

      <button
        onClick={onProgramar}
        className="w-full h-11 rounded-xl bg-gradient-to-r from-[#C0F200] to-[#9fc700] text-gray-900 font-bold text-[12px] flex items-center justify-center gap-2 shadow-[0_6px_16px_rgba(192,242,0,0.3)] active:scale-95 transition-all"
      >
        <span className="material-symbols-outlined text-[16px]">
          local_shipping
        </span>
        Programar Recojo Ahora
      </button>
    </div>
  );
}

export default function ChatIA() {
  const navigate = useNavigate();
  const [messages, setMessages] = useState(initialMessages);
  const [input, setInput] = useState("");
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ block: "end" });
  }, [messages]);

  const sendMessage = () => {
    const text = input.trim();
    if (!text) return;
    setMessages((prev) => [...prev, { id: Date.now(), from: "user", text }]);
    setInput("");
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          from: "bot",
          text: "Recibido. Estoy revisando tu consulta, dame un momento…",
        },
      ]);
    }, 1200);
  };

  return (
    <div className="h-full bg-gray-50/50 flex flex-col overflow-hidden">
      {/* HEADER */}
      <header className="flex-shrink-0 bg-white/95 backdrop-blur-xl z-30 border-b border-gray-100 flex justify-between items-center px-4 pt-9 pb-3 shadow-[0_4px_20px_rgb(0,0,0,0.02)]">
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-full bg-[#C0F200] flex items-center justify-center shadow-sm">
            <span
              className="material-symbols-outlined text-[18px] text-[#3A4D00]"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              eco
            </span>
          </div>
          <div className="flex flex-col leading-none">
            <span className="text-base font-extrabold text-[#536600] tracking-tight">
              ACOPI
            </span>
            <span className="text-[8px] text-gray-500 font-bold uppercase tracking-widest mt-0.5">
              Asistente IA
            </span>
          </div>
        </div>
        <div className="bg-gray-100 border border-gray-200 px-2.5 py-1.5 rounded-full flex items-center gap-1">
          <span
            className="material-symbols-outlined text-[13px] text-[#536600]"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            add_circle
          </span>
          <span className="text-[10px] font-extrabold text-gray-700 leading-none tracking-wide">
            1,250 PTS
          </span>
        </div>
      </header>

      {/* MENSAJES (scrollable) */}
      <main className="flex-1 overflow-y-auto px-4 pt-3 pb-24 flex flex-col gap-2.5">
        {messages.map((msg) => {
          if (msg.type === "date") {
            return (
              <div key={msg.id} className="flex justify-center my-1">
                <span className="bg-gray-100 text-gray-500 text-[10px] font-bold px-3 py-1 rounded-full">
                  {msg.text}
                </span>
              </div>
            );
          }

          if (msg.from === "bot") {
            return (
              <div key={msg.id} className="flex gap-2 items-end">
                <BotAvatar />
                {msg.rich ? (
                  <SummaryCard
                    summary={msg.summary}
                    onProgramar={() => navigate("/recojo")}
                  />
                ) : (
                  <div className="bg-white rounded-[1.25rem] rounded-bl-md p-3 shadow-[0_4px_20px_rgb(0,0,0,0.03)] max-w-[80%] text-[12px] text-gray-800 leading-snug">
                    {msg.text}
                  </div>
                )}
              </div>
            );
          }

          return (
            <div key={msg.id} className="flex justify-end">
              <div className="bg-[#38BDF8] text-white rounded-[1.25rem] rounded-tr-md px-3.5 py-2 max-w-[80%] text-[12px] leading-snug shadow-[0_4px_12px_rgba(56,189,248,0.2)]">
                {msg.text}
              </div>
            </div>
          );
        })}
        <div ref={bottomRef} />
      </main>

      {/* INPUT (fijo, absolute, sobre el BottomNav) */}
      <div className="absolute bottom-24 left-0 right-0 bg-gray-50/80 backdrop-blur-md px-4 pt-2 pb-3 z-20">
        <div className="bg-white rounded-full shadow-[0_4px_16px_rgb(0,0,0,0.06)] flex items-center pl-2 pr-1 py-1 gap-1 border border-gray-100">
          <button className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 flex-shrink-0 active:scale-90 transition-transform">
            <span className="material-symbols-outlined text-[16px]">
              photo_camera
            </span>
          </button>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            placeholder="Escribe un mensaje o sube una foto..."
            className="flex-1 bg-transparent outline-none text-[12px] text-gray-700 placeholder-gray-400 px-1 min-w-0"
          />
          <button
            onClick={sendMessage}
            disabled={!input.trim()}
            className="w-8 h-8 rounded-full bg-[#C0F200] flex items-center justify-center flex-shrink-0 active:scale-90 transition-transform disabled:opacity-40"
          >
            <span className="material-symbols-outlined text-[16px] text-gray-900">
              send
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
