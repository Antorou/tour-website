import React from 'react';
import { useParams } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import image1 from '../assets/images/flores.png';
import image2 from '../assets/images/komodoexplore.jpg';
import image3 from '../assets/images/komodooneday.jpg';
import { useLanguage } from '../i18n/LanguageContext';



// details : startTime, endTime, duration, startLocation, wear, included, notIncluded, pickUpTime
const TourDetails = ({ title, description, details, images }) => {
  const { tourId } = useParams();
  const { t, language } = useLanguage();

  const getTourDescription = (id) => {
    switch(id) {
      case 'bali-active-tour-8-days':
        return t('message.tours.baliActiveTourFull');
      case 'bali-cycling-adventure':
        return t('message.tours.baliCyclingAdventureFull');
      case 'bali-fast-boat-trips':
        return t('message.tours.baliFastBoatTripsFull');
      case 'flores-bali-tour':
        return t('message.tours.floresBaliTourFull');
      case 'bali-rafting-adventure':
        return t('message.tours.baliRaftingAdventureFull');
      case 'bali-surfing-adventure':
        return t('message.tours.baliSurfingAdventureFull');
      case 'bali-temple-tour':
        return t('message.tours.baliTempleTourFull');
      case 'bali-watersports':
        return t('message.tours.baliWatersportsFull');
      case 'central-bali-tour':
        return t('message.tours.centralBaliTourFull');
      case 'culture-heritage-tour':
        return t('message.tours.cultureHeritageTourFull');
      case 'exotic-bali-tour':
        return t('message.tours.exoticBaliTourFull');
      case 'gili-tepekong-dive-tour':
        return t('message.tours.giliTepekongDiveTourFull');
      case 'heavens-gate-tour-1-day':
        return t('message.tours.heavensGateTour1DayFull');
      case 'mount-batur-trekking-tour':
        return t('message.tours.mountBaturTrekkingTourFull');
      case 'nusapenida-island-snorkeling-tour-1-day':
        return t('message.tours.nusapenidaIslandSnorkelingTour1DayFull');
      case 'padang-bai-snorkeling-tour-1-day':
        return t('message.tours.padangBaiSnorkelingTour1DayFull');
      case 'tulamben-snorkeling-tour-1-day':
        return t('message.tours.tulambenSnorkelingTour1DayFull');
      case 'west-bali-snorkeling-tour-1-day':
        return t('message.tours.westBaliSnorkelingTour1DayFull');
        
      default:
        return description || '';
    }
  };

  const getTourTitle = (id) => {
    switch(id) {
      case 'bali-active-tour-8-days':
        return t('message.tours.baliActiveTour');
      case 'bali-cycling-adventure':
        return t('message.tours.baliCyclingAdventure');
      case 'bali-fast-boat-trips':
        return t('message.tours.baliFastBoatTrips');
      case 'flores-bali-tour':
        return t('message.tours.floresBaliTour');
      case 'bali-rafting-adventure':
        return t('message.tours.baliRaftingAdventure');
      case 'bali-surfing-adventure':
        return t('message.tours.baliSurfingAdventure');
      case 'bali-temple-tour':
        return t('message.tours.baliTempleTour');
      case 'bali-watersports':
        return t('message.tours.baliWatersports');
      case 'central-bali-tour':
        return t('message.tours.centralBaliTour');
      case 'culture-heritage-tour':
        return t('message.tours.cultureHeritageTour');
      case 'exotic-bali-tour':
        return t('message.tours.exoticBaliTour');
      case 'gili-tepekong-dive-tour':
        return t('message.tours.giliTepekongDiveTour');
      case 'heavens-gate-tour-1-day':
        return t('message.tours.heavensGateTour1Day');
      case 'mount-batur-trekking-tour':
        return t('message.tours.mountBaturTrekkingTour');
      case 'nusapenida-island-snorkeling-tour-1-day':
        return t('message.tours.nusapenidaIslandSnorkelingTour1Day');
      case 'padang-bai-snorkeling-tour-1-day':
        return t('message.tours.padangBaiSnorkelingTour1Day');
      case 'tulamben-snorkeling-tour-1-day':
        return t('message.tours.tulambenSnorkelingTour1Day');
      case 'west-bali-snorkeling-tour-1-day':
        return t('message.tours.westBaliSnorkelingTour1Day');
        
      default:
        return title || 'Tour Details';
    }
  };

  const getTourDetails = (id) => {
    switch(id) {
      case 'bali-active-tour-8-days':
        return t('message.tourDetails.baliActiveTour');
      case 'bali-cycling-adventure':
        return t('message.tourDetails.baliCyclingAdventure');
      case 'bali-fast-boat-trips':
        return t('message.tourDetails.baliFastBoatTrips');
      case 'flores-bali-tour':
        return t('message.tourDetails.floresBaliTour');
      case 'bali-rafting-adventure':
        return t('message.tourDetails.baliRaftingAdventure');
      case 'bali-surfing-adventure':
        return t('message.tourDetails.baliSurfingAdventure');
      case 'bali-temple-tour':
        return t('message.tourDetails.baliTempleTour');
      case 'bali-watersports':
        return t('message.tourDetails.baliWatersports');
      case 'central-bali-tour':
        return t('message.tourDetails.centralBaliTour');
      case 'culture-heritage-tour':
        return t('message.tourDetails.cultureHeritageTour');
      case 'exotic-bali-tour':
        return t('message.tourDetails.exoticBaliTour');
      case 'gili-tepekong-dive-tour':
        return t('message.tourDetails.giliTepekongDiveTour');
      case 'heavens-gate-tour-1-day':
        return t('message.tourDetails.heavensGateTour1Day');
      case 'mount-batur-trekking-tour':
        return t('message.tourDetails.mountBaturTrekkingTour');
      case 'nusapenida-island-snorkeling-tour-1-day':
        return t('message.tourDetails.nusapenidaIslandSnorkelingTour1Day');
      case 'padang-bai-snorkeling-tour-1-day':
        return t('message.tourDetails.padangBaiSnorkelingTour1Day');
      case 'tulamben-snorkeling-tour-1-day':
        return t('message.tourDetails.tulambenSnorkelingTour1Day');
      case 'west-bali-snorkeling-tour-1-day':
        return t('message.tourDetails.westBaliSnorkelingTour1Day');
        
      default:
        return {};
    }
  };

  const tourData = {   
    'bali-active-tour-8-days': {
      title: getTourTitle('bali-active-tour-8-days'),
      description: getTourDescription('bali-active-tour-8-days'),
      details: getTourDetails('bali-active-tour-8-days'),
      images: [image1, image2, image3]
    },
    'bali-cycling-adventure': {
      title: getTourTitle('bali-cycling-adventure'),
      description: getTourDescription('bali-cycling-adventure'),
      details: getTourDetails('bali-cycling-adventure'),
      itinerary: getTourDetails('bali-cycling-adventure').itinerary || []
    }, 
    'bali-fast-boat-trips': {
      title: getTourTitle('bali-fast-boat-trips'),
      description: getTourDescription('bali-fast-boat-trips'),
      details: getTourDetails('bali-fast-boat-trips'),
      itinerary: getTourDetails('bali-fast-boat-trips').itinerary || []
    },
    'flores-bali-tour': {
      title: getTourTitle('flores-bali-tour'),
      description: getTourDescription('flores-bali-tour'),
      details: getTourDetails('flores-bali-tour'),
      itinerary: getTourDetails('flores-bali-tour').itinerary || []
    },
    'bali-rafting-adventure': {
      title: getTourTitle('bali-rafting-adventure'),
      description: getTourDescription('bali-rafting-adventure'),
      details: getTourDetails('bali-rafting-adventure'),
      itinerary: getTourDetails('bali-rafting-adventure').itinerary || []
    },
    'bali-surfing-adventure': {
      title: getTourTitle('bali-surfing-adventure'),
      description: getTourDescription('bali-surfing-adventure'),
      details: getTourDetails('bali-surfing-adventure'),
      itinerary: getTourDetails('bali-surfing-adventure').itinerary || []
    },
    'bali-temple-tour': {
      title: getTourTitle('bali-temple-tour'),
      description: getTourDescription('bali-temple-tour'),
      details: getTourDetails('bali-temple-tour'),
      itinerary: getTourDetails('bali-temple-tour').itinerary || []
    },
    'bali-watersports': {
      title: getTourTitle('bali-watersports'),
      description: getTourDescription('bali-watersports'),
      details: getTourDetails('bali-watersports'),
      itinerary: getTourDetails('bali-watersports').itinerary || []
    },
    'central-bali-tour': {
      title: getTourTitle('central-bali-tour'),
      description: getTourDescription('central-bali-tour'),
      details: getTourDetails('central-bali-tour'),
      itinerary: getTourDetails('central-bali-tour').itinerary || []
    },
    'culture-heritage-tour': {
      title: getTourTitle('culture-heritage-tour'),
      description: getTourDescription('culture-heritage-tour'),
      details: getTourDetails('culture-heritage-tour'),
      itinerary: getTourDetails('culture-heritage-tour').itinerary || []
    },
    'exotic-bali-tour': {
      title: getTourTitle('exotic-bali-tour'),
      description: getTourDescription('exotic-bali-tour'),
      details: getTourDetails('exotic-bali-tour'),
      itinerary: getTourDetails('exotic-bali-tour').itinerary || []
    },
    'gili-tepekong-dive-tour': {
      title: getTourTitle('gili-tepekong-dive-tour'),
      description: getTourDescription('gili-tepekong-dive-tour'),
      details: getTourDetails('gili-tepekong-dive-tour'),
      itinerary: getTourDetails('gili-tepekong-dive-tour').itinerary || []
    },
    'heavens-gate-tour-1-day': {
      title: getTourTitle('heavens-gate-tour-1-day'),
      description: getTourDescription('heavens-gate-tour-1-day'),
      details: getTourDetails('heavens-gate-tour-1-day'),
      itinerary: getTourDetails('heavens-gate-tour-1-day').itinerary || []
    },
    'mount-batur-trekking-tour': {
      title: getTourTitle('mount-batur-trekking-tour'),
      description: getTourDescription('mount-batur-trekking-tour'),
      details: getTourDetails('mount-batur-trekking-tour'),
      itinerary: getTourDetails('mount-batur-trekking-tour').itinerary || []
    },
    'nusapenida-island-snorkeling-tour-1-day': {
      title: getTourTitle('nusapenida-island-snorkeling-tour-1-day'),
      description: getTourDescription('nusapenida-island-snorkeling-tour-1-day'),
      details: getTourDetails('nusapenida-island-snorkeling-tour-1-day'),
      itinerary: getTourDetails('nusapenida-island-snorkeling-tour-1-day').itinerary || []
    },
    'padang-bai-snorkeling-tour-1-day': {
      title: getTourTitle('padang-bai-snorkeling-tour-1-day'),
      description: getTourDescription('padang-bai-snorkeling-tour-1-day'),
      details: getTourDetails('padang-bai-snorkeling-tour-1-day'),
      itinerary: getTourDetails('padang-bai-snorkeling-tour-1-day').itinerary || []
    },
    'tulamben-snorkeling-tour-1-day': {
      title: getTourTitle('tulamben-snorkeling-tour-1-day'),
      description: getTourDescription('tulamben-snorkeling-tour-1-day'),
      details: getTourDetails('tulamben-snorkeling-tour-1-day'),
      itinerary: getTourDetails('tulamben-snorkeling-tour-1-day').itinerary || []
    },
    'west-bali-snorkeling-tour-1-day': {
      title: getTourTitle('west-bali-snorkeling-tour-1-day'),
      description: getTourDescription('west-bali-snorkeling-tour-1-day'),
      details: getTourDetails('west-bali-snorkeling-tour-1-day'),
      itinerary: getTourDetails('west-bali-snorkeling-tour-1-day').itinerary || []
    },

  };
  console.log(tourData, tourId, tourData[tourId]);
  const currentTour = tourData[tourId] || {};
  const tourDetails = currentTour.details || details || {};
  const tourImages = currentTour.images || images || [image1, image2, image3];
  const tourTitle = currentTour.title || title || 'Tour Details';
  const tourDescription = currentTour.description || description || '';
  const tourItinerary = currentTour.itinerary || tourDetails.itinerary || [];
  const tourPricing = tourDetails.pricing || null;

  // Helper function to render included/notIncluded arrays
  const renderList = (items) => {
    if (!items) return null;
    
    if (Array.isArray(items)) {
      return (
        <ul className="list-disc list-inside">
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      );
    }
    
    return <p>{items}</p>;
  };

  // Helper function to render pickUpTime object
  const renderPickUpTimes = (pickUpTimes) => {
    if (!pickUpTimes) return null;
    
    if (typeof pickUpTimes === 'object' && !Array.isArray(pickUpTimes)) {
      return (
        <ul className="list-disc list-inside">
          {Object.entries(pickUpTimes).map(([location, time], index) => (
            <li key={index}>{location}: {time}</li>
          ))}
        </ul>
      );
    }
    
    return <p>{pickUpTimes}</p>;
  };

  // Helper function to render pricing table
  const renderPricingTable = (pricing) => {
    if (!pricing) return null;
    
    return (
      <div className="pricing-table mt-6">
        <h3 className="text-xl font-bold mb-4">{t('message.tourDetails.pricing')}</h3>
        
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-300">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b">{t('message.tourDetails.participants')}</th>
                {Object.keys(pricing.participants).map((range, index) => (
                  <th key={index} className="py-2 px-4 border-b">{range}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-2 px-4 border-b font-semibold">{t('message.tourDetails.perPerson')}</td>
                {Object.values(pricing.participants).map((price, index) => (
                  <td key={index} className="py-2 px-4 border-b text-center">{price || '-'}</td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
        
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-bold text-blue-600 mb-2">{t('message.tourDetails.priceIncludes')}</h4>
            {renderList(pricing.includes)}
          </div>
          <div>
            <h4 className="font-bold text-blue-600 mb-2">{t('message.tourDetails.priceExcludes')}</h4>
            {renderList(pricing.excludes)}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="tour-details p-8 bg-white rounded-lg shadow-lg max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-6">{tourTitle}</h1>
      
      <Carousel showArrows={true} showThumbs={true} infiniteLoop={true} className="mb-8">
        {tourImages.map((image, index) => (
          <div key={index}>
            <img src={image} alt={`Tour image ${index + 1}`} />
          </div>
        ))}
      </Carousel>
      
      <div className="mb-8">
        <p className="text-lg mb-4">{tourDescription}</p>
      </div>
      
      {tourPricing && renderPricingTable(tourPricing)}
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        {tourDetails.startLocation && (
          <div className="detail-item">
            <h3 className="font-bold text-blue-600">{t('message.tourDetails.startLocation')}</h3>
            <p>{tourDetails.startLocation}</p>
          </div>
        )}
        
        {tourDetails.startTime && (
          <div className="detail-item">
            <h3 className="font-bold text-blue-600">{t('message.tourDetails.startTime')}</h3>
            <p>{tourDetails.startTime}</p>
          </div>
        )}
        
        {tourDetails.endTime && (
          <div className="detail-item">
            <h3 className="font-bold text-blue-600">{t('message.tourDetails.endTime')}</h3>
            <p>{tourDetails.endTime}</p>
          </div>
        )}
        
        {tourDetails.duration && (
          <div className="detail-item">
            <h3 className="font-bold text-blue-600">{t('message.tourDetails.duration')}</h3>
            <p>{tourDetails.duration}</p>
          </div>
        )}
        
        {tourDetails.wear && (
          <div className="detail-item">
            <h3 className="font-bold text-blue-600">{t('message.tourDetails.wear')}</h3>
            <p>{tourDetails.wear}</p>
          </div>
        )}
        
        {tourDetails.included && (
          <div className="detail-item">
            <h3 className="font-bold text-blue-600">{t('message.tourDetails.included')}</h3>
            {renderList(tourDetails.included)}
          </div>
        )}
        
        {tourDetails.notIncluded && (
          <div className="detail-item">
            <h3 className="font-bold text-blue-600">{t('message.tourDetails.notIncluded')}</h3>
            {renderList(tourDetails.notIncluded)}
          </div>
        )}
        
        {tourDetails.pickUpTime && (
          <div className="detail-item">
            <h3 className="font-bold text-blue-600">{t('message.tourDetails.pickUpTime')}</h3>
            {renderPickUpTimes(tourDetails.pickUpTime)}
          </div>
        )}
        
      </div>

      {tourDetails.diveInfo && (
        <div className="mt-8">
          <h2 className="text-2xl font-bold text-center mb-6">{t('message.tourDetails.diveInformation')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {tourDetails.diveInfo.visibility && (
              <div className="detail-item">
                <h3 className="font-bold text-blue-600">{t('message.tourDetails.visibility')}</h3>
                <p>{tourDetails.diveInfo.visibility}</p>
              </div>
            )}
            
            {tourDetails.diveInfo.difficulty && (
              <div className="detail-item">
                <h3 className="font-bold text-blue-600">{t('message.tourDetails.difficulty')}</h3>
                <p>{tourDetails.diveInfo.difficulty}</p>
              </div>
            )}
            
            {tourDetails.diveInfo.diveTypes && (
              <div className="detail-item">
                <h3 className="font-bold text-blue-600">{t('message.tourDetails.diveTypes')}</h3>
                <p>{tourDetails.diveInfo.diveTypes}</p>
              </div>
            )}
            
            {tourDetails.diveInfo.depth && (
              <div className="detail-item">
                <h3 className="font-bold text-blue-600">{t('message.tourDetails.depth')}</h3>
                <p>{tourDetails.diveInfo.depth}</p>
              </div>
            )}
            
            {tourDetails.diveInfo.current && (
              <div className="detail-item">
                <h3 className="font-bold text-blue-600">{t('message.tourDetails.current')}</h3>
                <p>{tourDetails.diveInfo.current}</p>
              </div>
            )}
            
            {tourDetails.diveInfo.waterTemperature && (
              <div className="detail-item">
                <h3 className="font-bold text-blue-600">{t('message.tourDetails.waterTemperature')}</h3>
                <p>{tourDetails.diveInfo.waterTemperature}</p>
              </div>
            )}
            
            {tourDetails.diveInfo.contour && (
              <div className="detail-item">
                <h3 className="font-bold text-blue-600">{t('message.tourDetails.contour')}</h3>
                <p>{tourDetails.diveInfo.contour}</p>
              </div>
            )}
            
            {tourDetails.diveInfo.bigFish && (
              <div className="detail-item">
                <h3 className="font-bold text-blue-600">{t('message.tourDetails.marineLife')}</h3>
                <p>{tourDetails.diveInfo.bigFish}</p>
              </div>
            )}
          </div>
        </div>
      )}

      {tourItinerary && tourItinerary.length > 0 && (
        <div className="mt-8">
          <h2 className="text-2xl font-bold text-center mb-6">{t('message.tourDetails.itinerary')}</h2>
          <div className="space-y-6">
            {tourItinerary.map((item, index) => (
              <div key={index} className="border-b pb-4 last:border-b-0">
                <h3 className="font-bold text-lg text-blue-600 mb-2">{item.title}</h3>
                <p>{item.description}</p>
                {item.details && item.details.length > 0 && (
                  <ul className="list-disc list-inside mt-2">
                    {item.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="ml-4">{detail}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default TourDetails;