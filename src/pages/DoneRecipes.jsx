import React from 'react';
import Header from '../components/Header';
import FinishedRecipeCard from '../components/Cards/FinishedRecipeCard';
import MealAndDrinkFilter from '../components/MealAndDrinkFilter';
import useDoneRecipes from '../hooks/useDoneRecipes';

export default function DoneRecipes() {
  const { recipesToRender, setFilter } = useDoneRecipes();

  return (
    <div className="h-screen flex flex-col">
      <Header />
      <MealAndDrinkFilter filter={ setFilter } />
      <div className="flex flex-col gap-4 items-center h-full mt-2 overflow-y-scroll">
        {recipesToRender().map((recipe, index) => (
          <FinishedRecipeCard
            id={ recipe.id }
            name={ recipe.name }
            image={ recipe.image }
            category={ recipe.category }
            nationality={ recipe.nationality }
            tags={ recipe.tags && recipe.tags.split(',') }
            alcoholic={ recipe.alcoholicOrNot }
            type={ recipe.type }
            index={ index }
            key={ recipe.id }
          />
        ))}
      </div>
    </div>
  );
}
