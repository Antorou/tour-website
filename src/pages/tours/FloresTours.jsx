import '../../assets/styles/FloresTours.css';
import ToursCategories from '../../components/ToursCategories';


const FloresTours = () => {
  return (
    <div className="main-container-tours">
      <div className="container text-container">
          <h1>Flores Tours</h1>
          <p>Flores Tours vous propose les meilleurs voyages et excursions pour des vacances inoubliables à Flores, combinées à d’autres destinations touristiques populaires en Indonésie. Toutes nos excursions sont des circuits guidés, où un guide expérimenté accompagne les voyageurs tout au long de l’aventure. Nous offrons également la possibilité de louer une voiture avec chauffeur pour ceux qui préfèrent organiser leurs propres explorations.</p>
          <h2>How to do Flores Tours?</h2>
          <p>A Flores Tour can start from Jakarta, Bali or other places in Indonesia. Alternatively, travelers can take a flight firstly to Maumere East Flores or to Labuan Bajo West Flores. Certainly, both ways are OK. A Flores Adventure Tour commonly combines with Komodo Boat Tours, for the reason that Komodo National Park is geographically part of Flores. Furthermore, a Flores tour can be a combination of some different Islands such as Komodo-Sumba-Kupang-Alor-Java-Borneo-Sulawesi and more. Basically, it depends on what travelers what to see and how long they would spend time for the holiday. As an expert in multi-day tours between Islands in Indonesia, we kindly offer the best service for a memorable tour experience.</p>
          <p>Flores fait partie des Petites îles de la Sonde. C’est une île montagneuse aux paysages spectaculaires, tant sur terre que sous l’eau.</p>
      </div>
      <div className="container category-container">
          <h2>CATEGORY</h2>
          <ToursCategories />
      </div>
    </div>
  );
};

export default FloresTours;
