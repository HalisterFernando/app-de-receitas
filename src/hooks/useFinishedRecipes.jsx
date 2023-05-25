import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../context/Provider';
import { getItem, setItem } from '../services/localStorageServices';

export default function useFinishedRecipes(type) {
  const { finishedRecipes, setFinishedRecipes } = useContext(AppContext);
  const navigate = useNavigate();

  useEffect(() => {
    const doneRecipes = getItem('doneRecipes');
    if (doneRecipes) {
      setFinishedRecipes(doneRecipes);
    }
  }, []);

  const recipeToFinish = (recipe) => {
    if (type === 'foods') {
      const { idMeal: id, strArea: nationality, strCategory: category,
        strMeal: name, strMealThumb: image, strTags: tags } = recipe;

      return {
        id,
        type: 'meal',
        nationality,
        category,
        tags,
        alcoholicOrNot: '',
        name,
        image,
      };
    }
    const { idDrink: id, strArea: nationality, strCategory: category,
      strDrink: name, strAlcoholic: alcoholicOrNot,
      strDrinkThumb: image, strTags: tags } = recipe;

    return {
      id,
      type: 'cocktail',
      nationality,
      category,
      tags,
      alcoholicOrNot,
      name,
      image,
    };
  };

  const finishRecipe = (recipe) => {
    const finishedRecipe = recipeToFinish(recipe);
    const updatedValues = [...finishedRecipes, finishedRecipe];
    setFinishedRecipes(updatedValues);
    setItem('doneRecipes', updatedValues);
    navigate('/done-recipes');
  };

  return { finishRecipe };
}
