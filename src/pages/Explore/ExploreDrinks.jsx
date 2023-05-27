import React from 'react';
import Header from '../../components/Header';
import useExplore from '../../hooks/useExplore';

const TYPE = 'drinks';

export default function ExploreDrinks() {
  const { surpriseMe, byIngredient } = useExplore(TYPE);
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
          data-testid="explore-surprise"
          onClick={ () => surpriseMe() }
        >
          Surprise me!
        </button>
      </div>
    </div>
  );
}
