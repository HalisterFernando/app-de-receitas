import { useContext, useEffect } from 'react';
import { AppContext } from '../context/Provider';
import { fetchMeals } from '../services/foodServices';
import { fetchDrinks } from '../services/drinkServices';

export default function useFoodOrDrink(type) {
  const { meals, setMeals, drinks, setDrinks } = useContext(AppContext);

  const isTypeFoods = type === 'foods';

  useEffect(() => {
    const getMeals = async () => {
      const data = await fetchMeals();
      setMeals(data.meals);
    };

    const getDrinks = async () => {
      const data = await fetchDrinks();
      setDrinks(data.drinks);
    };

    if (meals.length === 0 && isTypeFoods) {
      getMeals();
    } else if (drinks.length === 0 && !isTypeFoods) {
      getDrinks();
    }
  }, []);
}
