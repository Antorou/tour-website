import React from 'react';
import TourCard from './TourCard';

const TourList = ({ title, description, tours }) => {

  const paragraphs = description.split('. ').map((text, index) => (
    <p key={index} className="text-lg text-gray-600 text-justify mb-4">
      {text.trim() + (text.endsWith('.') ? '' : '.')}
    </p>
  ));

  return (
    <div className="tour-list p-8 bg-white rounded-lg shadow-lg max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-4">{title}</h1>
      <div className="mb-6">
        {paragraphs}
      </div>
      <div className="tour-cards">
        {tours.map((tour) => (
          <TourCard
            key={tour.id}
            imageUrl={tour.imageUrl}
            title={tour.title}
            description={tour.description}
            price={tour.price}
            tourId={tour.id}
            path={tour.path}
          />
        ))}
      </div>
    </div>
  );
};

export default TourList;