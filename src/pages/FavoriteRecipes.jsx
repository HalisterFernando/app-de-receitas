import React, { useContext, useState } from 'react';
import Header from '../components/Header';
import MealAndDrinkFilter from '../components/MealAndDrinkFilter';
import { AppContext } from '../context/Provider';
import useFavorite from '../hooks/useFavorite';
import FavoriteRecipeCard from '../components/Cards/FavoriteRecipeCard';

export default function FavoriteRecipes() {
  const { favoriteRecipes } = useContext(AppContext);
  const { removeFavoriteRecipe } = useFavorite();
  const [filter, setFilter] = useState('All');

  const filtersForFavoriteRecipes = {
    Food: (arr) => arr.filter(({ type }) => type === 'meal'),
    Drinks: (arr) => arr.filter(({ type }) => type === 'cocktail'),
    All: (arr) => arr,
  };

  const recipesToRender = () => {
    const recipes = [...favoriteRecipes];
    const filteredValues = filtersForFavoriteRecipes[filter](recipes);
    return filteredValues;
  };

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
