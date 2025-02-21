import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/Navbar.css';
import logo from '../assets/images/logo.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="bg-gradient-to-r from-teal-500 to-blue-500 text-white shadow-lg">
      <div className="container mx-auto px-8 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link to="/">
            <img src={logo} alt="Logo" className="h-12" />
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white focus:outline-none"
          >
            <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Desktop menu */}
        <div className="hidden md:flex md:items-center space-x-10 text-lg">
          <Link to="/" className="hover:text-yellow-300 transition duration-300">Home</Link>
          <div className="relative">
            <button onClick={toggleDropdown} className="hover:text-yellow-300 transition duration-300">
              Tours
            </button>
            {isDropdownOpen && (
              <ul className="absolute bg-white text-black shadow-lg mt-2 rounded-md z-50">
                <li>
                  <Link to="/tours/bali" className="block px-4 py-2 hover:bg-gray-200">Bali</Link>
                </li>
                <li>
                  <Link to="/tours/borneo" className="block px-4 py-2 hover:bg-gray-200">Borneo</Link>
                </li>
              </ul>
            )}
          </div>
          <Link to="/about" className="hover:text-yellow-300 transition duration-300">A propos de nous</Link>
          <Link to="/gallery" className="hover:text-yellow-300 transition duration-300">Galerie</Link>
          <Link to="/contact" className="hover:text-yellow-300 transition duration-300">Nous contacter</Link>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden`}>
        <ul className="space-y-4 px-4 py-2 bg-gradient-to-r from-teal-500 to-blue-500">
          <li>
            <Link to="/" className="block text-lg hover:text-yellow-300 transition duration-300">Home</Link>
          </li>
          <li>
            <button onClick={toggleDropdown} className="block text-lg hover:text-yellow-300 transition duration-300">
              Tours
            </button>
            {isDropdownOpen && (
              <ul className="pl-4 z-50">
                <li>
                  <Link to="/tours/bali" className="block px-4 py-2 hover:bg-gray-200">Bali</Link>
                </li>
                <li>
                  <Link to="/tours/borneo" className="block px-4 py-2 hover:bg-gray-200">Borneo</Link>
                </li>
              </ul>
            )}
          </li>
          <li>
            <Link to="/about" className="block text-lg hover:text-yellow-300 transition duration-300">A propos de nous</Link>
          </li>
          <li>
            <Link to="/gallery" className="block text-lg hover:text-yellow-300 transition duration-300">Galerie</Link>
          </li>
          <li>
            <Link to="/contact" className="block text-lg hover:text-yellow-300 transition duration-300">Nous contacter</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
