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



export default function App() {
  return (
    <BrowserRouter>
      <PhoneFrame>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/scan" element={<CameraScan />} />
          <Route path="/scan/analizando" element={<AiAnalysis />} />
          <Route path="/scan/resultado" element={<AiResult />} />
          <Route path="/scan/decision" element={<AiRecommendation />} />
          <Route path="/ideas" element={<IdeasReutilizacion />} />
          <Route path="/market" element={<Marketplace />} />
          <Route path="/perfil/billetera" element={<EcoBilletera />} />
        </Routes>
      </PhoneFrame>
    </BrowserRouter>
  );
}