import React, { useState } from 'react';
import baliTempleTour from '../assets/images/balitempletour.jpg';
import komodoDiscoveryJourney from '../assets/images/komododiscoveryjourney.jpg';
import komodoOneDay from '../assets/images/komodooneday.jpg';
import orangutan from '../assets/images/orangutansnorthsumatera.jpg';



const images = [
  { src: baliTempleTour, alt: 'Bali Temple Tour' },
  { src: komodoDiscoveryJourney, alt: 'Komodo Discovery Journey' },
  { src: komodoOneDay, alt: 'Komodo One Day' },
  { src: orangutan, alt: 'Orangutan' },
  // Add more images here
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="p-8">
      <div className="grid grid-cols-3 gap-4">
        {images.map((image, index) => (
          <div
            key={index}
            className="relative cursor-pointer"
            onClick={() => setSelectedImage(image.src)}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-50 transition-opacity">
              <span className="text-white text-lg">{image.alt}</span>
            </div>
          </div>
        ))}
      </div>

      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="relative">
            <img src={selectedImage} alt="Selected" className="max-w-full max-h-full" />
            <button
              className="absolute top-2 right-2 text-white text-2xl"
              onClick={() => setSelectedImage(null)}
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
