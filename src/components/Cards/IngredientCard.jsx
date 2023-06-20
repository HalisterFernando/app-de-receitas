import React, { useContext } from 'react';
import propTypes from 'prop-types';
import { Link, useNavigate } from 'react-router-dom';
import { AppContext } from '../../context/Provider';
import { fetchMealByIngredient } from '../../services/foodServices';
import { fetchDrinkByIngredient } from '../../services/drinkServices';

export default function IngredientCard({ name, image, index }) {
  const { setMeals, setDrinks } = useContext(AppContext);
  const isFoodsUrl = window.location.href.includes('foods');
  const navigate = useNavigate();

  const navigateTo = async () => {
    if (isFoodsUrl) {
      const { meals } = await fetchMealByIngredient(name);
      setMeals(meals);
      navigate('/foods');
    } else {
      const { drinks } = await fetchDrinkByIngredient(name);
      setDrinks(drinks);
      navigate('/drinks');
    }
  };

  return (
    <Link to="/foods" onClick={ navigateTo }>
      <div
        className="
      flex
      flex-col
      justify-center
      items-center
      w-36
      shadow-md
      shadow-black
      rounded
      bg-white
      p-2
      "
        data-testid={ `${index}-ingredient-card` }
      >
        <div>
          <img src={ image } alt={ name } data-testid={ `${index}-card-img` } />
        </div>
        <div>
          <h2
            data-testid={ `${index}-card-name` }
            className="text-xs"
          >
            {name}
          </h2>
        </div>
      </div>
    </Link>
  );
}

IngredientCard.propTypes = {
  name: propTypes.string.isRequired,
  image: propTypes.string.isRequired,
  index: propTypes.number.isRequired,
};
