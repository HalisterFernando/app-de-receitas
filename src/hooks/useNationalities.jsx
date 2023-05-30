import { useContext, useEffect, useState } from 'react';
import { AppContext } from '../context/Provider';
import { fetchMealByNationality,
  fetchMealNationalities, fetchMeals } from '../services/foodServices';

const INDEX = 12;

export default function useNationalities() {
  const [nationality, setNationality] = useState(null);
  const { setMeals, setNationalities } = useContext(AppContext);

  const handleNationality = ({ target: { value } }) => {
    setNationality(value);
  };

  useEffect(() => {
    const getNationalities = async () => {
      const { meals: nationalities } = await fetchMealNationalities();
      setNationalities(nationalities);
    };
    getNationalities();
  }, []);

  useEffect(() => {
    const getMeals = async () => {
      const { meals } = await fetchMeals();
      setMeals(meals.slice(0, INDEX));
    };
    getMeals();
  }, []);

  useEffect(() => {
    const getMealsByNationality = async () => {
      const { meals } = await fetchMealByNationality(nationality);
      setMeals(meals);
    };

    const getMeals = async () => {
      const { meals } = await fetchMeals();
      setMeals(meals);
    };

    if (nationality === 'All') {
      getMeals();
    } else if (nationality) {
      getMealsByNationality();
    }
  }, [nationality]);

  return { handleNationality };
}
