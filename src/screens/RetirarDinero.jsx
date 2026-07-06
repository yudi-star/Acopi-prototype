import { useState } from "react";
import { useNavigate } from "react-router-dom";
import TopAppBar from "../components/layout/TopAppBar";

const metodos = [
  { id: "yape", nombre: "Yape", icon: "phone_iphone", color: "#722F8E", bg: "#F3E8FA" },
  { id: "plin", nombre: "Plin", icon: "smartphone", color: "#00A650", bg: "#E5F7EA" },
  { id: "tarjeta", nombre: "Tarjeta", icon: "credit_card", color: "#0288D1", bg: "#E0F2FE" },
];

const SALDO_DISPONIBLE = 45.5;
const MONTO_MINIMO = 10;

export default function RetirarDinero() {
  const navigate = useNavigate();
  const [metodoSel, setMetodoSel] = useState("yape");
  const [monto, setMonto] = useState("");
  const [numero, setNumero] = useState("");
  const [paso, setPaso] = useState("form"); // form | procesando | exito

  const montoNum = parseFloat(monto) || 0;
  const montoValido = montoNum >= MONTO_MINIMO && montoNum <= SALDO_DISPONIBLE;
  const numeroValido = metodoSel === "tarjeta" ? numero.length >= 16 : numero.length >= 9;
  const puedeRetirar = montoValido && numeroValido;

  const handleRetirar = () => {
    setPaso("procesando");
    setTimeout(() => setPaso("exito"), 1800);
  };

  if (paso === "procesando") {
    return (
      <div className="h-full w-full bg-white flex flex-col items-center justify-center gap-4">
        <div className="w-14 h-14 rounded-full border-4 border-gray-100 border-t-[#C0F200] animate-spin"></div>
        <p className="text-sm font-bold text-gray-700">Procesando tu retiro...</p>
      </div>
    );
  }

  if (paso === "exito") {
    return (
      <div className="h-full w-full bg-white flex flex-col items-center justify-center gap-4 px-8">
        <div className="w-20 h-20 rounded-full bg-[#E8F5D8] flex items-center justify-center">
          <span
            className="material-symbols-outlined text-[40px] text-[#536600]"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            check_circle
          </span>
        </div>
        <div className="text-center">
          <h2 className="text-lg font-extrabold text-gray-900">¡Retiro exitoso!</h2>
          <p className="text-[12px] text-gray-500 mt-1">
            S/ {montoNum.toFixed(2)} enviados a tu {metodos.find((m) => m.id === metodoSel)?.nombre}.
          </p>
        </div>
        <button
          onClick={() => navigate("/billetera")}
          className="w-full h-12 bg-[#C0F200] text-gray-900 rounded-full font-bold text-sm mt-4 active:scale-95 transition-transform"
        >
          Volver a EcoBilletera
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-full pb-32 bg-gray-50/50">
      <TopAppBar back points="1,250" />

      <main className="w-full px-4 pt-5 flex flex-col gap-4">
        <div>
          <h1 className="text-xl font-extrabold text-gray-900 tracking-tight">
            Retirar dinero
          </h1>
          <p className="text-[11px] text-gray-500 mt-1">
            Saldo disponible: <span className="font-bold text-[#536600]">S/ {SALDO_DISPONIBLE.toFixed(2)}</span>
          </p>
        </div>

        {/* Selector de método */}
        <section className="flex flex-col gap-2">
          <label className="text-[10px] font-bold text-gray-500 uppercase tracking-wide px-1">
            Método de retiro
          </label>
          <div className="grid grid-cols-3 gap-2">
            {metodos.map((m) => {
              const selected = metodoSel === m.id;
              return (
                <button
                  key={m.id}
                  onClick={() => {
                    setMetodoSel(m.id);
                    setNumero("");
                  }}
                  className={`rounded-xl p-3 flex flex-col items-center gap-1.5 border transition-all ${
                    selected ? "border-[#C0F200] bg-[#F7FBEA]" : "border-gray-200 bg-white"
                  }`}
                >
                  <div
                    className="w-9 h-9 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: m.bg, color: m.color }}
                  >
                    <span className="material-symbols-outlined text-[18px]">{m.icon}</span>
                  </div>
                  <span className="text-[10px] font-bold text-gray-800">{m.nombre}</span>
                </button>
              );
            })}
          </div>
        </section>

        {/* Formulario */}
        <section className="bg-white rounded-[1.25rem] p-4 shadow-[0_4px_20px_rgb(0,0,0,0.03)] flex flex-col gap-3">
          <div>
            <label className="text-[10px] font-bold text-gray-500 uppercase tracking-wide">
              Monto a retirar
            </label>
            <div className="mt-1.5 bg-gray-50 border border-gray-200 rounded-xl px-3 py-2.5 flex items-center gap-2">
              <span className="text-sm font-bold text-gray-500">S/</span>
              <input
                type="number"
                value={monto}
                onChange={(e) => setMonto(e.target.value)}
                placeholder="0.00"
                className="flex-1 bg-transparent outline-none text-sm font-bold text-gray-800 placeholder-gray-300"
              />
            </div>
            {monto && !montoValido && (
              <p className="text-[10px] text-red-500 mt-1">
                {montoNum < MONTO_MINIMO
                  ? `El monto mínimo es S/ ${MONTO_MINIMO}`
                  : "No puedes retirar más de tu saldo disponible"}
              </p>
            )}
          </div>

          <div>
            <label className="text-[10px] font-bold text-gray-500 uppercase tracking-wide">
              {metodoSel === "tarjeta" ? "Número de tarjeta" : "Número de celular"}
            </label>
            <div className="mt-1.5 bg-gray-50 border border-gray-200 rounded-xl px-3 py-2.5">
              <input
                type="text"
                value={numero}
                onChange={(e) => setNumero(e.target.value.replace(/\D/g, ""))}
                placeholder={metodoSel === "tarjeta" ? "1234 5678 9012 3456" : "987 654 321"}
                maxLength={metodoSel === "tarjeta" ? 16 : 9}
                className="w-full bg-transparent outline-none text-sm text-gray-800 placeholder-gray-300"
              />
            </div>
          </div>
        </section>

        <button
          onClick={handleRetirar}
          disabled={!puedeRetirar}
          className={`w-full h-14 rounded-full font-extrabold text-sm flex items-center justify-center gap-2 transition-all ${
            puedeRetirar
              ? "bg-gradient-to-r from-[#C0F200] to-[#9fc700] text-gray-900 shadow-[0_8px_20px_rgba(192,242,0,0.3)] active:scale-95"
              : "bg-gray-100 text-gray-400 cursor-not-allowed"
          }`}
        >
          <span className="material-symbols-outlined text-[18px]">payments</span>
          Confirmar Retiro
        </button>
      </main>
    </div>
  );
}