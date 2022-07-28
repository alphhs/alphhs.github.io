import { Home } from "./HOME/Home";
import { RealFooter } from "./RealFooter";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./HOME/Navbar";
import Cards from "./cards";

import { Footer } from "./Contact";
import { About } from "./About";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Cards />} />
        <Route path="/contact" element={<Footer />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <RealFooter />
    </Router>
  );
}

export default App;
