import { Link } from 'react-router-dom';
import '../assets/styles/Navbar.css';
import { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-blue-900 text-white shadow-lg relative z-10">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/">
              <img src="path/to/your/logo.png" alt="Logo" className="h-12" />
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-blue-400 focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex md:items-center md:space-x-6">
            <ul className="flex space-x-6">
              <li>
                <Link to="/" className="text-lg hover:text-blue-400 transition duration-300">Home</Link>
              </li>

              {/* Dropdown Menu */}
              <li className="relative group">
                <Link to="/tours" className="text-lg hover:text-blue-400 transition duration-600">
                  Tours
                </Link>
                <ul className="absolute left-0 hidden mt-2 space-y-2 bg-white text-black shadow-lg group-hover:block group-hover:opacity-100 opacity-0 transition-opacity duration-600 rounded-lg py-2 w-48">
                  <li><Link to="/tours/bali" className="block px-4 py-2 text-lg hover:bg-blue-100">Bali Tours</Link></li>
                  <li><Link to="/tours/borneo" className="block px-4 py-2 text-lg hover:bg-blue-100">Borneo Tours</Link></li>
                  <li><Link to="/tours/flores" className="block px-4 py-2 text-lg hover:bg-blue-100">Flores Tours</Link></li>
                  <li><Link to="/tours/java" className="block px-4 py-2 text-lg hover:bg-blue-100">Java Tours</Link></li>
                  <li><Link to="/tours/komodo" className="block px-4 py-2 text-lg hover:bg-blue-100">Komodo Tours</Link></li>
                  <li><Link to="/tours/lombok" className="block px-4 py-2 text-lg hover:bg-blue-100">Lombok Tours</Link></li>
                  <li><Link to="/tours/maluku" className="block px-4 py-2 text-lg hover:bg-blue-100">Maluku Ternate Tours</Link></li>
                  <li><Link to="/tours/papua" className="block px-4 py-2 text-lg hover:bg-blue-100">Papua Tours</Link></li>
                  <li><Link to="/tours/sulawesi" className="block px-4 py-2 text-lg hover:bg-blue-100">Sulawesi Tours</Link></li>
                  <li><Link to="/tours/sumatera" className="block px-4 py-2 text-lg hover:bg-blue-100">Sumatera Tours</Link></li>
                  <li><Link to="/tours/sumba" className="block px-4 py-2 text-lg hover:bg-blue-100">Sumba Tours</Link></li>
                </ul>
              </li>

              <li>
                <Link to="/about" className="text-lg hover:text-blue-400 transition duration-300">A propos de nous</Link>
              </li>
              <li>
                <Link to="/gallery" className="text-lg hover:text-blue-400 transition duration-300">Galerie</Link>
              </li>
              <li>
                <Link to="/contact" className="text-lg hover:text-blue-400 transition duration-300">Nous contacter</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden pb-4`}>
          <ul className="space-y-4">
            <li>
              <Link to="/" className="text-lg hover:text-blue-400 transition duration-300">Home</Link>
            </li>

            {/* Dropdown Menu */}
            <li className="relative group">
              <Link to="/tours" className="text-lg hover:text-blue-400 transition duration-300">Tours</Link>
              <ul className="absolute left-0 hidden mt-2 space-y-2 bg-white text-black shadow-lg group-hover:block rounded-lg py-2 w-48">
                <li><Link to="/tours/bali" className="block px-4 py-2 text-lg hover:bg-blue-100">Bali Tours</Link></li>
                <li><Link to="/tours/borneo" className="block px-4 py-2 text-lg hover:bg-blue-100">Borneo Tours</Link></li>
                <li><Link to="/tours/flores" className="block px-4 py-2 text-lg hover:bg-blue-100">Flores Tours</Link></li>
                <li><Link to="/tours/java" className="block px-4 py-2 text-lg hover:bg-blue-100">Java Tours</Link></li>
                <li><Link to="/tours/komodo" className="block px-4 py-2 text-lg hover:bg-blue-100">Komodo Tours</Link></li>
                <li><Link to="/tours/lombok" className="block px-4 py-2 text-lg hover:bg-blue-100">Lombok Tours</Link></li>
                <li><Link to="/tours/maluku" className="block px-4 py-2 text-lg hover:bg-blue-100">Maluku Ternate Tours</Link></li>
                <li><Link to="/tours/papua" className="block px-4 py-2 text-lg hover:bg-blue-100">Papua Tours</Link></li>
                <li><Link to="/tours/sulawesi" className="block px-4 py-2 text-lg hover:bg-blue-100">Sulawesi Tours</Link></li>
                <li><Link to="/tours/sumatera" className="block px-4 py-2 text-lg hover:bg-blue-100">Sumatera Tours</Link></li>
                <li><Link to="/tours/sumba" className="block px-4 py-2 text-lg hover:bg-blue-100">Sumba Tours</Link></li>
              </ul>
            </li>

            <li>
              <Link to="/about" className="text-lg hover:text-blue-400 transition duration-300">A propos de nous</Link>
            </li>
            <li>
              <Link to="/gallery" className="text-lg hover:text-blue-400 transition duration-300">Galerie</Link>
            </li>
            <li>
              <Link to="/contact" className="text-lg hover:text-blue-400 transition duration-300">Nous contacter</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
