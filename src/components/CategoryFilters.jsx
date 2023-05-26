import React, { useContext, useEffect } from 'react';
import { AppContext } from '../context/Provider';
import {
  fetchMeals, fetchMealCategories, fetchMealsByCategory,
} from '../services/foodServices';
import useLoading from '../hooks/useLoading';

const INDEX = 5;

export default function CategoryFilters() {
  const { categories, setCategories, setMeals } = useContext(AppContext);
  const { loading } = useLoading();

  useEffect(() => {
    const getCategories = async () => {
      const data = await fetchMealCategories();
      setCategories(data.meals);
    };
    getCategories();
  }, []);

  const allCategories = async () => {
    const data = await fetchMeals();
    setMeals(data.meals);
  };

  const filterByCategory = async ({ target: { name } }) => {
    const data = await fetchMealsByCategory(name);
    setMeals(data.meals);
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
            className="bg-orange-400 rounded shadow-md shadow-black p-1 w-20 text-sm"
          >
            {strCategory}
          </button>
        ))}
      </div>
    </div>
  );
}
