import propTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

export default function RecomendationCard({ index, image, name, id, animate, type }) {
  const linkTo = `/${type}/${id}`;
  return (
    <Link to={ linkTo }>
      <div
        className={
          `w-72
        h-52
        mb-5
        rounded
        shadow-md
        shadow-black
        flex
        flex-col
        justify-between
        relative
        ${animate && 'animate-slide-down'}
      `
        }
        data-testid={ `${index}-recipe-card` }
      >
        <div className="h-52">
          <img
            data-testid={ `${index}-card-img` }
            src={ image }
            alt={ name }
            className="h-full w-full object-cover rounded"
          />
        </div>
        <div
          className="
        px-2
        h-8
        flex
        items-center
        absolute
        bottom-0
        bg-white
        bg-opacity-75
        font-semibold
        rounded-b
        w-full"
        >
          <p className="truncate" data-testid={ `${index}-card-name` }>{ name }</p>
        </div>
      </div>
    </Link>
  );
}

RecomendationCard.propTypes = {
  index: propTypes.number.isRequired,
  image: propTypes.string.isRequired,
  name: propTypes.string.isRequired,
  id: propTypes.string.isRequired,
  animate: propTypes.bool.isRequired,
  type: propTypes.string.isRequired,
};
