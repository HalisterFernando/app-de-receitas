import { useContext, useState, useEffect } from 'react';
import { AppContext } from '../context/Provider';

import { fetchMealCategories, fetchMeals,
  fetchMealsByCategory } from '../services/foodServices';
import { fetchDrinkCategories, fetchDrinks,
  fetchDrinksByCategory } from '../services/drinkServices';

const ONE_SECOND = 1000;

export default function useCategoryFilters(type) {
  const { setCategories, setMeals, setDrinks } = useContext(AppContext);
  const [animate, setAnimate] = useState(false);
  const [categoryName, setCategoryName] = useState('All');

  const isTypeFoods = type === 'foods';

  const animateCard = () => {
    setAnimate(true);
    setTimeout(() => {
      setAnimate(false);
    }, ONE_SECOND);
  };

  useEffect(() => {
    const getMealCategories = async () => {
      const { meals } = await fetchMealCategories();
      setCategories(meals);
    };

    const getDrinkCategories = async () => {
      const { drinks } = await fetchDrinkCategories();
      setCategories(drinks);
    };

    if (isTypeFoods) {
      getMealCategories();
    } else {
      getDrinkCategories();
    }
  }, []);

  const allCategories = async ({ target: { name } }) => {
    setCategoryName(name);
    if (isTypeFoods) {
      const { meals } = await fetchMeals();
      setMeals(meals);
    } else {
      const { drinks } = await fetchDrinks();
      setDrinks(drinks);
    }
    animateCard();
  };

  const filterByCategory = async ({ target: { name } }) => {
    setCategoryName(name);
    if (isTypeFoods) {
      const { meals } = await fetchMealsByCategory(name);
      setMeals(meals);
    } else {
      const { drinks } = await fetchDrinksByCategory(name);
      setDrinks(drinks);
    }
    animateCard();
  };

  return { allCategories, filterByCategory, animate, categoryName, animateCard };
}
