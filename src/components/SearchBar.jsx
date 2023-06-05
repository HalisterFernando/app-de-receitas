import React from 'react';
import PropTypes from 'prop-types';
import SearchBarFilters from './SearchBarFilters';
import useSearchBar from '../hooks/useSearchBar';

function SearchBar({ type }) {
  const { setFilter, setSearchValue,
    toggleSearchBar, handleSearchBar } = useSearchBar(type);

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
