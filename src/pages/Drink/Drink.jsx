import React, { useContext, useEffect } from 'react';
import propTypes from 'prop-types';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import { AppContext } from '../../context/Provider';
import RecipeCard from '../../components/Cards/RecipeCard';
import SearchBar from '../../components/SearchBar';
import Loading from '../../components/Loading';
import CategoryFilters from '../../components/CategoryFilters';
import useLoading from '../../hooks/useLoading';
import { fetchDrinks } from '../../services/drinkServices';

export default function Drink() {
  const { drinks, setDrinks } = useContext(AppContext);
  const { loading } = useLoading();

  useEffect(() => {
    const getDrinks = async () => {
      const { drinks: cocktails } = await fetchDrinks();
      setDrinks(cocktails);
    };
    if (drinks.length === 0) {
      getDrinks();
    }
  }, []);

  return (
    <div className="flex flex-col h-screen">
      <Header />
      <SearchBar type="foods" />
      <div className="h-16 w-full px-2 mt-1">
        <CategoryFilters />
      </div>
      {loading ? <Loading /> : (
        <div className="flex flex-col items-center gap-2 mt-2 overflow-y-scroll">
          {
            drinks.map(({ strDrinkThumb, strDrink, idDrink }, index) => (
              <RecipeCard
                key={ index }
                index={ index }
                image={ strDrinkThumb }
                name={ strDrink }
                id={ idDrink }
              />
            ))
          }
        </div>
      )}
      <Footer />
    </div>
  );
}

Drink.propTypes = {
  objectList: propTypes.object,
}.isRequired;
