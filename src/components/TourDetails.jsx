import React from 'react';
import { useParams } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import image1 from '../assets/images/flores.png';
import image2 from '../assets/images/komodoexplore.jpg';
import image3 from '../assets/images/komodooneday.jpg';

// details : startTime, endTime, duration, startLocation, wear, included, notIncluded, pickUpTime
const TourDetails = ({ title, description, details, images }) => {
  const { tourId } = useParams();

  const tourData = {   
    'bali-active-tour-8-days': {
      title: 'Bali Active Tour 8 jours',
      description: "Le Bali Active Tour de 8 jours est l'un des meilleurs circuits ou voyages pour découvrir Bali. Il emmène les voyageurs vers les lieux les plus recommandés de Bali. Ce voyage inclut des activités sportives telles que le rafting, le cyclisme, la randonnée, l'escalade de volcans, le snorkeling, le trekking, ainsi que la visite de temples et de cascades. Bien sûr, tous les voyageurs ne sont pas intéressés par toutes les activités mentionnées ci-dessus. C'est pourquoi nous sommes ouverts à d'autres alternatives. Alors, partagez avec nous votre rêve de vacances afin que nous puissions créer un itinéraire adapté pour vous.",
      details: {
        startLocation: "Bali",
        startTime: "Veuillez arriver à 8h15 pour un départ à 8h30.",
        endTime: "Environ 18h30.",
        wear: "Vêtements de sport confortables, chaussures de randonnée, chapeau, veste et crème solaire.",
        included: [
          "Guide expérimenté",
          "Tous les frais d'entrée",
          "Rafting + Tour des dauphins",
          "Trekking volcan + Guide de trekking",
          "Déjeuner + eau potable",
          "Transport en mini-car + Chauffeur",
          "Snorkeling à Tulamben",
          "Bateau + équipement de snorkeling à l'ouest de Bali"
        ],
        notIncluded: [
          "Hébergement",
          "Dîner"
        ],
        images: [
          image1,
          image2,
          image3
        ] 
      },
      itinerary: [
        {
          step: 1,
          title: "Jour 1 : Rafting – Grotte de Goa Lawah – Candi Dasa (B/L/-)",
          description: "Le premier jour, votre visite se dirige vers l'est. Vous serez pris en charge à votre hôtel le matin, puis transféré environ 2 heures vers la rivière Telaga Waja à Muncan-Est Bali. Telagawaja est longue de 17 km, ce qui en fait la plus longue rivière de Bali. Le rafting sur Telaga Waja est une expérience fantastique avec les meilleurs rapides en eaux vives et les plus difficiles de Bali. Pendant le rafting, vous serez émerveillé par les vues pittoresques des rizières, des champs verts et de la forêt tropicale de chaque côté de la rivière. Après le déjeuner, continuez vers la grotte de Goa Lawah pour voir des milliers de chauves-souris accrochées aux parois de la grotte. Ensuite, continuez vers Candi Dasa. Enregistrement à l'hôtel réservé là-bas."
        },
        {
          step: 2,
          title: "Jour 2 : Snorkeling à Tulamben – Palais de l'eau de Tita Gangga – Sidemen (B/L/-)",
          description: "Le deuxième jour, votre visite commence à 08h30. Départ de votre hôtel après le petit-déjeuner, puis direction Tulamben pour faire du snorkeling. Explorez les fascinants récifs coralliens de l'épave américaine et découvrez la faune marine telle que le poisson-lune mola-mola, le requin-marteau, le requin-baleine, le perroquet à bosse, les requins de récif à pointe noire et les poissons coralliens colorés. Le déjeuner sera servi dans un restaurant local à proximité. Ensuite, visitez le palais de l'eau du dernier roi de Karangasem-est Bali. Puis, continuez vers Sidemen. Enregistrement à l'hôtel réservé à Tulamben."
        },
        {
          step: 3,
          title: "Jour 3 : Cyclisme à Sidemen – Temple de Besakih – Kintamani (B/L/-)",
          description: "Pris en charge à l'hôtel après le petit-déjeuner. Votre voyage commence par une aventure à vélo à travers la région rurale de Sidemen. Cela prend deux heures sur la route pittoresque à travers les rizières, les champs verts et les villages. Retour à l'hôtel pour une douche. Après le déjeuner, direction Besakih pour visiter le plus grand temple de Bali. À votre arrivée à Besakih, mettez votre sarong, un vêtement traditionnel balinais. Il est nécessaire pour nous permettre d'entrer dans le temple sacré de Besakih. Le complexe du temple est immense, il faut donc du temps et des efforts pour l'explorer. Ce qui rend le temple spectaculaire, c'est la porte divisée de Pura Agung, le temple principal de Besakih. Il est conçu et créé par les mains des talentueux Balinais. Profitez de la vue sur le temple, tout en prenant une photo. Continuez vers le nord-ouest jusqu'à Kintamani. Enregistrement à l'hôtel réservé là-bas."
        },
        {
          step: 4,
          title: "Jour 4 : Randonnée au volcan Batur – Rizières de Tegalalang - Ubud (B/L/-)",
          description: "Pris en charge à l'hôtel très tôt le matin à 03h30. Descendez environ 25 minutes dans le cratère massif du volcan Batur jusqu'à arriver à la base du mont Batur. Rencontrez votre guide de randonnée assigné là-bas, puis profitez d'une randonnée de deux heures pour vivre une expérience de lever de soleil spectaculaire au sommet du mont Batur (1717 M). Retour à l'hôtel pour une douche. Départ de l'hôtel et visite de la production traditionnelle de café à Kayuambua. Vous avez l'opportunité d'essayer le Kopi Luwak, un café étrange fabriqué à partir des excréments de la civette. Ensuite, continuez vers Ubud avec un arrêt à Tegalalang pour visiter les plus belles rizières du centre de Bali, en même temps vous pouvez profiter d'une activité de balançoire pour le plaisir, qui a lieu dans les rizières (à vos frais). Dans l'après-midi, enregistrement à l'hôtel réservé à Ubud."
        },
        {
          step: 5,
          title: "Jour 5 : Promenade de Djampuhan – Cascade de Tegenungan – Forêt des singes d'Alas Kedaton - Jatiluwih (B/L/-)",
          description: "Pris en charge à 08h00 et direction Djampuhan. Profitez d'une belle promenade sur un petit chemin à travers le paysage pittoresque sur la colline couverte de savane et les deux rivières de chaque côté de la colline. Après cela, visitez la cascade de Tegenungan à Kemenuh, au sud-est d'Ubud. Même si elle ne fait que 10 mètres de haut, la cascade est extrêmement charmante. Continuez vers l'ouest pour visiter la forêt des singes d'Alas Kedaton. Cette forêt tropicale de 12 hectares abrite plus de 2 000 macaques. Explorez la forêt et profitez de votre temps avec les singes mignons. Après cela, continuez vers Jatiluwih à travers le paysage pittoresque de la région rurale de Tabanan. Une heure plus tard, arrivez à Jatiluwih. Ensuite, vous avez l'opportunité de vous promener à travers les magnifiques rizières, le site du patrimoine traditionnel reconnu par l'UNESCO en 2012. Après cela, enregistrement à l'hôtel réservé à proximité."
        },
        {
          step: 6,
          title: "Jour 6 : Temple de l'eau du lac Bratan – Cascades de Sekumpul - Plage de Lovina (B/L/-)",
          description: "Pris en charge à 09h00 et direction le nord vers le lac de montagne Bratan. Profitez des belles vues sur les rizières et les champs verts le long du chemin. Parfois, vous pouvez voir des arbres tropicaux tels que le caféier, le giroflier, le vanillier, le cacaoyer, le cannelier, et des plantes fruitières locales comme le papayer, le bananier, le mangoustan, le salak (fruits du serpent) et plus encore. À votre arrivée au lac Bratan, visitez le majestueux temple Ulun Danu situé au bord du lac Bratan. Ce temple est dédié à la déesse de l'eau Dewi Danu. Ce qui rend le temple si beau, c'est lorsque le niveau de l'eau du lac est élevé, que le temple semble flotter sur l'eau. Après cela, continuez vers le nord. Arrêtez-vous dans le village de Sekumpul pour visiter ses impressionnantes cascades. Les cascades sont assez éloignées du parking ; par conséquent, il faut un peu d'effort pour les atteindre. Des chaussures de randonnée et des sandales sont recommandées, en raison de la descente des escaliers raides et de la marche dans la rivière, même si le paysage est extrêmement charmant. Il y a 2 emplacements de cascades, mais pas trop éloignés l'un de l'autre. Après le déjeuner, continuez vers la plage de Lovina, Singaraja-nord Bali. Enregistrement à l'hôtel réservé à Lovina."
        },
        {
          step: 7,
          title: "Jour 7 : Dauphins - Snorkeling & Randonnée dans le parc national de l'ouest de Bali - Pemuteran (B/L/-)",
          description: "Réveillez-vous tôt le matin à 05h00. Rencontrez votre guide assigné dans le hall de l'hôtel, puis marchez jusqu'à la plage. Un bateau en bois traditionnel vous emmènera voir les dauphins dans la mer du nord de Bali. Profitez de votre visite des dauphins pendant presque 2 heures. Retour à l'hôtel pour le petit-déjeuner et la douche. Départ de l'hôtel et direction Labuhan Lalang, parc national de l'ouest de Bali. Après presque 2 heures de route à travers le paysage côtier nord, arrivez enfin à Labuan Lalang, où vous prendrez un bateau en bois traditionnel pour la visite de snorkeling à l'île de Menjangan. Environ 30 minutes plus tard, vous arriverez à Menjangan. Soyez prêt à explorer le magnifique paysage de récifs coralliens en faisant du snorkeling dans les eaux entourant l'île de Menjangan. Il y a beaucoup de faune marine à voir, y compris l'hippocampe pygmée, la tortue de mer, le requin-baleine, le mola mola, les mérous, et plus encore. Retour à Labuan Lalang, puis direction Tegal Blunder, le point de départ pour la randonnée dans le parc national de l'ouest de Bali. Profitez de l'observation des oiseaux tout en randonnant sur le sentier de Tegal Blunder. C'est une promenade facile d'environ 2 heures. Après cela, continuez vers Pemuteran. Enregistrement à l'hôtel réservé là-bas."
        },
        {
          step: 8,
          title: "Jour 8 : Source chaude de Banjar – Rizières de Pupuan Antosari – Temple de Tanah Lot – Sud de Bali (B/L/-)",
          description: "Pris en charge à l'hôtel à 09h00. Ensuite, direction l'est à travers le paysage côtier nord de Bali. Après presque 2 heures, arrivez à Banjar. Profitez de la baignade dans les sources chaudes là-bas. Après cela, continuez vers le sud. Visitez la plus grande statue de Bouddha à Pupuan, puis profitez du long voyage vers le sud avec quelques arrêts dans des endroits pittoresques. Dans l'après-midi, visitez le temple de l'eau de Tanah Lot, puis profitez d'un coucher de soleil spectaculaire là-bas. Enfin, retournez vers le sud et enregistrez-vous à votre hôtel réservé."
        }
      ]
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
        },
        images: [
          
        ]
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
    'bali-fast-boat-trips': {
      title: "Bali Fast Boat Trips",
      description: "Bali Fast Boat Trips provides the one way or return transfers from Bali to Gili-Gili Lombok, Nusa Lembongan and Nusa Penida Island. These fast boat transfers can include pick up and drop at your hotel in Bali. To see the most interesting places in Nusa Penida, we offer a private one-day sightseeing tour where you can visit the breathtaking sights of the Island. Not only sightseeing tour but also snorkeling tour will complete your trip to Nusa Penida. You will discover the fascinating coral reef landscape with plenty of marine animals. If you are a group of more than 10 people, you can charter a boat where you can enjoy the trip without another participant. There are many different boats that are ready for Bali Fast Boat Trips. It depends on your trip planning. Please make a reservation at least one day prior to your tour schedule. For the accommodation in Nusa Penida, Lembongan and Gili-Gili Islands, you can book it by yourself online easily. Even though we can help you to make a hotel reservation.",
      details: {
        startLocation: "Bali",
        startTime: "Please arrive at least one hour before the departure.",
        wear: "Comfortable athletic clothing, sport shoes, hat, and sunscreen.",
        included: [
          "Fast Boat",
          "Transportation"
        ],
        notIncluded: [
          "Travel Insurance",
          "Guide gratuity"
        ],
        images: [
          
        ]
      },
      itinerary: [  
        { 
          step: 1,
            title: "Day 1: Departure",
            description: "Ornare proin neque tempus cubilia cubilia blandit netus. Maecenas massa. Fermentum. Pretium vitae tempus sem enim enim. Tempus, leo, taciti augue aliquam hendrerit. Accumsan pharetra eros justo augue posuere felis elit cras montes fames. Vulputate dictumst egestas etiam dictum varius."
          },
          {
            step: 2,
            title: "Day 2",
            description: "Tortor elementum egestas metus potenti habitasse tempus natoque senectus commodo rutrum quisque fermentum. Nisi velit primis dapibus odio consequat facilisi sollicitudin porta nulla tellus sagittis platea tempor sed parturient convallis consectetuer Vulputate curae; pharetra."
          },
          {
            step: 3,
            title: "Day 3",
            description: "Fusce sagittis viverra lorem proin porttitor conubia risus vivamus. Mollis. Luctus curabitur porta nibh penatibus aliquet nec conubia magnis semper, sem feugiat scelerisque molestie. Nibh proin dapibus phasellus lacus. Facilisi."
          },
          {
            step: 4,
            title: "Day 4: Return",
            description: ""
        }
      ]
    },
    'flores-bali-tour': {
      title: "Bali Flores Tour",
      description: "Bali Flores Tour is one of the best multi-day round trips that takes travelers to discover the authentic Bali and Flores. This multi-day trip specifically designed for those who love challenging activities such as hiking, trekking, mountaineering, submarine explore, and more. But the most importantly is to discover the authentic places of these two wonderful Islands. This tour is a combination of air, land and sea transportations. The concept of this trip is a private tour in English. Certainly, no other participants can join you in the tour without your permission. In case you don't speak English, you can request a special tour guide who can German, French or other languages.",
      details: {
        startLocation: "Bali",
        startTime: "Please arrive by 8:15 AM for a prompt departure at 8:30 AM.",
        endTime: "Approximately 6:30 PM.",
        wear: "Comfortable athletic clothing, hiking boots, hat, jacket and sunscreen.",
        included: [
          "Tour guide",
          "Mineral Water",
          "Meals as noted in the itinerary",
          "Transportation in mini-coach"
        ],
        notIncluded: [
          "Flights",
          "Instructor gratuity"
        ],
        images: [
          // Add image imports or URLs here
        ]
      },
      itinerary: [
        // Add itinerary details here
      ]
    },
    'bali-rafting-adventure': {
      title: "Bali Rafting Adventure",
      description: "Le rafting à Bali est l'une des aventures les plus excitantes qui rendra vos vacances encore plus fun et inoubliables. Venez vivre une expérience unique en compagnie de votre partenaire, votre famille ou vos amis et profitez d'une descente en rafting sensationnelle. Notre équipe est là pour vous offrir un service de qualité, en veillant à votre sécurité et à votre satisfaction. Nos guides, experts du rafting sur la rivière Telaga Waja, possèdent une solide expérience. Alors, laissez-vous porter et profitez pleinement de l'aventure ! La rivière Telaga Waja est située dans le village de Muncan, dans le district de Karangasem, à l'est de Bali. Il s'agit de la plus longue rivière de l'île, s'écoulant à travers un paysage pittoresque depuis la base du mont Agung, le plus haut volcan de Bali (3 142 m), jusqu'à la mer. Le parcours de rafting sur la Telaga Waja s'étend sur 17 km, depuis Muncan jusqu'au point d'arrivée à Selat. Il offre les meilleurs rapides en eaux vives et constitue l'expérience de rafting la plus exaltante de Bali, avec des paysages spectaculaires comprenant des rizières en terrasses, des champs verdoyants et une forêt tropicale luxuriante de chaque côté de la rivière." ,
      details: {
        startLocation: "Bali",
        startTime: "Merci d'arriver à 8h15 pour un départ ponctuel à 8h30.",
        endTime: "Vers 18h30.",
        wear: "Vêtements confortables, des chaussures de marche, un chapeau ainsi qu'une crème solaire.",
        included: [
          "Guide expérimenté",
          "Repas",
          "Eau potable",
          "Transport en minibus",
        ],
        notIncluded: [
          "Assurance voyage",
          "Pourboire du guide"
        ],
        images: [
          // Add image imports or URLs here
        ]
      },
      itinerary: [
        // Add itinerary details here
      ]
    } 
  };


  return (
    <div className="tour-details p-8 bg-white rounded-lg shadow-lg max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center text-blue-600">{tourData[tourId].title}</h1>
      <div className="text-gray-700 mb-6 text-center">
        {tourData[tourId].description.split('. ').map((text, index) => (
          <p key={index} className="mb-4" style={{ lineHeight: '1.4' }}>
            {text.trim() + (text.endsWith('.') ? '' : '.')}
          </p>
        ))}
      </div>

      {tourData[tourId].details.images.length > 0 && (
        <div className="mt-8">
          <Carousel showThumbs={false} infiniteLoop useKeyboardArrows>
            {tourData[tourId].details.images.map((imgSrc, index) => (
              <div key={index}>
                <img src={imgSrc} alt={`Image ${index + 1}`} className="w-full max-h-64 object-contain" />
              </div>
            ))}
          </Carousel>
        </div>
      )}
      
      {tourData[tourId].details && (
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-2 text-blue-500">Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {tourData[tourId].details.startLocation && (
              <div>
                <h3 className="font-bold">Departure location</h3>
                <p className="text-gray-600">{tourData[tourId].details.startLocation}</p>
              </div>
            )}
            {tourData[tourId].details.startTime && (
              <div>
                <h3 className="font-bold">Start Time</h3>
                <p className="text-gray-600">{tourData[tourId].details.startTime}</p>
              </div>
            )}
            {tourData[tourId].details.endTime && (
              <div>
                <h3 className="font-bold">End Time</h3>
                <p className="text-gray-600">{tourData[tourId].details.endTime}</p>
              </div>
            )}
            {tourData[tourId].details.wear && (
              <div>
                <h3 className="font-bold">Wear</h3>
                <p className="text-gray-600">{tourData[tourId].details.wear}</p>
              </div>
            )}
            {tourData[tourId].details.included && tourData[tourId].details.included.length > 0 && (
              <div>
                <h3 className="font-bold">Included</h3>
                <ul className="list-none list-inside text-gray-600">
                  {tourData[tourId].details.included.map((item, index) => (
                    <li key={index}>✔ {item}</li>
                  ))}
                </ul>
              </div>
            )}
            {tourData[tourId].details.notIncluded && tourData[tourId].details.notIncluded.length > 0 && (
              <div>
                <h3 className="font-bold">Not Included</h3>
                <ul className="list-none list-inside text-gray-600">
                  {tourData[tourId].details.notIncluded.map((item, index) => (
                    <li key={index}>✘ {item}</li>
                  ))}
                </ul>
              </div>
            )}
            {tourData[tourId].details.pickUpTime && (
              <div>
                <h3 className="font-bold">Pick Up Time</h3>
                <ul className="list-disc list-inside text-gray-600" >
                  {Object.entries(tourData[tourId].details.pickUpTime).map(([location, time], index) => (
                    <li key={index} >{location}: {time}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      )}

      {tourData[tourId].itinerary && (
        <div className="mt-8">
          <h2 className="text-xl font-bold mb-4 text-blue-500  ">Itinerary</h2>
          <ol className="list-decimal pl-5 space-y-4">
            {tourData[tourId].itinerary.map((item, index) => (
              <li key={index} className="list-none mb-4">
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-gray-600" style={{ lineHeight: '1.4' }}>{item.description}</p>
              </li>
            ))}
          </ol>
        </div>
      )}

  
    </div>
  );
};

export default TourDetails;