import { Link } from 'react-router-dom';
import '../assets/styles/Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">
          <img src="path/to/your/logo.png" alt="Logo" />
        </Link>
      </div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li className="dropdown">
          <Link to="/tours">Tours</Link>
          <ul className="dropdown-menu">
            {/* Categorie list is dynamically rendered from the 'categories' array */}
            <li><Link to="/tours/bali">Bali Tours</Link></li>
            <li><Link to="/tours/borneo">Borneo Tours</Link></li>
            <li><Link to="/tours/flores">Flores Tours</Link></li>
            <li><Link to="/tours/java">Java Tours</Link></li>
            <li><Link to="/tours/komodo">Komodo Tours</Link></li>
            <li><Link to="/tours/lombok">Lombok Tours</Link></li>
            <li><Link to="/tours/maluku">Maluku Ternate Tours</Link></li>
            <li><Link to="/tours/papua">Papua Tours</Link></li>
            <li><Link to="/tours/sulawesi">Sulawesi Tours</Link></li>
            <li><Link to="/tours/sumatera">Sumatera Tours</Link></li>
            <li><Link to="/tours/sumba">Sumba Tours</Link></li>
          </ul>
        </li>
        <li><Link to="/about">A propos de nous</Link></li>
        <li><Link to="/gallery">Galerie</Link></li>
        <li><Link to="/contact">Nous contacter</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
