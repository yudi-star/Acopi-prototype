import React, { useState } from 'react';
import TopAppBar from "../components/layout/TopAppBar";
import lentesImg from '../assets/images/lentes.png';
import sombreroImg from '../assets/images/sombrero.png';
import mochilaImg from '../assets/images/mochila.png';
import zorroBase from '../assets/images/zorrobase.png';
import zorroConLentes from '../assets/images/zorro_lentes.png';
import zorroConSombrero from '../assets/images/zorro_sombrero.png';

const productosData = [
    { id: 1, nombre: 'Lentes de PET', descripcion: 'Visión clara y océanos limpios. Diseñados con 5 botellas recicladas.', puntos: 300, imagen: lentesImg, imagenEquipada: zorroConLentes},
    { id: 2, nombre: 'Sombrero Eco-Cartón', descripcion: 'Protección solar con estilo geométrico. 100% material recuperado.', puntos: 150, imagen: sombreroImg, imagenEquipada: zorroConSombrero},
    { id: 3, nombre: 'Mochila Upcycle', descripcion: 'Tejida con bolsas plásticas rescatadas. Ligera y resistente.', puntos: 500, imagen: mochilaImg, bloqueado: true, nivelRequerido: 5 },
];

const Recompensas = () => {
    const [mascotaActual, setMascotaActual] = useState(zorroBase);

    return (
        <div className="min-h-screen pb-8 bg-gray-50/50">
            <TopAppBar points="1,250" />

            <div className="px-4 mt-4">
                <h1 className="text-2xl font-bold text-lime-900 text-center">Eco-Tienda</h1>
                <p className="text-gray-600 text-sm mb-6 text-center">
                    Desbloquea accesorios exclusivos. ¡Convierte tu impacto ecológico en estilo!
                </p>

                {/* 2. Imagen de la mascota que cambia */}
                <div className="mb-8 flex justify-center">
                    <img src={mascotaActual} alt="Mascota" className="w-32 h-32 object-contain rounded-full shadow-lg bg-white" />
                </div>

                {/* Lista de Productos */}
                <div className="grid gap-6">
                    {productosData.map((prod) => (
                        <div key={prod.id} className="bg-white rounded-3xl p-4 shadow-lg border border-gray-100">
                            <img src={prod.imagen} alt={prod.nombre} className="w-full h-40 object-cover rounded-2xl mb-4" />

                            <h2 className="text-lg font-bold text-gray-900">{prod.nombre}</h2>
                            <p className="text-xs text-gray-500 mt-1 mb-4">{prod.descripcion}</p>

                            <div className="flex justify-between items-center">
                                <span className="font-bold text-lime-600 flex items-center gap-1">
                                    🍃 {prod.puntos}
                                </span>

                                <button onClick={() => prod.imagenEquipada && setMascotaActual(prod.imagenEquipada)} className={`px-6 py-2 rounded-full font-bold text-sm ${prod.bloqueado
                                        ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                                        : "bg-lime-400 text-gray-900"
                                    }`}>
                                    {prod.bloqueado ? `🔒 Nivel ${prod.nivelRequerido}` : "Desbloquear"}
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Recompensas;