import { useState } from "react";

const scanBg = "https://thumbs.dreamstime.com/b/caja-de-cart%C3%B3n-con-botellas-pl%C3%A1sticas-usadas-en-la-mesa-cocina-problema-reciclaje-213086271.jpg";

const ultimoEscaneo = {
  imagen: scanBg,
  materiales: [
    { material: "Cartón", cantidad: 1 },
    { material: "Plástico", cantidad: 15 },
  ],
};

const perfilUsuario = {
  nombre: "@yudith",
  distrito: "San Isidro",
  direccion: "Av. José Larco 1234, Dpto 502",
};

export default function PublicarModal({ isOpen, onClose, onPublicar }) {
const [form, setForm] = useState({
  titulo: `${ultimoEscaneo.materiales[1].material} disponible`,
  material: ultimoEscaneo.materiales[1].material,
  cantidad: ultimoEscaneo.materiales[1].cantidad,
  distrito: perfilUsuario.distrito,
  direccion: perfilUsuario.direccion,
  descripcion: "",
  imagen: ultimoEscaneo.imagen,
});

  if (!isOpen) return null;

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onPublicar(form);
    onClose();
  };

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
          <span className="text-sm font-bold text-gray-900">Publicar en Marketplace</span>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-500 active:scale-90 transition-transform"
          >
            <span className="material-symbols-outlined text-[16px]">close</span>
          </button>
        </div>

        <form onSubmit={handleSubmit} className="px-4 pb-6 pt-3 flex flex-col gap-3">
          {/* Preview de la imagen escaneada */}
          <div className="relative w-full h-40 rounded-xl overflow-hidden bg-gray-100">
            <img
              src={form.imagen}
              alt="Material escaneado"
              className="w-full h-full object-cover"
            />
            <div className="absolute top-2 left-2 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full flex items-center gap-1">
              <span className="material-symbols-outlined text-[12px] text-[#536600]">
                photo_camera
              </span>
              <span className="text-[8px] font-bold text-gray-700 uppercase">
                De tu escaneo
              </span>
            </div>
          </div>

          <div className="bg-[#F0F8E2] rounded-xl px-3 py-2 flex items-center gap-2">
            <span className="material-symbols-outlined text-[16px] text-[#536600]">
              auto_awesome
            </span>
            <p className="text-[10px] text-[#536600] font-medium leading-snug">
              Rellenamos algunos campos con tu último escaneo y tu perfil.
            </p>
          </div>

          <div>
            <label className="text-[10px] font-bold text-gray-500 uppercase tracking-wide">
              Título
            </label>
            <input
              name="titulo"
              value={form.titulo}
              onChange={handleChange}
              className="w-full h-11 mt-1 px-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#C0F200]"
            />
          </div>

          <div className="flex gap-2">
            <div className="flex-1">
              <label className="text-[10px] font-bold text-gray-500 uppercase tracking-wide">
                Material
              </label>
              <select
                name="material"
                value={form.material}
                onChange={handleChange}
                className="w-full h-11 mt-1 px-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#C0F200]"
              >
                <option>Cartón</option>
                <option>Vidrio</option>
                <option>Plástico</option>
                <option>Metal</option>
                <option>Textil</option>
              </select>
            </div>
            <div className="w-24">
              <label className="text-[10px] font-bold text-gray-500 uppercase tracking-wide">
                Cantidad
              </label>
              <input
                type="number"
                name="cantidad"
                value={form.cantidad}
                onChange={handleChange}
                min="1"
                className="w-full h-11 mt-1 px-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#C0F200]"
              />
            </div>
          </div>

          <div>
            <label className="text-[10px] font-bold text-gray-500 uppercase tracking-wide">
              Distrito
            </label>
            <input
              name="distrito"
              value={form.distrito}
              onChange={handleChange}
              className="w-full h-11 mt-1 px-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#C0F200]"
            />
          </div>

          <div>
            <label className="text-[10px] font-bold text-gray-500 uppercase tracking-wide">
              Dirección exacta
            </label>
            <input
              name="direccion"
              value={form.direccion}
              onChange={handleChange}
              className="w-full h-11 mt-1 px-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#C0F200]"
            />
          </div>

          <div>
            <label className="text-[10px] font-bold text-gray-500 uppercase tracking-wide">
              Descripción (opcional)
            </label>
            <textarea
              name="descripcion"
              value={form.descripcion}
              onChange={handleChange}
              rows={3}
              placeholder="Cuenta más sobre el estado del material..."
              className="w-full mt-1 px-3 py-2 rounded-xl border border-gray-200 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-[#C0F200]"
            />
          </div>
        </form>

        {/* Botón fijo al fondo del modal, siempre visible */}
        <div className="sticky bottom-0 bg-white border-t border-gray-100 px-4 py-3">
          <button
            onClick={handleSubmit}
            className="w-full h-12 bg-[#C0F200] text-gray-900 rounded-full font-bold text-sm active:scale-95 transition-transform"
          >
            Publicar
          </button>
        </div>
      </div>
    </div>
  );
}