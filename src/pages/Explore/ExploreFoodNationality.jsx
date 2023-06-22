import React, { useContext } from 'react';
import Header from '../../components/Header';
import NationalityOptions from '../../components/NationalityOptions';
import RecipeCard from '../../components/Cards/RecipeCard';
import { AppContext } from '../../context/Provider';
import useCategoryFilters from '../../hooks/useCategoryFilters';

export default function ExploreFoodNationality() {
  const { meals } = useContext(AppContext);
  const { animateCard } = useCategoryFilters();

  return (
    <div className="h-screen flex flex-col">
      <Header />
      <NationalityOptions />
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
            animate={ animateCard }
          />
        ))}
      </div>
    </div>
  );
}
