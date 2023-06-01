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

const INDEX = 12;
const TYPE = 'drinks';

export default function Drink() {
  const { drinks } = useContext(AppContext);
  useFoodOrDrink(TYPE);
  const { loading } = useLoading();
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <SearchBar type={ TYPE } />
      <div className="h-16 w-full px-2 mt-1">
        <CategoryFilters type={ TYPE } />
      </div>
      {loading ? <Loading /> : (
        <div className="flex flex-col items-center h-full gap-2 mt-2 overflow-y-scroll">
          {drinks.slice(0, INDEX).map(({ strDrinkThumb, strDrink, idDrink }, index) => (
            <RecipeCard
              key={ index }
              index={ index }
              image={ strDrinkThumb }
              name={ strDrink }
              id={ idDrink }
            />
          ))}
        </div>
      )}
      <Footer />
    </div>
  );
}
