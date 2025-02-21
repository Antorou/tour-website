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
