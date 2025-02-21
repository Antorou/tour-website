import React from 'react';
import { useParams } from 'react-router-dom';

const TourDetails = ({ title, description, details }) => {
  const { tourId } = useParams();

  const tourData = {   
    'bali-active-tour-8-days': {
      title: 'Bali Active Tour 8 days',
      description: 'Bali Active Tour 8 days is one of the best tours or trips',
    },
    'bali-cycling-adventure': {
      title: "L'aventure à vélo à Bali",
      description: " L'aventure à vélo à Bali vous emmène à travers les paysages ruraux du centre de l'île, offrant des vues imprenables sur les rizières, les villages authentiques et les champs verdoyants. Cette activité est idéale pour les voyageurs passionnés de sport et d'aventure en plein air. Elle permet non seulement de profiter de la beauté naturelle de Bali, mais aussi de découvrir la vie locale et les traditions des habitants des campagnes. La durée totale de cette balade à vélo est d'environ 8 à 9 heures, en fonction du lieu de séjour des participants. La partie cycliste en elle-même dure environ 3 heures et suit un itinéraire descendant, du volcan Kintamani jusqu'à Ubud, en traversant de petits villages, des rizières et des paysages luxuriants.",
      details: {
        startTime: "Please find the information at 'Pick Up Time' below.",
        endTime: "The end time varies according to the location where the guests stay.",
        wear: "Comfortable athletic clothing, sport shoes, hat, and sunscreen.",
        included: [
          "Experienced Guides",
          "Transportation in a bus or mini coach",
          "Mountain bicycles and helmed",
          "Lunch"
        ],
        notIncluded: [
          "Alcoholic drink",
          "Guide gratuity"
        ],
        pickUpTime: {
          "Nusa Dua": "07:00 am – 07:15 am",
          "Kuta": "07:30 am – 07:45 am",
          "Seminyak": "07:45 am – 08:00 am",
          "Sanur": "08:10 am – 08:20 am",
          "Ubud": "08:30 am – 09:20 am"
        }
      },
      itinerary: [
        {
          step: 1,
          title: "Picked Up from Your Hotel",
          description: "The trip starts from your hotel. An assigned driver will come to meet you at your hotel lobby, then takes you in a comfortable mini coach for approximately 2 hours to Kintamani region."
        },
        {
          step: 2,
          title: "Simple Breakfast in Kintamani",
          description: "Upon arrival in Kintamani, you will be welcomed by the breathtaking views of Batur volcano and the largest lake in Bali namely Batur lake. Your assigned guide comes to meet you and escort you to a restaurant for breakfast. After that, enjoy your downhill cycling along the scenic road from Kintamani to Ubud."
        },
        {
          step: 3,
          title: "Visit small villages, school, and rice-paddies",
          description: "On the way to Ubud you have the opportunity to visit a small village. Learn about the life of the people and their culture. Also stop by at schools to communicate with school children. Find out what makes them enjoy the school there. At the rice-paddies, you can learn about the process of planting and harvesting rice."
        },
        {
          step: 4,
          title: "Lunch Time",
          description: "At the finish point of your memorable cycling trip, you will be escorted to our local restaurant for lunch. While having lunch you can enjoy the serenity and see the scenic views around. After lunch, your assigned driver takes you back to the hotel."
        }
      ]
    }, 
  };


  return (
    <div className="tour-details p-8 bg-white rounded-lg shadow-lg max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center text-blue-600">{tourData[tourId].title}</h1>
      <p className="text-gray-700 mb-6 text-center">{tourData[tourId].description}</p>
      
      {tourData[tourId].details && (
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-2 text-blue-500">Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h3 className="font-bold">Start Time</h3>
              <p className="text-gray-600">{tourData[tourId].details.startTime}</p>
            </div>
            <div>
              <h3 className="font-bold">End Time</h3>
              <p className="text-gray-600">{tourData[tourId].details.endTime}</p>
            </div>
            <div>
              <h3 className="font-bold">Wear</h3>
              <p className="text-gray-600">{tourData[tourId].details.wear}</p>
            </div>
            <div>
              <h3 className="font-bold">Included</h3>
              <ul className="list-disc list-inside text-gray-600">
                {tourData[tourId].details.included.map((item, index) => (
                  <li key={index}>✔ {item}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-bold">Not Included</h3>
              <ul className="list-disc list-inside text-gray-600">
                {tourData[tourId].details.notIncluded.map((item, index) => (
                  <li key={index}>✘ {item}</li>
                ))}
              </ul>
            </div>
            {tourData[tourId].details.pickUpTime && (
              <div>
                <h3 className="font-bold">Pick Up Time</h3>
                <ul className="list-disc list-inside text-gray-600">
                  {Object.entries(tourData[tourId].details.pickUpTime).map(([location, time], index) => (
                    <li key={index}>{location}: {time}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      )}

      {tourData[tourId].itinerary && (
        <div className="mt-8">
          <h2 className="text-xl font-bold mb-4 text-blue-500">Itinerary</h2>
          <ol className="list-decimal pl-5 space-y-4">
            {tourData[tourId].itinerary.map((item, index) => (
              <li key={index} className="mb-4">
                <h3 className="font-bold text-lg">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </li>
            ))}
          </ol>
        </div>
      )}
    </div>
  );
};

export default TourDetails;