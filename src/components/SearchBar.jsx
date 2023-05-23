import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import {
  getByIngredient,
  getByName,
  getByFirstLetter } from '../services/searchBarServices';
import { AppContext } from '../context/Provider';
import SearchBarFilters from './SearchBarFilters';

function SearchBar({ type }) {
  const [filter, setFilter] = useState('');
  const [searchValue, setSearchValue] = useState('');
  const { setMeals, setDrinks, toggleSearchBar } = useContext(AppContext);
  const customAlert = window.alert;

  const navigate = useNavigate();

  const routesToPush = {
    foods: (result) => navigate(`/${type}/${result[0].idMeal}`),
    drinks: (result) => navigate(`/${type}/${result[0].idDrink}`),
  };

  const searchResult = (result) => {
    if (result.length === 1) return routesToPush[type](result);

    if (type === 'foods') {
      setMeals(result);
    }
    if (type === 'drinks') {
      setDrinks(result);
    }
  };

  const searchFilters = {
    ingrediente: async () => getByIngredient(searchValue, type),
    nome: async () => getByName(searchValue, type),
    'primeira letra': async () => {
      if (searchValue.length > 1) {
        return customAlert('Your search must have only 1 (one) character');
      }
      return getByFirstLetter(searchValue, type);
    },
  };

  const handleSearchBar = async () => {
    const response = await searchFilters[filter]();

    if (!response) {
      return customAlert(
        'Sorry, we haven\'t found any recipes for these filters.',
      );
    }
    return searchResult(response);
  };

  return (
    <form>
      <div
        className={
          `${!toggleSearchBar ? 'h-0 overflow-hidden' : 'h-28'} 
            transition-all
            ease-in-out
            duration-500
          `
        }
      >
        <label htmlFor="valueName" className="flex justify-center my-2">
          <input
            type="text"
            data-testid="search-input"
            onChange={ (ev) => setSearchValue(ev.target.value) }
            id="valueName"
            placeholder="Pesquisar"
            className="p-1 border-2 border-orange-400 rounded text-sm"
          />
        </label>
        <SearchBarFilters setValue={ setFilter } />
        <button
          className="mx-auto w-16 block bg-orange-400 rounded shadow-md p-1 my-2 text-sm"
          type="button"
          data-testid="exec-search-btn"
          onClick={ () => handleSearchBar() }
          id="exerc-search-btn"
        >
          Buscar
        </button>
      </div>
    </form>
  );
}

SearchBar.propTypes = {
  type: PropTypes.string.isRequired,
};

export default SearchBar;
