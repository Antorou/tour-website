// src/main.jsx
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import Home from './pages/Home';
import Tours from './pages/Tours';
import About from './pages/About';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';

import TourDetails from './components/TourDetails';

import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="contact" element={<Contact />} />

        {/* Routes des sous-catégories */}

        <Route path="tours/:path" element={<Tours />} />  
        <Route path="tours/:path/:tourId" element={<TourDetails />} />
      </Route>
    </Routes>
  </Router>
);
