import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TopAppBar from "../components/layout/TopAppBar";

import perroImg from '../assets/images/perro.png';
import gatoImg from '../assets/images/gato.png';
import pandaImg from '../assets/images/panda.png';
import zorroImg from '../assets/images/zorro.png';
import conejoImg from '../assets/images/conejo.png';

const mascotasData = [
    { id: 1, nombre: 'Perro', icono: '🐶', imagen: perroImg, nivel: 'Nivel 8', estado: '😊 Feliz' },
    { id: 2, nombre: 'Gato', icono: '🐱', imagen: gatoImg, nivel: 'Nivel 10', estado: '😊 Feliz' },
    { id: 3, nombre: 'Panda', icono: '🐼', imagen: pandaImg, nivel: 'Nivel 5', estado: '😴 Dormido' },
    { id: 4, nombre: 'Zorro', icono: '🦊', imagen: zorroImg, nivel: 'Nivel 12', estado: '😊 Feliz' },
    { id: 5, nombre: 'Conejo', icono: '🐰', imagen: conejoImg, nivel: 'Nivel 3', estado: '😊 Feliz' },
];

const TuMascota = () => {
    const navigate = useNavigate();
    const [selectedMascota, setSelectedMascota] = useState(mascotasData[3]);

    return (
        <div className="min-h-full pb-6 bg-gray-50/50">
            {/* Header con back + close */}
            <div className="flex justify-between items-center px-4 pt-9 pb-3 sticky top-0 bg-white/90 backdrop-blur-xl z-20 border-b border-gray-100">
                <button
                    onClick={() => navigate(-1)}
                    className="w-9 h-9 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-500 active:scale-90 transition-transform"
                >
                    <span className="material-symbols-outlined text-[18px]">arrow_back</span>
                </button>
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                    Mascota
                </span>
                <button
                    onClick={() => navigate("/")}
                    className="w-9 h-9 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-500 active:scale-90 transition-transform"
                >
                    <span className="material-symbols-outlined text-[18px]">close</span>
                </button>
            </div>
            
            {/* Contenedor principal con padding para alinear todo */}
            <div className="px-4 mt-4">
                <h1 className="text-2xl font-bold text-lime-900 text-center">Eco-Compañero</h1>
                <p className="text-gray-600 mb-6 text-center">Cuida tu entorno, cuida a tu mascota.</p>

                {/* Tarjeta Principal */}
                <div className="w-full p-6 text-center shadow-lg bg-white rounded-3xl border border-gray-100">
                    <img
                        src={selectedMascota.imagen}
                        alt={selectedMascota.nombre}
                        className="mx-auto mb-4 w-32 h-32 object-contain"
                    />
                    <h2 className="text-2xl font-bold">{selectedMascota.nombre}</h2>
                    <div className="flex justify-center gap-2 my-2">
                        <span className="bg-lime-100 px-2 py-1 rounded text-xs font-medium">{selectedMascota.nivel}</span>
                        <span className="bg-blue-100 px-2 py-1 rounded text-xs font-medium">{selectedMascota.estado}</span>
                    </div>

                    <div className="text-left mt-4">
                        <div className="flex justify-between text-sm mb-1">
                            <span className="font-medium text-gray-700">Experiencia</span>
                            <span className="text-gray-600">850 / 1000 XP</span>
                        </div>
                        <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
                            <div className="h-full bg-lime-400" style={{ width: '85%' }}></div>
                        </div>
                    </div>

                    <button className="mt-6 w-full bg-lime-400 text-gray-900 font-bold py-3 rounded-2xl hover:bg-lime-500 transition-colors">
                        EVOLUCIONAR
                    </button>
                </div>

                {/* Selector de mascotas (Ruleta) */}
                <div className="mt-8 w-full">
                    <h3 className="font-semibold mb-4 text-gray-800">Cambiar Compañero</h3>
                    <div className="flex justify-between items-center overflow-x-auto hide-scrollbar pb-2 pt-2 px-4 gap-4">
                        {mascotasData.map((mascota) => (
                            <button
                                key={mascota.id}
                                onClick={() => setSelectedMascota(mascota)}
                                className={`flex flex-col items-center gap-2 transition-all flex-shrink-0 ${selectedMascota.id === mascota.id ? "scale-110" : "opacity-60"
                                    }`}
                            >
                                <div className={`w-14 h-14 rounded-full flex items-center justify-center text-2xl border-2 ${selectedMascota.id === mascota.id
                                    ? "border-lime-400 bg-lime-50"
                                    : "border-gray-200 bg-white"
                                    }`}>
                                    {mascota.icono}
                                </div>
                                <span className="text-[10px] font-bold text-gray-700">{mascota.nombre}</span>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Apartado de Recompensas - Alineado y con estilo consistente */}
                <div className="mt-8 w-full">
                    <h3 className="font-semibold mb-4 text-gray-800">Recompensas</h3>
                    <button
                        onClick={() => navigate("/recompensas")}
                        className="w-full bg-white rounded-3xl p-5 shadow-[0_4px_12px_rgba(0,0,0,0.05)] border border-gray-100 flex items-center gap-5 hover:bg-gray-50 transition-colors"
                    >
                        {/* Icono más grande y centrado */}
                        <div className="bg-lime-100 p-4 rounded-full text-lime-600 flex-shrink-0">
                            <span className="material-symbols-outlined text-2xl">shopping_bag</span>
                        </div>

                        {/* Texto alineado a la izquierda */}
                        <div className="flex-grow text-left">
                            <p className="font-bold text-gray-900 text-lg">Eco-Tienda</p>
                            <p className="text-xs text-gray-500 leading-tight mt-0.5">Desbloquea accesorios para tu mascota</p>
                        </div>

                        {/* Flecha */}
                        <span className="material-symbols-outlined text-gray-400">chevron_right</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default TuMascota;