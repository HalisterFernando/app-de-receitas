import React, { useContext } from 'react';
import Header from '../../components/Header';
import { AppContext } from '../../context/Provider';
import IngredientCard from '../../components/Cards/IngredientCard';
import useExplore from '../../hooks/useExplore';

const IMAGE_URL = 'https://www.thecocktaildb.com/images/ingredients/';

export default function ExploreDrinkIngredients() {
  const { allIngredients } = useContext(AppContext);
  useExplore();

  return (
    <div className="h-screen flex flex-col">
      <Header />
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
        {allIngredients.map(({ strIngredient1 }, index) => (
          <IngredientCard
            name={ strIngredient1 }
            image={ `${IMAGE_URL}${strIngredient1}-Medium.png` }
            index={ index }
            key={ strIngredient1 }
          />
        ))}
      </div>
    </div>
  );
}
