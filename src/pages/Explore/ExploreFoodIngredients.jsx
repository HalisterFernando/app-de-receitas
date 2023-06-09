import React, { useContext } from 'react';
import Header from '../../components/Header';
import { AppContext } from '../../context/Provider';
import IngredientCard from '../../components/Cards/IngredientCard';
import useExplore from '../../hooks/useExplore';
import Footer from '../../components/Footer';
import useCategoryFilters from '../../hooks/useCategoryFilters';

const IMAGE_URL = 'https://www.themealdb.com/images/ingredients/';

export default function ExploreFoodIngredients() {
  const { allIngredients } = useContext(AppContext);
  useExplore();
  const { animateCard } = useCategoryFilters();

  return (
    <div className="h-screen flex flex-col">
      <Header />
      <div
        className="
        flex
        flex-wrap
        justify-center
        gap-2
        md:gap-10
        items-center
        h-full
        overflow-y-scroll
        py-2
        bg-orange-200
        "
      >
        {allIngredients.map(({ idIngredient, strIngredient }, index) => (
          <IngredientCard
            name={ strIngredient }
            image={ `${IMAGE_URL}${strIngredient}.png` }
            index={ index }
            animate={ animateCard }
            key={ idIngredient }
          />
        ))}
      </div>
      <Footer />
    </div>
  );
}
