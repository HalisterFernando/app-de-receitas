import React from 'react';
import { useNavigate } from 'react-router-dom';
import Drink from '../images/drinkIcon.svg';
import Explore from '../images/exploreIcon.svg';
import Food from '../images/mealIcon.svg';

function Footer() {
  const navigate = useNavigate();

  return (
    <footer className="flex justify-between p-2" data-testid="footer">
      <button type="button" onClick={ () => navigate('/drinks') }>
        <img
          src={ Drink }
          alt="Drinks"
          data-testid="drinks-bottom-btn"
        />
      </button>
      <button type="button" onClick={ () => navigate('/explore') }>
        <img
          src={ Explore }
          alt="Explore"
          data-testid="explore-bottom-btn"
        />
      </button>
      <button type="button" onClick={ () => navigate('/foods') }>
        <img
          src={ Food }
          alt="Food"
          data-testid="food-bottom-btn"
        />
      </button>
    </footer>
  );
}

export default Footer;
