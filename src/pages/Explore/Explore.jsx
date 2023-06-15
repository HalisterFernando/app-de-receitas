import React from 'react';
import { useNavigate } from 'react-router-dom';
import { GiForkKnifeSpoon } from 'react-icons/gi';
import { FaGlassCheers } from 'react-icons/fa';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function Explore() {
  const navigate = useNavigate();
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
          animate-slide-down
          font-semibold
          flex
          items-center
          justify-evenly
          "
          data-testid="explore-foods"
          onClick={ () => navigate('/explore/foods') }
        >
          <GiForkKnifeSpoon className="text-3xl" />
          Explore Foods
          <GiForkKnifeSpoon className="text-3xl" />
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
          animate-slide-up
          font-semibold
          flex
          items-center
          justify-evenly
          "
          data-testid="explore-drinks"
          onClick={ () => navigate('/explore/drinks') }
        >
          <FaGlassCheers className="text-3xl" />
          Explore Drinks
          <FaGlassCheers className="text-3xl" />
        </button>
      </div>
      <Footer />
    </div>
  );
}
