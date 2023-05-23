import React from 'react';
import propTypes from 'prop-types';

export default function SearchBarFilters({ setValue }) {
  return (
    <div className="flex justify-between mx-2">
      <div>
        <label htmlFor="ingredient-search-radio" className="text-sm">
          <input
            type="radio"
            name="flexRadioDefault"
            id="ingredient-search-radio"
            data-testid="ingredient-search-radio"
            onClick={ () => setValue('ingrediente') }
            className="mr-1"
          />
          Ingrediente
        </label>
      </div>
      <div>
        <label htmlFor="name-search-radio" className="text-sm">
          <input
            type="radio"
            name="flexRadioDefault"
            id="name-search-radio"
            data-testid="name-search-radio"
            onClick={ () => setValue('nome') }
            className="mr-1"
          />
          Nome
        </label>
      </div>
      <div>
        <label htmlFor="first-letter-search-radio" className="text-sm">
          <input
            type="radio"
            name="flexRadioDefault"
            id="first-letter-search-radio"
            data-testid="first-letter-search-radio"
            onClick={ () => setValue('primeira letra') }
            className="mr-1"
          />
          Primeira Letra
        </label>
      </div>
    </div>
  );
}

SearchBarFilters.propTypes = {
  setValue: propTypes.func.isRequired,
};
