import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header';

export default function Explore() {
  const navigate = useNavigate();
  return (
    <div className="h-screen flex flex-col">
      <Header />
      <div className="flex flex-col justify-center gap-6 items-center h-full ">
        <button
          type="button"
          className="w-72 h-14 text-center shadow-md shadow-black bg-orange-400 rounded"
          data-testid="explore-foods"
          onClick={ () => navigate('/explore/foods') }
        >
          Explore Foods
        </button>
        <button
          type="button"
          className="w-72 h-14 text-center shadow-md shadow-black bg-orange-400 rounded"
          data-testid="explore-drinks"
          onClick={ () => navigate('/explore/drinks') }
        >
          Explore Drinks
        </button>
      </div>
    </div>
  );
}
