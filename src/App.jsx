import { BrowserRouter, Routes, Route } from "react-router-dom";
import PhoneFrame from "./components/layout/PhoneFrame";
import Home from "./screens/Home";
import CameraScan from "./screens/CameraScan";
import AiAnalysis from "./screens/AiAnalysis";
import AiResult from "./screens/AiResult";
import AiRecommendation from "./screens/AiRecommendation";
import IdeasReutilizacion from "./screens/IdeasReutilizacion";
import Marketplace from "./screens/Marketplace";
import EcoBilletera from "./screens/EcoBilletera";
import MiPerfil from "./screens/MiPerfil";
import ChatIA from "./screens/ChatIA";
import SolicitarRecojo from "./screens/SolicitarRecojo";
import EstadoRecojo from "./screens/EstadoRecojo";
import HistorialCompleto from "./screens/HistorialCompleto";




export default function App() {
  return (
    <BrowserRouter>
      <PhoneFrame>
        <Routes>
          <Route path="/chat" element={<ChatIA />} />
          <Route path="/" element={<Home />} />
          <Route path="/scan" element={<CameraScan />} />
          <Route path="/scan/analizando" element={<AiAnalysis />} />
          <Route path="/scan/resultado" element={<AiResult />} />
          <Route path="/scan/decision" element={<AiRecommendation />} />
          <Route path="/ideas" element={<IdeasReutilizacion />} />
          <Route path="/market" element={<Marketplace />} />
          <Route path="/perfil/billetera" element={<EcoBilletera />} />
          <Route path="/perfil" element={<MiPerfil />} />
          <Route path="/recojo" element={<SolicitarRecojo />} />
          <Route path="/recojo/estado" element={<EstadoRecojo />} />
          <Route path="/perfil/historial" element={<HistorialCompleto />} />  
        </Routes>
      </PhoneFrame>
    </BrowserRouter>
  );
}