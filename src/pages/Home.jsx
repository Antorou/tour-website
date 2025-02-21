import '../assets/styles/Home.css';
import image from '../assets/images/flores.png';

const Home = () => {
  return (
    <div className="max-w-7xl mx-auto bg-gradient-to-b from-gray-50 to-gray-100 p-6">
      {/* Hero Section */}
      <div className="relative z-0 mb-12">
        <img
          src={image}
          alt="flores"
          className="w-full h-[50vh] object-cover rounded-lg shadow-xl transition-transform duration-500 hover:scale-105"
        />
      </div>

      {/* Citation */}
      <div className="mt-8 text-center px-6">
        <p className="text-2xl md:text-3xl italic font-semibold text-gray-800 leading-relaxed">
          "Embarquez pour une aventure inoubliable, où chaque pas vous rapproche d'une nature sauvage,
          de cultures fascinantes et d'expériences uniques à travers l'Indonésie."
        </p>
      </div>

      {/* Content Section */}
      <div className="mt-12 space-y-12 px-4">
        <div className="prose prose-lg max-w-none">
          <h1 className="text-5xl md:text-7xl font-extrabold text-center mb-6 text-blue-900">
            Bienvenue sur FloresTours
          </h1>
          <p className="text-lg leading-relaxed mb-8 text-justify text-gray-700">
            <span className="font-semibold">Flores Active Tours</span> vous offre la meilleure expérience de voyage à travers Flores, Komodo, Sumba, Bali, Java, Bornéo et d'autres îles d'Indonésie. Nous proposons également des voyages spéciaux vers d'autres destinations prisées, comme Sumatra, Sulawesi, Lombok, Papouasie, les Moluques, Timor et Alor.
          </p>
        </div>

        {/* Boutons d'action */}
        <div className="flex justify-center space-x-6 mt-10">
          <a
            href="/tours"
            className="bg-blue-600 text-white text-lg font-semibold px-8 py-4 rounded-full shadow-lg hover:bg-blue-700 transition-transform duration-300 transform hover:scale-110"
          >
            Explorez nos circuits
          </a>
          <a
            href="/contact"
            className="bg-green-600 text-white text-lg font-semibold px-8 py-4 rounded-full shadow-lg hover:bg-green-700 transition-transform duration-300 transform hover:scale-110"
          >
            Réservez dès maintenant
          </a>
        </div>

        <div className="mt-16">
          <h2 className="text-4xl font-bold mb-4 text-blue-900">Excursions avec Flores Active Tours</h2>
          <p className="text-lg leading-relaxed mb-8 text-justify text-gray-700">
            La plupart de nos voyages sont des circuits guidés, où un guide accompagne les voyageurs du début à la fin de l'aventure. Cependant, nous offrons également la possibilité de louer des voitures et des scooters pour ceux qui préfèrent organiser et vivre leurs propres aventures en toute liberté.
          </p>
        </div>

        <div className="mt-16">
          <h2 className="text-4xl font-bold mb-4 text-blue-900">Notre équipe</h2>
          <p className="text-lg leading-relaxed mb-8 text-justify text-gray-700">
            Notre équipe se compose de guides touristiques expérimentés, originaires de l'île de Flores et d'autres régions d'Indonésie. Depuis de nombreuses années, nous accompagnons des voyageurs lors de circuits de plusieurs jours à travers l'archipel indonésien.
          </p>
        </div>

        <div className="mt-16">
          <h2 className="text-4xl font-bold mb-4 text-blue-900">Pourquoi choisir nos services ?</h2>
          <p className="text-lg mb-6 text-justify text-gray-700">Voici quelques raisons à considérer avant de partir avec nous :</p>
          <ol className="list-inside space-y-3 text-lg ml-4 text-gray-700">
            <li>- Des guides certifiés : Notre équipe est composée de guides professionnels certifiés et membres de l'HPI/ITGA.</li>
            <li>- Une expertise reconnue : Nous sommes spécialisés dans l'organisation de circuits de plusieurs jours entre les îles indonésiennes.</li>
            <li>- Une expérience solide : Avec de nombreuses années d'expérience, nous vous garantissons une expérience de voyage inoubliable.</li>
            <li>- Maîtrise des langues étrangères : Nos guides parlent plusieurs langues comme l'anglais, l'allemand, le français et plus.</li>
            <li>- Une organisation professionnelle : Notre équipe assure une gestion sans faille pour un service de qualité.</li>
            <li>- Des circuits tout compris : Explorez plusieurs îles et destinations incontournables de l'Indonésie avec des circuits organisés.</li>
            <li>- Un large choix d'activités : Trekking, snorkeling, plongée, visites culturelles, vélo, rafting et bien plus encore !</li>
            <li>- Une immersion culturelle unique : Partez à la rencontre de tribus indigènes et découvrez leurs cultures fascinantes.</li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Home;
