import '../assets/styles/Home.css';
import image from '../assets/images/flores.png';


const Home = () => {
  return (

    <div>
      <img className="flores" src={image} alt="flores" />
      <div className="home">
        <h1>Bienvenue sur FloresTour</h1>
          <p><b>Flores Active Tours</b> vous offre la meilleure expérience de voyage à travers Flores, Komodo, Sumba, Bali, Java, Bornéo et d'autres îles d'Indonésie. Nous proposons également des voyages spéciaux vers d'autres destinations prisées, comme Sumatra, Sulawesi, Lombok, Papouasie, les Moluques, Timor et Alor.</p>
          <p>Nos circuits actifs sont conçus pour les amateurs d'activités physiques et d'aventures en plein air. Ils vous invitent à explorer la nature, observer la faune sauvage, pratiquer des sports et vivre des expériences inoubliables. Ces circuits incluent la randonnée, le trekking, le vélo, la plongée, le kayak, le snorkeling, le rafting, le surf et bien plus encore.</p>
          <p>Voyager de manière active, c'est allier découverte et bien-être. Ces expériences renforcent votre forme physique, réduisent le stress et vous invitent à relever de nouveaux défis. Elles permettent aussi de vous immerger dans la culture locale, d'explorer des paysages naturels époustouflants et d'observer une faune exotique dans son habitat.</p>

        <h2>Excursions avec Flores Active Tours</h2>
          <p>La plupart de nos voyages sont des circuits guidés, où un guide accompagne les voyageurs du début à la fin de l'aventure. Cependant, nous offrons également la possibilité de louer des voitures et des scooters pour ceux qui préfèrent organiser et vivre leurs propres aventures en toute liberté. Nos circuits à Flores sont notre spécialité, car cette île offre une incroyable richesse de paysages, de cultures et d'expériences uniques à découvrir.</p>

        <h2>Notre équipe</h2>
        <p>Notre équipe se compose de guides touristiques expérimentés, originaires de l’île de Flores et d’autres régions d’Indonésie. Depuis de nombreuses années, nous accompagnons des voyageurs lors de circuits de plusieurs jours à travers l’archipel indonésien.
          Nous maîtrisons plusieurs langues étrangères et disposons d’une connaissance approfondie des destinations que nous proposons. Avant de créer notre propre équipe, nous avons travaillé en tant que guides pour différentes agences de voyage. À cette occasion, nous avons eu la chance de parcourir de nombreuses îles indonésiennes dans le cadre de circuits prolongés.
          Ces expériences nous ont permis d’acquérir un savoir-faire unique et une expertise solide pour organiser des aventures mémorables pour nos clients.</p>

        <h2>Pourquoi choisir nos services ?</h2>
        <p className='lefty'>Voici quelques raisons à considérer avant de partir avec nous :</p>
        <ol>
          <li>Des guides certifiés : Notre équipe est composée de guides professionnels certifiés et membres de l’HPI/ITGA (Indonesian Tourist Guide Association).</li>
          <li>Une expertise reconnue : Nous sommes spécialisés dans l’organisation de circuits de plusieurs jours entre les îles indonésiennes.</li>
          <li>Une expérience solide : Avec de nombreuses années d’expérience dans le tourisme en Indonésie, nous sommes confiants dans notre capacité à vous offrir une expérience de voyage inoubliable.</li>
          <li>Maîtrise des langues étrangères : Nos guides parlent plusieurs langues, notamment l’anglais, l’allemand, le français, et d’autres encore.</li>
          <li>Une organisation professionnelle : Notre équipe est soutenue par une gestion administrative efficace et professionnelle pour un service sans faille.</li>
          <li>Des circuits tout compris : Nous proposons des circuits organisés qui vous facilitent la planification de votre voyage. Vous pourrez explorer plusieurs îles, sites et destinations incontournables de l’Indonésie.</li>
          <li>Un large choix d’activités : Nos circuits incluent trekking, snorkeling, plongée, visites culturelles, vélo, rafting et escalade. Vous aurez aussi l’occasion d’observer des animaux emblématiques comme le dragon de Komodo, l’orang-outan, les tortues, les raies mantas, les nasiques, les tarsiers, les gibbons, et de nombreuses espèces d’oiseaux.</li>
          <li>Une immersion culturelle unique : Partez à la découverte de lieux reculés où vous pourrez rencontrer des tribus indigènes et vous imprégner de leurs cultures et traditions fascinantes.</li>
        </ol>

      </div>
    </div>
  );
};

export default Home;
