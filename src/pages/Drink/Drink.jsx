import React, { useContext } from 'react';
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

const INDEX = 12;
const TYPE = 'drinks';

export default function Drink() {
  const { drinks } = useContext(AppContext);
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
      {loading ? <Loading /> : (
        <div
          className="
        flex
        flex-col
        md:flex-row
        md:flex-wrap
        md:justify-center
        md:gap-10
        items-center
        h-full
        gap-2
        mt-2
        overflow-y-scroll
        animate-slide-up
        "
        >
          {drinks.slice(0, INDEX).map(({ strDrinkThumb, strDrink, idDrink }, index) => (
            <RecipeCard
              key={ index }
              index={ index }
              image={ strDrinkThumb }
              name={ strDrink }
              id={ idDrink }
              animate={ animate }
            />
          ))}
        </div>
      )}
      <Footer />
    </div>
  );
}
