import React, { useContext, useState } from 'react';
import Header from '../components/Header';
import FinishedRecipeCard from '../components/FinishedRecipeCard';
import { AppContext } from '../context/Provider';
import DoneRecipesFilter from '../components/DoneRecipesFilter';

export default function DoneRecipes() {
  const { finishedRecipes } = useContext(AppContext);
  const [filter, setFilter] = useState('All');

  const filtersForFinishedRecipes = {
    Food: (arr) => arr.filter(({ type }) => type === 'meal'),
    Drinks: (arr) => arr.filter(({ type }) => type === 'cocktail'),
    All: (arr) => arr,
  };

  const recipesToRender = () => {
    const recipes = [...finishedRecipes];

    const filteredValues = filtersForFinishedRecipes[filter](recipes);

    return filteredValues;
  };

  return (
    <div className="h-screen flex flex-col">
      <Header />
      <DoneRecipesFilter filter={ setFilter } />
      <div className="flex flex-col gap-4 items-center mt-2 overflow-y-scroll">
        {recipesToRender().map((recipe, index) => (
          <FinishedRecipeCard
            id={ recipe.id }
            name={ recipe.name }
            image={ recipe.image }
            category={ recipe.category }
            nationality={ recipe.nationality }
            tags={ recipe.tags.split(',') }
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
