import image from '../assets/images/flores.png';

const About = () => {
  return (
    <div className="max-w-7xl mx-auto">
  {/* Hero Section */}
  <div className="relative z-0">
    <img
      src={image}  // Remplacez "image" par l'URL de l'image que vous souhaitez utiliser
      alt="équipe Flores Active Tours"
      className="w-full h-[40vh] object-cover rounded-lg shadow-lg"
    />
  </div>

  {/* Content Section */}
  <div className="mt-12 space-y-8 px-4">

    {/* Title Section */}
    <div className="prose prose-lg max-w-none">
      <h1 className="text-4xl md:text-6xl font-bold text-center px-4 mb-3">
        À propos de Flores Active Tours
      </h1>
      <p className="text-lg leading-relaxed mb-6 text-justify">
        <span className="font-semibold">Flores Active Tours</span> est un petit groupe de guides touristiques certifiés d'Indonésie. Nous sommes des locaux parlant anglais et membres de l’HPI (Association des Guides Touristiques Indonésiens) et de l’ITGA (International Tourist Guides Association), basés à Bali. Nos membres viennent de différentes régions d'Indonésie telles que Flores, Bali, Java, Sumatra, Bornéo, Sulawesi, Lombok, Sumba, Timor, Alor, et d'autres.
      </p>
      <p className="text-lg leading-relaxed mb-6 text-justify">
        Avec 25 ans d’expérience dans le tourisme en Indonésie, nous sommes fiers de vous présenter notre équipe. Nous sommes des experts dans l'organisation de voyages entre îles et vous proposons des circuits fascinants pour découvrir la beauté de cet archipel.
      </p>
    </div>

    {/* Nos spécialités Section */}
    <div className="bg-gradient-to-r from-blue-100 to-purple-100 p-8 rounded-lg shadow-lg mt-16">
      <h2 className="text-3xl font-bold mb-3 text-center text-blue-700">Nos spécialités</h2>
      <p className="text-lg leading-relaxed mb-6 text-justify">
        Nous proposons une large gamme de circuits, y compris des voyages culturels, des aventures en plein air, des treks, de la plongée, du snorkeling, du rafting, des ascensions de volcans, de l’observation des oiseaux, du cyclisme, de la méditation, ainsi que des expériences de photographie et de tournage. Que vous soyez en quête d'une aventure palpitante ou d'une immersion culturelle, nous avons l'expérience pour vous offrir une expérience inoubliable.
      </p>
      <p className="text-lg leading-relaxed mb-6 text-justify">
        Nous vous invitons à rejoindre nos voyages privés entre les îles, pour une expérience unique qui vous permettra de découvrir des paysages incroyables tout en explorant la faune et la culture locales.
      </p>
    </div>

    {/* Concept de nos circuits Section */}
    <div className="bg-gradient-to-r from-green-100 to-yellow-100 p-8 rounded-lg shadow-lg mt-16">
      <h2 className="text-3xl font-bold mb-3 text-center text-green-700">Concept de nos circuits</h2>
      <p className="text-lg leading-relaxed mb-6 text-justify">
        Nos circuits sont conçus pour être personnalisés en fonction de vos besoins. Que vous soyez un couple, une famille, ou un petit groupe d'amis, un guide expérimenté vous accompagnera tout au long de votre aventure. Nous nous engageons à offrir une réponse rapide à toutes vos questions et à nous assurer que vous viviez une expérience sur mesure.
      </p>
      <p className="text-lg leading-relaxed mb-6 text-justify">
        Notre spécialité réside dans les voyages entre îles. Ces circuits vous permettront de découvrir des paysages époustouflants, tout en explorant la faune et la culture locales de manière authentique et immersive.
      </p>
    </div>

    {/* Transport inclus dans nos circuits Section */}
    <div className="bg-gradient-to-r from-red-100 to-pink-100 p-8 rounded-lg shadow-lg mt-16">
      <h2 className="text-3xl font-bold mb-3 text-center text-red-700">Transport inclus dans nos circuits</h2>
      <p className="text-lg leading-relaxed mb-6 text-justify">
        Nos circuits incluent des transports aériens, terrestres et maritimes pour assurer un confort optimal pendant vos voyages. Pour les trajets terrestres, nous utilisons des minibus confortables, et pour les longues distances, des trains sont prévus. Concernant les traversées maritimes, nous utilisons des vedettes rapides et des ferries pour relier les îles. Les transferts entre les îles sont souvent réalisés par avion, afin de maximiser votre temps de découverte.
      </p>
    </div>
  </div>
</div>

  );
};

export default About;
