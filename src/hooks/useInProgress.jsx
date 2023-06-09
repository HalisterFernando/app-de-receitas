import { useContext, useEffect } from 'react';
import { AppContext } from '../context/Provider';
import { getItem, setItem } from '../services/localStorageServices';

export default function useInProgress(id, type) {
  const { inProgressRecipes, setInProgressRecipes } = useContext(AppContext);

  useEffect(() => {
    const inProgress = getItem('inProgressRecipes');
    if (inProgress) {
      setInProgressRecipes(inProgress);
    }
  }, []);

  const addIngredientToMeal = (value) => {
    const { meals } = inProgressRecipes;
    if (!(id in meals)) {
      setInProgressRecipes(inProgressRecipes.meals[id] = []);
    }
    const updatedValues = { ...inProgressRecipes };
    updatedValues.meals[id] = [...meals[id], value];
    setInProgressRecipes(updatedValues);
    setItem('inProgressRecipes', updatedValues);
  };

  const removeIngredientFromMeal = (value) => {
    const updatedValues = { ...inProgressRecipes };
    updatedValues.meals[id] = updatedValues.meals[id]
      .filter((ingredient) => ingredient !== value);
    setInProgressRecipes(updatedValues);
    setItem('inProgressRecipes', updatedValues);
  };

  const addIngredientToCocktail = (value) => {
    const { cocktails } = inProgressRecipes;
    if (!(id in cocktails)) {
      setInProgressRecipes(inProgressRecipes.cocktails[id] = []);
    }
    const updatedValues = { ...inProgressRecipes };
    updatedValues.cocktails[id] = [...cocktails[id], value];
    setInProgressRecipes(updatedValues);
    setItem('inProgressRecipes', updatedValues);
  };

  const removeIngredientFromCocktail = (value) => {
    const updatedValues = { ...inProgressRecipes };
    updatedValues.cocktails[id] = updatedValues.cocktails[id]
      .filter((ingredient) => ingredient !== value);
    setInProgressRecipes(updatedValues);
    setItem('inProgressRecipes', updatedValues);
  };

  const addIngredient = (value) => {
    if (type === 'foods') {
      addIngredientToMeal(value);
    } else {
      addIngredientToCocktail(value);
    }
  };

  const removeIngredient = (value) => {
    if (type === 'foods') {
      removeIngredientFromMeal(value);
    } else {
      removeIngredientFromCocktail(value);
    }
  };

  const handleUsedIngredients = ({ target: { checked, value } }) => {
    if (checked) {
      addIngredient(value);
    } else {
      removeIngredient(value);
    }
  };

  return { handleUsedIngredients };
}
