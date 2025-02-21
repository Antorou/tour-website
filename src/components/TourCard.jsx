import React from 'react';
import { useNavigate } from 'react-router-dom';

const TourCard = ({ imageUrl, title, description, price, tourId, path }) => {
  const navigate = useNavigate();

  const handleViewTour = () => {
    navigate(`/tours/${path}`);
  };

  return (
    <div className="flex bg-white shadow-md rounded-lg overflow-hidden mb-4">
      <img src={imageUrl} alt={title} className="w-2/5 object-cover" />
      <div className="w-2/3 p-4">
        <h2 className="text-xl font-bold mb-2">{title}</h2>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex flex-col items-end">
          <div className="flex flex-col items-end mb-4">
            <span className="text-pink-500 text-2xl font-bold">${price.toFixed(2)}</span>
            <span className="text-sm text-gray-500">per person</span>
          </div>
          <button onClick={handleViewTour} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            View Tour
          </button>
        </div>
      </div>
    </div>
  );
};

export default TourCard;
