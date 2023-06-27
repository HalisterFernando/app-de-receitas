import React, { useContext } from 'react';
import propTypes from 'prop-types';
import useLoading from '../hooks/useLoading';
import { AppContext } from '../context/Provider';

const INDEX = 5;

export default function CategoryFilters(
  { allCategories, filterByCategory, categoryName },
) {
  const { categories } = useContext(AppContext);
  const { loading } = useLoading();

  return !loading && (
    <div className="overflow-x-scroll lg:overflow-x-visible px-1">
      <div className="flex md:justify-center min-w-min gap-3 my-2">
        <button
          type="button"
          name="All"
          className={ `
          ${categoryName === 'All' && 'bg-orange-400'}
          rounded-full
          shadow-md
          shadow-black
          h-7
          p-1
          w-24
          lg:w-32
          text-xs
          truncate
          ` }
          data-testid="All-category-filter"
          onClick={ (ev) => allCategories(ev) }
        >
          All
        </button>
        {categories.slice(0, INDEX).map(({ strCategory }, index) => (
          <button
            data-testid={ `${strCategory}-category-filter` }
            type="button"
            key={ index }
            onClick={ (ev) => filterByCategory(ev) }
            name={ strCategory }
            className={ `
            ${categoryName === strCategory && 'bg-orange-400'}
            rounded-full
            shadow-md
            shadow-black
            h-7
            p-1
            w-24
            lg:w-32
            text-xs
            truncate
            ` }

          >
            {strCategory}
          </button>
        ))}
      </div>
    </div>
  );
}

CategoryFilters.propTypes = {
  allCategories: propTypes.func.isRequired,
  filterByCategory: propTypes.func.isRequired,
  categoryName: propTypes.string.isRequired,
};
