import React, { useContext, useEffect } from 'react';
import { AppContext } from '../context/Provider';
import {
  fetchMeals, fetchMealCategories, fetchMealsByCategory,
} from '../services/foodServices';
import useLoading from '../hooks/useLoading';
import { fetchDrinkCategories, fetchDrinks, fetchDrinksByCategory } from '../services/drinkServices';

const INDEX = 5;

export default function CategoryFilters() {
  const { categories, setCategories, setMeals, setDrinks } = useContext(AppContext);
  const { loading } = useLoading();
  const isFoodsUrl = window.location.href.includes('/foods');
  useEffect(() => {
    const getMealCategories = async () => {
      const { meals } = await fetchMealCategories();
      setCategories(meals);
    };

    const getDrinkCategories = async () => {
      const { drinks } = await fetchDrinkCategories();

      setCategories(drinks);
    };

    if (isFoodsUrl) {
      getMealCategories();
    } else {
      getDrinkCategories();
    }
  }, []);

  const allCategories = async () => {
    if (isFoodsUrl) {
      const { meals } = await fetchMeals();
      setMeals(meals);
    } else {
      const { drinks } = await fetchDrinks();
      setDrinks(drinks);
    }
  };

  const filterByCategory = async ({ target: { name } }) => {
    if (isFoodsUrl) {
      const { meals } = await fetchMealsByCategory(name);
      setMeals(meals);
    } else {
      const { drinks } = await fetchDrinksByCategory(name);
      setDrinks(drinks);
    }
  };

  return !loading && (
    <div className="overflow-x-scroll px-1">
      <div className="flex min-w-min gap-2 my-2">
        <button
          type="button"
          className="bg-orange-400 rounded shadow-md shadow-black p-1 w-20 text-sm"
          data-testid="All-category-filter"
          onClick={ allCategories }
        >
          All
        </button>
        {categories.slice(0, INDEX).map(({ strCategory }, index) => (
          <button
            data-testid={ `${strCategory}-category-filter` }
            type="button"
            key={ index }
            onClick={ filterByCategory }
            name={ strCategory }
            className="bg-orange-400 rounded shadow-md shadow-black p-1 w-24 text-xs"
          >
            {strCategory}
          </button>
        ))}
      </div>
    </div>
  );
}
