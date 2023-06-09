import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../context/Provider';
import { getItem, setItem } from '../services/localStorageServices';

export default function useFinishedRecipes(recipeId, type) {
  const navigate = useNavigate();
  const { finishedRecipes, setFinishedRecipes,
    currentRecipe: { ingredients },
    inProgressRecipes: { meals } } = useContext(AppContext);
  const [isRecipeFinished, setIsRecipeFinished] = useState(false);

  useEffect(() => {
    const doneRecipes = getItem('doneRecipes');
    if (doneRecipes) {
      setFinishedRecipes(doneRecipes);
    }
  }, []);

  useEffect(() => {
    setIsRecipeFinished(finishedRecipes.some((recipe) => recipe.id === recipeId));
  }, [finishedRecipes]);

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

  const isReadyToFinish = () => {
    console.log(ingredients?.length === meals[recipeId]?.length);
    return ingredients?.length === meals[recipeId]?.length;
  };

  return { finishRecipe, isRecipeFinished, isReadyToFinish };
}
