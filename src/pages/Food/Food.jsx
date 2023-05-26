import React, { useContext, useEffect } from 'react';
import propTypes from 'prop-types';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import { AppContext } from '../../context/Provider';
import { fetchMeals } from '../../services/foodServices';
import RecipeCard from '../../components/Cards/RecipeCard';
import SearchBar from '../../components/SearchBar';
import Loading from '../../components/Loading';
import CategoryFilters from '../../components/CategoryFilters';
import useLoading from '../../hooks/useLoading';

export default function Food() {
  const { meals, setMeals } = useContext(AppContext);
  const { loading } = useLoading();

  useEffect(() => {
    const getMeals = async () => {
      const data = await fetchMeals();
      setMeals(data.meals);
    };
    if (meals.length === 0) {
      getMeals();
    }
  }, []);

  return (
    <div className="flex flex-col h-screen">
      <Header />
      <SearchBar type="foods" />
      <div className="h-16 w-full px-2 mt-1">
        <CategoryFilters />
      </div>
      {
        loading ? <Loading /> : (
          <div className="flex flex-col items-center gap-2 mt-2 overflow-y-scroll">
            {
              meals.map(({ strMealThumb, strMeal, idMeal }, index) => (
                <RecipeCard
                  key={ index }
                  index={ index }
                  image={ strMealThumb }
                  name={ strMeal }
                  id={ idMeal }
                />
              ))
            }
          </div>
        )
      }
      <Footer />
    </div>
  );
}

Food.propTypes = {
  objectList: propTypes.object,
}.isRequired;
