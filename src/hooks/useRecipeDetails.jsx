import { useContext, useEffect, useState } from 'react';
import { fetchMealById } from '../services/foodServices';
import { AppContext } from '../context/Provider';
import { fetchDrinkById } from '../services/drinkServices';

export default function useRecipeDetails(id, type) {
  const { setCurrentRecipe } = useContext(AppContext);
  const [recipe, setRecipe] = useState({});
  const [ingredients, setIngredients] = useState([]);

  useEffect(() => {
    setCurrentRecipe({ recipe, ingredients });
  }, [recipe, ingredients, setCurrentRecipe]);

  useEffect(() => {
    const getMealById = async () => {
      const { meals: [meal] } = await fetchMealById(id);
      setRecipe(meal);
    };

    const getDrinkById = async () => {
      const { drinks: [drink] } = await fetchDrinkById(id);
      setRecipe(drink);
    };

    if (type === 'foods') {
      getMealById();
    } else {
      getDrinkById();
    }
  }, []);

  const getIngredients = () => {
    const checkValue = (value) => value && value.trim().length > 0;

    const ingredientsFromRecipe = Object
      .entries(recipe)
      .filter(([key, value]) => (key.includes('strIngredient') && checkValue(value)))
      .map((value) => value[1]);

    const measurementsFromRecipe = Object
      .entries(recipe)
      .filter(([key, value]) => (key.includes('strMeasure') && checkValue(value)))
      .map((value) => value[1]);

    const ingredientsAndMeasurements = ingredientsFromRecipe
      .map((ingredient, index) => `${ingredient} ${measurementsFromRecipe[index]
        ? `- ${measurementsFromRecipe[index]}` : ''}`);

    return setIngredients(ingredientsAndMeasurements);
  };

  useEffect(() => {
    getIngredients();
  }, [recipe]);
}
