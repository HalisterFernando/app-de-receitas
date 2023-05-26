import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header';
import useExplore from '../../hooks/useExplore';

const TYPE = 'foods';

export default function ExploreFoods() {
  const { surpriseMe, byIngredient } = useExplore(TYPE);
  const navigate = useNavigate();
  return (
    <div className="h-screen flex flex-col">
      <Header />
      <div className="flex flex-col justify-center gap-6 items-center h-full ">
        <button
          type="button"
          className="w-72 h-14 text-center shadow-md shadow-black bg-orange-400 rounded"
          data-testid="explore-by-ingredient"
          onClick={ () => byIngredient() }
        >
          By Ingredient
        </button>
        <button
          type="button"
          className="w-72 h-14 text-center shadow-md shadow-black bg-orange-400 rounded"
          data-testid="explore-by-nationality"
          onClick={ () => navigate('/explore/foods/nationalities') }
        >
          By Nationality
        </button>
        <button
          type="button"
          className="w-72 h-14 text-center shadow-md shadow-black bg-orange-400 rounded"
          data-testid="explore-surprise"
          onClick={ () => surpriseMe() }
        >
          Surprise me!
        </button>
      </div>
    </div>
  );
}
