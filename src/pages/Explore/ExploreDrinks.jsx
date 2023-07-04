import React from 'react';
import { AiOutlineOrderedList, AiOutlineQuestionCircle } from 'react-icons/ai';
import Header from '../../components/Header';
import useExplore from '../../hooks/useExplore';
import Footer from '../../components/Footer';

const TYPE = 'drinks';

export default function ExploreDrinks() {
  const { surpriseMe, byIngredient } = useExplore(TYPE);
  return (
    <div className="h-screen flex flex-col bg-orange-200">
      <Header />
      <div className="flex flex-col justify-center gap-6 items-center h-full ">
        <button
          type="button"
          className="
          w-72
          h-14
          text-center
          shadow-md
          shadow-black
          bg-orange-400
          rounded
          font-semibold
          flex
          items-center
          justify-evenly
          animate-slide-down
          "
          data-testid="explore-by-ingredient"
          onClick={ () => byIngredient() }
        >
          <AiOutlineOrderedList className="text-3xl" />
          By Ingredient
          <AiOutlineOrderedList className="text-3xl" />
        </button>
        <button
          type="button"
          className="
          w-72
          h-14
          text-center
          shadow-md
          shadow-black
          bg-orange-400
          rounded
          font-semibold
          flex
          items-center
          justify-evenly
          animate-slide-up
          "
          data-testid="explore-surprise"
          onClick={ () => surpriseMe() }
        >
          <AiOutlineQuestionCircle className="text-3xl" />
          Surprise me!
          <AiOutlineQuestionCircle className="text-3xl" />
        </button>
      </div>
      <Footer />
    </div>
  );
}
