import React from 'react';
import { BiDrink, BiCompass } from 'react-icons/bi';
import { GiKnifeFork } from 'react-icons/gi';
import useFooter from '../hooks/useFooter';

const SELECTED = 'rounded-full h-9 w-9 shadow-sm shadow-black text-white bg-black';
const UNSELECTED = 'rounded-full h-9 w-9 shadow-sm shadow-black text-black bg-white';
function Footer() {
  const { navigate, foodsPathname, drinksPathname, explorePathname } = useFooter();
  return (
    <footer
      className="
    flex
    justify-between
    p-1
    bg-gradient-to-t
    from-orange-400
    to-orange-200
    "
      data-testid="footer"
    >
      <button
        className={
          `${drinksPathname ? SELECTED : UNSELECTED}
          flex
          items-center
          justify-center
          `
        }
        type="button"
        onClick={ () => navigate('/drinks') }
      >
        <BiDrink data-testid="drinks-bottom-btn" className="text-2xl" />
      </button>
      <button
        className={
          `${explorePathname ? SELECTED : UNSELECTED}
          flex
          items-center
          justify-center
        `
        }
        type="button"
        onClick={ () => navigate('/explore') }
      >
        <BiCompass data-testid="explore-bottom-btn" className="text-2xl" />
      </button>
      <button
        className={
          `${foodsPathname ? SELECTED : UNSELECTED}
          flex
          items-center
          justify-center
            `
        }
        type="button"
        onClick={ () => navigate('/foods') }
      >
        <GiKnifeFork data-testid="food-bottom-btn" className="text-2xl" />
      </button>
    </footer>
  );
}

export default Footer;
