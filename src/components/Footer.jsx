/* eslint-disable sonarjs/no-duplicate-string */
import React from 'react';
import { BiDrink, BiCompass } from 'react-icons/bi';
import { GiKnifeFork } from 'react-icons/gi';
import useFooter from '../hooks/useFooter';

function Footer() {
  const { navigate, foodsPathname, drinksPathname, explorePathname } = useFooter();
  return (
    <footer
      className="
    flex
    justify-between
    lg:justify-center
    lg:gap-60
    p-1
    px-2
    bg-gradient-to-t
    from-orange-400
    to-orange-200
    "
      data-testid="footer"
    >
      <button
        className={
          `${drinksPathname ? 'bg-black' : 'bg-white'}
          flex
          items-center
          justify-center
          rounded-full
          h-9
          w-9
          shadow-sm
          shadow-black
          `
        }
        type="button"
        onClick={ () => navigate('/drinks') }
      >
        <BiDrink
          data-testid="drinks-bottom-btn"
          className={ `text-2xl ${drinksPathname ? 'text-white' : 'text-black'}` }
        />
      </button>
      <button
        className={
          `${explorePathname ? 'bg-black' : 'bg-white'}
          flex
          items-center
          justify-center
          rounded-full
          h-9
          w-9
          shadow-sm
          shadow-black
          `
        }
        type="button"
        onClick={ () => navigate('/explore') }
      >
        <BiCompass
          data-testid="explore-bottom-btn"
          className={ `text-2xl ${explorePathname ? 'text-white' : 'text-black'}` }
        />
      </button>
      <button
        className={
          `${foodsPathname ? 'bg-black' : 'bg-white'}
          flex
          items-center
          justify-center
          rounded-full
          h-9
          w-9
          shadow-sm
          shadow-black
          `
        }
        type="button"
        onClick={ () => navigate('/foods') }
      >
        <GiKnifeFork
          data-testid="food-bottom-btn"
          className={ `text-2xl ${foodsPathname ? 'text-white' : 'text-black'}` }
        />
      </button>
    </footer>
  );
}

export default Footer;
