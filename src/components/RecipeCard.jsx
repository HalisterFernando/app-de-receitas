import propTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

export default function RecipeCard({ index, image, name, id }) {
  const linkTo = window.location.href
    .includes('/foods') ? `/foods/${id}` : `/drinks/${id}`;
  return (
    <Link to={ linkTo }>
      <div
        className="
      w-72
      min-h-44
      mb-5
      border
      border-orange-400
      rounded
      shadow-xl
      flex
      flex-col
      justify-between
      "
        data-testid={ `${index}-recipe-card` }
      >
        <div className="h-36">
          <img
            data-testid={ `${index}-card-img` }
            src={ image }
            alt={ name }
            className="h-full w-full object-cover"
          />
        </div>
        <div className="ml-2 mb-1 h-8 flex items-center">
          <p data-testid={ `${index}-card-name` }>{ name }</p>
        </div>
      </div>
    </Link>
  );
}

RecipeCard.propTypes = {
  index: propTypes.number.isRequired,
  image: propTypes.string.isRequired,
  name: propTypes.string.isRequired,
  id: propTypes.string.isRequired,
};
