import { Routes, Route } from "react-router-dom";
import Navbar from "./componentes/Navbar";
import Footer from "./componentes/Footer";

import Home from "./pages/Home";
import Integrantes from "./pages/Integrantes";
import Solucoes from "./pages/Solucoes";
import Contato from "./pages/Contato";
import FAQ from "./pages/FAQ";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/integrantes" element={<Integrantes />} />
          <Route path="/solucoes" element={<Solucoes />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/faq" element={<FAQ />} />
        </Routes>
        </main>

        <Footer />

    </>
  );
}

export default App;