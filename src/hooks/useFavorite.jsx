import { useEffect, useContext } from 'react';
import { AppContext } from '../context/Provider';
import { getItem, setItem } from '../services/localStorageServices';

export default function useFavorite(type) {
  const { favoriteRecipes, setFavoriteRecipes } = useContext(AppContext);

  useEffect(() => {
    const favorites = getItem('favoriteRecipes');
    setFavoriteRecipes(favorites || []);
  }, []);

  const recipeToFavorite = (recipe) => {
    if (type === 'foods') {
      const { idMeal: id, strArea: nationality, strCategory: category,
        strMeal: name, strMealThumb: image } = recipe;

      return {
        id,
        type: 'meal',
        nationality,
        category,
        alcoholicOrNot: 'Non alcoholic',
        name,
        image,
      };
    }
    const { idDrink: id, strArea: nationality, strCategory: category,
      strDrink: name, strAlcoholic: alcoholicOrNot,
      strDrinkThumb: image } = recipe;

    return {
      id,
      type: 'cocktail',
      nationality,
      category,
      alcoholicOrNot,
      name,
      image,
    };
  };

  const addFavoriteRecipe = (recipe) => {
    const favorite = recipeToFavorite(recipe);
    const updatedFavorites = [...favoriteRecipes, favorite];
    setFavoriteRecipes(updatedFavorites);
    setItem('favoriteRecipes', updatedFavorites);
  };

  const removeFavoriteRecipe = (recipe) => {
    const updatedFavorites = [...favoriteRecipes]
      .filter((favorite) => (
        type === 'foods'
          ? favorite.name !== recipe.strMeal
          : favorite.name !== recipe.strDrink));
    setFavoriteRecipes(updatedFavorites);
    setItem('favoriteRecipes', updatedFavorites);
  };

  return { addFavoriteRecipe, removeFavoriteRecipe };
}
