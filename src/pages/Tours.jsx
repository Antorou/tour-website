import React from 'react';
import TourList from '../components/TourList';
import { useNavigate, useParams, Link } from 'react-router-dom';
import tourImage from '../assets/images/tourcard.jpg';
import { useLanguage } from '../i18n/LanguageContext';

const Tours = () => {
  const navigate = useNavigate();
  const { path } = useParams();
  const { t, language } = useLanguage();
  
  const tourData = {
    'bali': {
      title: t('message.tours.baliTours'),
      description: t('message.tours.baliDescription'),
      tours: [
        {
          id: 1,
          imageUrl: tourImage,
          title: t('message.tours.baliActiveTour'),
          description: t('message.tours.baliActiveTourShort'),
          price: 700.00,
          path: 'tours/bali-active-tour-8-days',
          viewDetailsCallback: () => {
            navigate('/tours/bali-active-tour-8-days');
          },
        },
        {
          id: 2,
          imageUrl: tourImage,
          title: t('message.tours.baliCyclingAdventure'),
          description: t('message.tours.baliCyclingAdventureShort'),
          price: 55.00,
          path: 'tours/bali-cycling-adventure',
          viewDetailsCallback: () => {
            navigate('/tours/bali-cycling-adventure');
          },
        },
        {
          id: 3,
          imageUrl: tourImage,
          title: t('message.tours.baliFastBoatTrips'),
          description: t('message.tours.baliFastBoatTripsShort'),
          price: 0.00,
          path: 'tours/bali-fast-boat-trips',
          viewDetailsCallback: () => {
            navigate('/tours/bali-fast-boat-trips');
          },
        },
        {
          id: 4,
          imageUrl: tourImage,
          title: t('message.tours.floresBaliTour'),
          description: t('message.tours.floresBaliTourShort'),
          price: 0.00,
          path: 'tours/flores-bali-tour',
          viewDetailsCallback: () => {
            navigate('/tours/flores-bali-tour');
          },
        },
        {
          id: 5,
          imageUrl: tourImage,
          title: t('message.tours.baliRaftingAdventure'),
          description: t('message.tours.baliRaftingAdventureShort'),
          price: 700.00,
          path: 'tours/bali-rafting-adventure',
          viewDetailsCallback: () => {
            navigate('/tours/bali-rafting-adventure');
          },
        },
        {
          id: 6,
          imageUrl: tourImage,
          title: t('message.tours.baliSurfingAdventure'),
          description: t('message.tours.baliSurfingAdventureShort'),
          price: 0.00,
          path: 'tours/bali-surfing-adventure',
          viewDetailsCallback: () => {
            navigate('/tours/bali-surfing-adventure');
          },
        },
        {
          id: 7,
          imageUrl: tourImage,
          title: t('message.tours.baliTempleTour'),
          description: t('message.tours.baliTempleTourShort'),
          price: 0.00,
          path: 'tours/bali-temple-tour',
          viewDetailsCallback: () => {
            navigate('/tours/bali-temple-tour');
          },
        },
        {
          id: 8,
          imageUrl: tourImage,
          title: t('message.tours.baliWatersports'),
          description: t('message.tours.baliWatersportsShort'),
          price: 0.00,
          path: 'tours/bali-watersports',
          viewDetailsCallback: () => {
            navigate('/tours/bali-watersports');
          },
        },
        {
          id: 9,
          imageUrl: tourImage,
          title: t('message.tours.centralBaliTour'),
          description: t('message.tours.centralBaliTourShort'),
          price: 0.00,
          path: 'tours/central-bali-tour',
          viewDetailsCallback: () => {
            navigate('/tours/central-bali-tour');
          },
        },
        {
          id: 10,
          imageUrl: tourImage,
          title: t('message.tours.cultureHeritageTour'),
          description: t('message.tours.cultureHeritageTourShort'),
          price: 0.00,
          path: 'tours/culture-heritage-tour',
          viewDetailsCallback: () => {
            navigate('/tours/culture-heritage-tour');
          },
        },
        {
          id: 11,
          imageUrl: tourImage,
          title: t('message.tours.exoticBaliTour'),
          description: t('message.tours.exoticBaliTourShort'),
          price: 0.00,
          path: 'tours/exotic-bali-tour',
          viewDetailsCallback: () => {
            navigate('/tours/exotic-bali-tour');
          },
        },
        {
          id: 12,
          imageUrl: tourImage,
          title: t('message.tours.giliTepekongDiveTour'),
          description: t('message.tours.giliTepekongDiveTourShort'),
          price: 0.00,
          path: 'tours/gili-tepekong-dive-tour',
          viewDetailsCallback: () => {
            navigate('/tours/gili-tepekong-dive-tour');
          },
        },
        {
          id: 13,
          imageUrl: tourImage,
          title: t('message.tours.heavensGateTour1Day'),
          description: t('message.tours.heavensGateTour1DayShort'),
          price: 0.00,
          path: 'tours/heavens-gate-tour-1-day',
          viewDetailsCallback: () => {
            navigate('/tours/heavens-gate-tour-1-day');
          },
        },
        {
          id: 14,
          imageUrl: tourImage,
          title: t('message.tours.mountBaturTrekkingTour'),
          description: t('message.tours.mountBaturTrekkingTourShort'),
          price: 0.00,
          path: 'tours/mount-batur-trekking-tour',
          viewDetailsCallback: () => {
            navigate('/tours/mount-batur-trekking-tour');
          },
        },
        {
          id: 15,
          imageUrl: tourImage,
          title: t('message.tours.nusapenidaIslandSnorkelingTour1Day'),
          description: t('message.tours.nusapenidaIslandSnorkelingTour1DayShort'),
          price: 0.00,
          path: 'tours/nusapenida-island-snorkeling-tour-1-day',
          viewDetailsCallback: () => {
            navigate('/tours/nusapenida-island-snorkeling-tour-1-day');
          },
        },
        {
          id: 16,
          imageUrl: tourImage,
          title: t('message.tours.padangBaiSnorkelingTour1Day'),
          description: t('message.tours.padangBaiSnorkelingTour1DayShort'),
          price: 0.00,
          path: 'tours/padang-bai-snorkeling-tour-1-day',
          viewDetailsCallback: () => {
            navigate('/tours/padang-bai-snorkeling-tour-1-day');
          },
        },
        {
          id: 17,
          imageUrl: tourImage,
          title: t('message.tours.tulambenSnorkelingTour1Day'),
          description: t('message.tours.tulambenSnorkelingTour1DayShort'),
          price: 0.00,
          path: 'tours/tulamben-snorkeling-tour-1-day',
          viewDetailsCallback: () => {
            navigate('/tours/tulamben-snorkeling-tour-1-day');
          },
        },
        {
          id: 18,
          imageUrl: tourImage,
          title: t('message.tours.westBaliSnorkelingTour1Day'),
          description: t('message.tours.westBaliSnorkelingTour1DayShort'),
          price: 0.00,
          path: 'tours/west-bali-snorkeling-tour-1-day',
          viewDetailsCallback: () => {
            navigate('/tours/west-bali-snorkeling-tour-1-day');
          },
        },
      ],
    },
    'borneo': {
      title: t('message.tours.borneoTours'),
      description: t('message.tours.borneoToursDescription'),
      tours: [
        {
          id: 2,
          imageUrl: 'https://example.com/borneo1.jpg',
          title: t('message.tours.borneoAdventure'),
          description: t('message.tours.borneoAdventureShort'),
          price: 999.00,
          path: 'tours/borneo-adventure',
          viewDetailsCallback: () => {
            navigate('/tours/borneo-adventure');
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
        <div className="p-8">
          <h1 className="text-3xl font-bold text-center mb-8">{t('message.tours.pageTitle')}</h1>
          <div className="flex justify-center space-x-8">
            <Link to="/tours/bali" className="text-center transition-transform hover:scale-105">
              <img
                src={tourImage}
                alt="Bali"
                className="w-40 h-40 object-cover rounded-full mx-auto shadow-lg"
              />
              <span className="block mt-4 text-xl font-semibold">{t('message.tours.baliTours')}</span>
            </Link>
            <Link to="/tours/borneo" className="text-center transition-transform hover:scale-105">
              <img
                src={tourImage}
                alt="Borneo"
                className="w-40 h-40 object-cover rounded-full mx-auto shadow-lg"
              />
              <span className="block mt-4 text-xl font-semibold">{t('message.tours.borneoTours')}</span>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Tours;