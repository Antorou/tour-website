import React from 'react';
import TourList from '../components/TourList';
import { useNavigate, useParams, Link } from 'react-router-dom';
import tourImage from '../assets/images/tourcard.jpg';


const Tours = () => {
  const navigate = useNavigate();
  const { path } = useParams();
  const tourData = {
    'bali': {
      title: 'Bali',
      description: 'Nos séjours à Bali proposent une large gamme de circuits et d’activités pour faire de votre voyage une expérience inoubliable. Nous offrons des excursions à la journée, des circuits terrestres, des voyages de plusieurs jours entre les îles indonésiennes, ainsi que diverses expériences immersives. Parmi les destinations les plus emblématiques de l’île, vous pourrez découvrir les somptueuses rizières en terrasses classées à l’UNESCO, le majestueux mont Batur, le splendide temple d’Ulun Danu sur les rives du lac Bratan, le mythique temple de Tanah Lot, l’imposant temple-mère de Besakih, ainsi que le préservé parc national de l’ouest de Bali. Sans oublier les magnifiques îles de Nusa Penida, Nusa Ceningan et Nusa Lembongan, véritables joyaux naturels au large de Bali. Bien que Bali soit une île de petite taille, elle regorge de paysages à couper le souffle, aussi bien sur terre que sous l’eau, et possède une culture fascinante qui attire chaque année des millions de voyageurs du monde entier. C’est pourquoi nos circuits et excursions vous offrent une multitude d’expériences uniques pour faire de votre voyage une aventure inoubliable.',
      tours: [
        {
          id: 1,
          imageUrl: tourImage,
          title: 'Bali Active Tour sur 8 jours',
          description: 'Le Bali Active Tour sur 8 jours est l\'un des meilleurs circuits ou voyages pour découvrir Bali',
          price: 700.00,
          path: 'bali/bali-active-tour-8-days',
          viewDetailsCallback: () => {
            navigate('/bali/bali-active-tour-8-days');
          },
        },
        {
          id: 2,
          imageUrl: tourImage,
          title: 'Bali Cycling Adventure',
          description: 'Bali Cycling Adventure is one of the best tours or trips',
          price: 700.00,
          path: 'bali/bali-cycling-adventure',
          viewDetailsCallback: () => {
            navigate('/bali/bali-cycling-adventure');
          },
        },
        {
          id: 3,
          imageUrl: tourImage,
          title: 'Bali Fast Boat Trips',
          description: 'Bali Fast Boat Trips is one of the best tours or trips',
          price: 700.00,
          path: 'bali/bali-fast-boat-trips',
          viewDetailsCallback: () => {
            navigate('/bali/bali-fast-boat-trips');
          },
        },
        {
          id: 4,
          imageUrl: tourImage,
          title: 'Flores Bali Tour',
          description: 'Flores Bali Tour is one of the best tours or trips',
          price: 700.00,
          path: 'bali/flores-bali-tour',
          viewDetailsCallback: () => {
            navigate('/bali/flores-bali-tour');
          },
        },
        {
          id: 5,
          imageUrl: tourImage,
          title: 'Bali Rafting Adventure',
          description: 'Bali Rafting Adventure is one of the best tours or trips',
          price: 700.00,
          path: 'bali/bali-rafting-adventure',
          viewDetailsCallback: () => {
            navigate('/bali/bali-rafting-adventure');
          },
        },
      ],
    },
    'borneo': {
      title: 'Borneo Tours',
      description: 'Explore the wild beauty of Borneo.',
      tours: [
        {
          id: 2,
          imageUrl: 'https://example.com/borneo1.jpg',
          title: 'Borneo Adventure',
          description: 'Experience the thrill of Borneo with our guided tours',
          price: 999.00,
          path: 'borneo',
          viewDetailsCallback: () => {
            navigate('/borneo/borneo-adventure');
          },
        },
        // Add more Borneo tours here
      ],
    },
    // Add more entries for other paths
  };

  const { title, description, tours } = tourData[path] || {};



  return (
    <div>
      
       
      
      {title && description && tours ? (
        <TourList title={title} description={description} tours={tours} />
      ) : (
        <div className="flex justify-center space-x-4">
          <Link to="/tours/bali" className="text-center">
            <img
              src={tourImage}
              alt="Bali"
              className="w-32 h-32 object-cover rounded-full mx-auto"
            />
            <span className="block mt-2 text-lg font-semibold">BALI</span>
          </Link>
          <Link to="/tours/borneo" className="text-center">
            <img
              src={tourImage}
              alt="Borneo"
              className="w-32 h-32 object-cover rounded-full mx-auto"
            />
            <span className="block mt-2 text-lg font-semibold">BORNEO</span>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Tours;