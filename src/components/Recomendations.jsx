import React, { useEffect, useState } from 'react';
import propTypes from 'prop-types';
import { fetchDrinks } from '../services/drinkServices';
import { fetchMeals } from '../services/foodServices';
import RecipeCard from './Cards/RecipeCard';
import useLoading from '../hooks/useLoading';

const INDEX = 7;

export default function Recomendations({ type }) {
  const [recomendation, setRecomendation] = useState([]);
  const { loading } = useLoading();

  useEffect(() => {
    const getMeals = async () => {
      const data = await fetchMeals();
      setRecomendation(data.meals);
    };

    const getDrinks = async () => {
      const data = await fetchDrinks();
      setRecomendation(data.drinks);
    };

    if (type === 'foods') {
      getDrinks();
    } else {
      getMeals();
    }
  }, []);

  return (
    <div className="flex gap-2">
      {
        !loading && recomendation.length
        && recomendation.slice(0, INDEX)
          .map((recipe, index) => (
            <div
              key={ type === 'drinks' ? recipe.strMeal : recipe.strDrink }
              data-testid={ `${index}-recomendation-card` }
            >
              <RecipeCard
                index={ index }
                image={ type === 'drinks' ? recipe.strMealThumb : recipe.strDrinkThumb }
                name={ type === 'drinks' ? recipe.strMeal : recipe.strDrink }
                id={ type === 'drinks' ? recipe.idMeal : recipe.idDrink }
              />
            </div>))
      }
    </div>
  );
}

Recomendations.propTypes = {
  type: propTypes.string.isRequired,
};
