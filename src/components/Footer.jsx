import "./../assets/styles/Footer.css";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-teal-500 to-blue-500 text-white py-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left">
        
        <div className="mt-4 md:mt-0">
          <p>
            <i className="fas fa-phone-alt mr-2"></i>+6285239644065
          </p>
          <p className="mt-2">
            <i className="fas fa-envelope mr-2"></i>floresactivetours@gmail.com
          </p>
        </div>
        <div>
          <p>&copy; 2025 FloresTour. Tous droits réservés.</p>
        </div>
        <div className="mt-4 md:mt-0">
          <p>
           
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-300 mx-2"
            >
              <i className="fab fa-instagram"></i> Instagram
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
