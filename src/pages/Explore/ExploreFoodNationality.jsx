import React, { useContext } from 'react';
import Header from '../../components/Header';
import NationatyOptions from '../../components/NationatyOptions';
import RecipeCard from '../../components/Cards/RecipeCard';
import { AppContext } from '../../context/Provider';

export default function ExploreFoodNationality() {
  const { meals } = useContext(AppContext);

  return (
    <div className="h-screen flex flex-col">
      <Header />
      <NationatyOptions />
      <div
        className="
      flex
      flex-wrap
      justify-center
      gap-2
      items-center
      h-full
      overflow-y-scroll
      py-2
      "
      >
        {meals.map(({ idMeal, strMeal, strMealThumb }, index) => (
          <RecipeCard
            key={ index }
            index={ index }
            image={ strMealThumb }
            name={ strMeal }
            id={ idMeal }
          />
        ))}
      </div>
    </div>
  );
}
