import React from 'react';
import propTypes from 'prop-types';

export default function MealAndDrinkFilter({ filter }) {
  return (
    <div className="flex justify-between md:justify-evenly p-2">
      <button
        className="bg-orange-400 rounded-full shadow-md shadow-black p-1 w-20 text-sm"
        data-testid="filter-by-all-btn"
        name="All"
        onClick={ (ev) => filter(ev.target.name) }
      >
        All
      </button>
      <button
        className="bg-orange-400 rounded-full shadow-md shadow-black p-1 w-20 text-sm"
        data-testid="filter-by-food-btn"
        name="Food"
        onClick={ (ev) => filter(ev.target.name) }
      >
        Food
      </button>
      <button
        className="bg-orange-400 rounded-full shadow-md shadow-black p-1 w-20 text-sm"
        data-testid="filter-by-drink-btn"
        name="Drinks"
        onClick={ (ev) => filter(ev.target.name) }
      >
        Drinks
      </button>
    </div>
  );
}

MealAndDrinkFilter.propTypes = {
  filter: propTypes.func.isRequired,
};
