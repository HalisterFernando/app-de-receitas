import React, { useEffect, useState } from 'react';
import Header from '../../components/Header';
import MealNationaties from '../../components/MealNationaties';
import { fetchMealByNationality, fetchMeals } from '../../services/foodServices';
import RecipeCard from '../../components/Cards/RecipeCard';

const INDEX = 12;

export default function ExploreFoodNationality() {
  const [nationality, setNationality] = useState(null);
  const [mealsByNationality, setMealsByNationality] = useState([]);

  const handleNationality = ({ target: { value } }) => {
    setNationality(value);
  };

  useEffect(() => {
    const getFirstTwelveRecipes = async () => {
      const { meals } = await fetchMeals();
      setMealsByNationality(meals.slice(0, INDEX));
    };
    getFirstTwelveRecipes();
  }, []);

  useEffect(() => {
    const getMealsByNationality = async () => {
      const { meals } = await fetchMealByNationality(nationality);
      setMealsByNationality(meals);
    };

    const getMeals = async () => {
      const { meals } = await fetchMeals();
      setMealsByNationality(meals);
    };

    if (nationality === 'All') {
      getMeals();
    } else if (nationality) {
      getMealsByNationality();
    }
  }, [nationality]);

  return (
    <div className="h-screen flex flex-col">
      <Header />
      <MealNationaties handleNationality={ handleNationality } />
      <div
        className="
      flex
      flex-wrap
      justify-center
      gap-2
      items-center
      h-full
      overflow-y-scroll
      py-2
      "
      >
        {mealsByNationality.map(({ idMeal, strMeal, strMealThumb }, index) => (
          <RecipeCard
            key={ index }
            index={ index }
            image={ strMealThumb }
            name={ strMeal }
            id={ idMeal }
          />
        ))}
      </div>
    </div>
  );
}
