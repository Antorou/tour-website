import "./../assets/styles/Footer.css";


const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div>
        <p>&copy; 2025 FloresTour. Tous droits réservés.</p>
        <p>
          Suivez-nous :
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"> Facebook</a> |
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"> Instagram</a> |
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"> Twitter</a>
        </p>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    textAlign: "center",
    padding: "1rem",
    backgroundColor: "#f4f4f4",
    borderTop: "1px solid #ddd",
    marginTop: "auto",
  },
};

export default Footer;
