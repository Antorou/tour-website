import React from 'react';
import TourCard from './TourCard';

const TourList = ({ title, description, tours }) => {
  return (
    <div className="container mx-auto px-8">
      <div className="tour-list">
        <h1 className="text-3xl font-bold text-center mb-4">{title}</h1>
        <p className="text-lg text-gray-600 text-jutify mb-6">{description}</p>
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
    </div>
  );
};

export default TourList;