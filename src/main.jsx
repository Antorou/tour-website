// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import Home from './pages/Home';
import Tours from './pages/Tours';
import About from './pages/About';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import TourDetails from './components/TourDetails';
import { LanguageProvider } from './i18n/LanguageContext';

import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <LanguageProvider>
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="contact" element={<Contact />} />
          <Route path="tours" element={<Tours />} />

          {/* Routes des sous-catégories */}

          <Route path="tours/:path" element={<Tours />} />  
          <Route path="tours/:path/:tourId" element={<TourDetails />} />
        </Route>
      </Routes>
    </Router>
  </LanguageProvider>
);