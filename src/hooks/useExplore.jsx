import { useNavigate } from 'react-router-dom';
import { useContext, useEffect } from 'react';
import { fetchMealIngredients, fetchRandomMeal } from '../services/foodServices';
import { AppContext } from '../context/Provider';
import { setItem, getItem } from '../services/localStorageServices';

const INDEX = 12;

export default function useExplore(type) {
  const navigate = useNavigate();
  const { setAllIngredients } = useContext(AppContext);

  useEffect(() => {
    const allIngredients = getItem('allIngredients');
    if (allIngredients) {
      setAllIngredients(allIngredients);
    }
  }, []);

  const byIngredient = async () => {
    const { meals } = await fetchMealIngredients();
    setAllIngredients(meals.slice(0, INDEX));
    setItem('allIngredients', meals.slice(0, INDEX));
    navigate('/explore/foods/ingredients');
  };

  const surpriseMe = async () => {
    if (type === 'foods') {
      const { meals: [{ idMeal }] } = await fetchRandomMeal();
      navigate(`/foods/${idMeal}`);
    } else {
      const { drinks: [{ idDrink }] } = await fetchRandomDrink();
      navigate(`/drinks/${idDrink}`);
    }
  };

  return { surpriseMe, byIngredient };
}
