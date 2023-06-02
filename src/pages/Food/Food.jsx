import React, { useContext } from 'react';
import propTypes from 'prop-types';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import { AppContext } from '../../context/Provider';
import RecipeCard from '../../components/Cards/RecipeCard';
import SearchBar from '../../components/SearchBar';
import Loading from '../../components/Loading';
import CategoryFilters from '../../components/CategoryFilters';
import useFoodOrDrink from '../../hooks/useFoodOrDrink';
import useLoading from '../../hooks/useLoading';
import useCategoryFilters from '../../hooks/useCategoryFilters';

const TYPE = 'foods';
const INDEX = 12;

export default function Food() {
  const { meals } = useContext(AppContext);
  useFoodOrDrink(TYPE);
  const { loading } = useLoading();
  const { allCategories, filterByCategory,
    animate, categoryName } = useCategoryFilters(TYPE);

  return (
    <div className="flex flex-col h-screen bg-gradient-to-t from-orange-200">
      <Header />
      <SearchBar type={ TYPE } />
      <div className="h-16 w-full px-2 mt-1">
        <CategoryFilters
          type={ TYPE }
          allCategories={ allCategories }
          filterByCategory={ filterByCategory }
          categoryName={ categoryName }
        />
      </div>
      {loading ? (<Loading />) : (
        <div
          className="flex
        flex-col
        items-center
        gap-2
        mt-2
        h-full
        overflow-y-scroll
        animate-slide-up
        "
        >
          {meals.slice(0, INDEX).map(({ strMealThumb, strMeal, idMeal }, index) => (
            <RecipeCard
              key={ index }
              index={ index }
              image={ strMealThumb }
              name={ strMeal }
              id={ idMeal }
              animate={ animate }
            />
          ))}
        </div>
      )}
      <Footer />
    </div>
  );
}

Food.propTypes = {
  objectList: propTypes.object,
}.isRequired;
