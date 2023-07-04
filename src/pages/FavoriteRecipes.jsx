import React from 'react';
import Header from '../components/Header';
import MealAndDrinkFilter from '../components/MealAndDrinkFilter';
import useFavorite from '../hooks/useFavorite';
import FavoriteRecipeCard from '../components/Cards/FavoriteRecipeCard';

export default function FavoriteRecipes() {
  const { removeFavoriteRecipe, setFilter, recipesToRender } = useFavorite();

  return (
    <div className="h-screen flex flex-col">
      <Header />
      <MealAndDrinkFilter filter={ setFilter } />
      <div
        className="
      flex
      flex-col
      md:flex-row
      md:gap-10
      md:justify-center
      md:flex-wrap
      gap-4
      items-center
      h-full
      mt-2
      overflow-y-scroll
      "
      >
        {recipesToRender().map((recipe, index) => (
          <FavoriteRecipeCard
            id={ recipe.id }
            name={ recipe.name }
            image={ recipe.image }
            category={ recipe.category }
            nationality={ recipe.nationality }
            alcoholic={ recipe.alcoholicOrNot }
            type={ recipe.type }
            index={ index }
            key={ recipe.id }
            remove={ removeFavoriteRecipe }
          />
        ))}
      </div>
    </div>
  );
}
