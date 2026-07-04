import { BrowserRouter, Routes, Route } from "react-router-dom";
import PhoneFrame from "./components/layout/PhoneFrame";
import Home from "./screens/Home";

export default function App() {
  return (
    <BrowserRouter>
      <PhoneFrame>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </PhoneFrame>
    </BrowserRouter>
  );
}