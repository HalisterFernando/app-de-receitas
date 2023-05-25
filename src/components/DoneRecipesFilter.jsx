import React from 'react';
import propTypes from 'prop-types';

export default function DoneRecipesFilter({ filter }) {
  return (
    <div className="flex justify-between p-2">
      <button
        className="bg-orange-400 rounded shadow-md shadow-black p-1 w-20 text-sm"
        data-testid="filter-by-all-btn"
        name="All"
        onClick={ (ev) => filter(ev.target.name) }
      >
        All
      </button>
      <button
        className="bg-orange-400 rounded shadow-md shadow-black p-1 w-20 text-sm"
        data-testid="filter-by-food-btn"
        name="Food"
        onClick={ (ev) => filter(ev.target.name) }
      >
        Food
      </button>
      <button
        className="bg-orange-400 rounded shadow-md shadow-black p-1 w-20 text-sm"
        data-testid="filter-by-drink-btn"
        name="Drinks"
        onClick={ (ev) => filter(ev.target.name) }
      >
        Drinks
      </button>
    </div>
  );
}

DoneRecipesFilter.propTypes = {
  filter: propTypes.func.isRequired,
};
