// src/App.jsx

import { Outlet } from 'react-router-dom';
import './assets/styles/App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LanguageSwitcher from './components/LanguageSwitcher';


const App = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <div className="bg-gray-100 py-2 px-4 flex justify-end">
        <LanguageSwitcher />
      </div>
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default App;
