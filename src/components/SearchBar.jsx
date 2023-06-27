import React from 'react';
import propTypes from 'prop-types';
import SearchBarFilters from './SearchBarFilters';
import useSearchBar from '../hooks/useSearchBar';

function SearchBar({ type, animateCard }) {
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
            className="py-1 px-3 border-2 border-orange-400 rounded-full text-sm"
          />
        </label>
        <SearchBarFilters setValue={ setFilter } />
        <button
          className="
          mx-auto
          w-28
          block
          bg-orange-400
          rounded-full
          shadow-md
          shadow-black
          p-1
          my-2
          text-sm
          "
          type="button"
          data-testid="exec-search-btn"
          onClick={ () => { handleSearchBar(); animateCard(); } }
          id="exerc-search-btn"
        >
          Search
        </button>
      </div>
    </form>
  );
}

SearchBar.propTypes = {
  type: propTypes.string.isRequired,
  animateCard: propTypes.func.isRequired,
};

export default SearchBar;
