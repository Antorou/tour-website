// src/main.jsx
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import Home from './pages/Home';
import Tours from './pages/Tours';
import About from './pages/About';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';

// Import des sous-catégories
import BaliTours from "./pages/tours/BaliTours";
import BorneoTours from "./pages/tours/BorneoTours";
import FloresTours from "./pages/tours/FloresTours";
import JavaTours from "./pages/tours/JavaTours";
import KomodoTours from "./pages/tours/KomodoTours";
import LombokTours from "./pages/tours/LombokTours";
import MalukuTernateTours from "./pages/tours/MalukuTernateTours";
import PapuaTours from "./pages/tours/PapuaTours";
import SulawesiTours from "./pages/tours/SulawesiTours";
import SumateraTours from "./pages/tours/SumateraTours";
import SumbaTours from "./pages/tours/SumbaTours";

import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="tours" element={<Tours />} />
        <Route path="tours/bali" element={<BaliTours />} />
        <Route path="tours/borneo" element={<BorneoTours />} />
        <Route path="about" element={<About />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="contact" element={<Contact />} />
        {/* Routes des sous-catégories */}
        <Route path="/tours/bali" element={<BaliTours />} />
        <Route path="/tours/borneo" element={<BorneoTours />} />
        <Route path="/tours/flores" element={<FloresTours />} />
        <Route path="/tours/java" element={<JavaTours />} />
        <Route path="/tours/komodo" element={<KomodoTours />} />
        <Route path="/tours/lombok" element={<LombokTours />} />
        <Route path="/tours/maluku" element={<MalukuTernateTours />} />
        <Route path="/tours/papua" element={<PapuaTours />} />
        <Route path="/tours/sulawesi" element={<SulawesiTours />} />
        <Route path="/tours/sumatera" element={<SumateraTours />} />
        <Route path="/tours/sumba" element={<SumbaTours />} />
      </Route>
    </Routes>
  </Router>
);
