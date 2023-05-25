import { useEffect, useContext } from 'react';
import { AppContext } from '../context/Provider';
import { getItem, setItem } from '../services/localStorageServices';

export default function useFavorite() {
  const { favoriteRecipes, setFavoriteRecipes } = useContext(AppContext);

  useEffect(() => {
    const favorites = getItem('favoriteRecipes');
    if (favorites) {
      setFavoriteRecipes(favorites);
    }
  }, []);

  const recipeToFavorite = (recipe, type) => {
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
    const updatedFavorites = [...favoriteRecipes, recipe];
    setFavoriteRecipes(updatedFavorites);
    setItem('favoriteRecipes', updatedFavorites);
  };

  const removeFavoriteRecipe = (recipe) => {
    const updatedFavorites = [...favoriteRecipes]
      .filter((favorite) => favorite.name !== recipe.name);
    setFavoriteRecipes(updatedFavorites);
    setItem('favoriteRecipes', updatedFavorites);
  };

  return { addFavoriteRecipe, removeFavoriteRecipe, recipeToFavorite };
}
