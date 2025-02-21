import React from 'react';
import TourList from '../components/TourList';
import { useNavigate, useParams } from 'react-router-dom';


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
          imageUrl: 'https://example.com/bali1.jpg',
          title: 'Bali Active Tour 8 days',
          description: 'Bali Active Tour 8 days is one of the best tours or trips',
          price: 789.00,
          path: 'bali/bali-active-tour-8-days',
          viewDetailsCallback: () => {
            navigate('/bali/bali-active-tour-8-days');
          },
        },
        {
          id: 2,
          imageUrl: 'https://example.com/bali1.jpg',
          title: 'Bali Cycling Adventure',
          description: 'Bali Cycling Adventure is one of the best tours or trips',
          price: 789.00,
          path: 'bali/bali-cycling-adventure',
          viewDetailsCallback: () => {
            navigate('/bali/bali-cycling-adventure');
          },
        },
        // Add more Bali tours here
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
        <p>Tour information not available.</p>
      )}
    </div>
  );
};

export default Tours;