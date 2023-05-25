import React from 'react';
import { Link } from 'react-router-dom';
import format from 'date-fns/format';
import propTypes from 'prop-types';
import ShareIcon from '../images/shareIcon.svg';
import Tag from './Tag';

export default function FinishedRecipeCard(
  { id, name, image, category, nationality, tags = [], alcoholic = '', type, index },

) {
  const linkTo = type === 'meal' ? `/foods/${id}` : `/drinks/${id}`;
  const currentDate = format(new Date(), 'dd/MM/yyyy');

  return (
    <div
      className="
        w-72
        h-36
        flex
        gap-2
        items-center
        rounded
        shadow-md
        shadow-black
        "
    >
      <div className="h-36 w-1/2">
        <Link to={ linkTo }>
          <img
            src={ image }
            alt={ name }
            className="h-full w-full object-cover rounded-l"
            data-testid={ `${index}-horizontal-image` }
          />
        </Link>
      </div>
      <div className="flex flex-col justify-between p-2 h-full w-1/2">
        <div className="flex items-center justify-between text-sm">
          {alcoholic
            ? (<span data-testid={ `${index}-horizontal-top-text` }>{alcoholic}</span>)
            : (
              <span data-testid={ `${index}-horizontal-top-text` }>
                {`${nationality} - ${category}` }
              </span>
            )}
          <button>
            <img
              src={ ShareIcon }
              alt="compartilhar"
              data-testid={ `${index}-horizontal-share-btn` }
            />
          </button>
        </div>
        <Link to={ linkTo }>
          <h2 data-testid={ `${index}-horizontal-name` }>{name}</h2>
        </Link>
        <span
          className="text-xs"
          data-testid={ `${index}-horizontal-done-date` }
        >
          {`Done in: ${currentDate}`}
        </span>
        <div className="flex gap-2">
          {tags.length > 0 && tags.map((tagName) => (
            <div key={ tagName }>
              <Tag name={ tagName } index={ index } />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

FinishedRecipeCard.propTypes = {
  id: propTypes.string.isRequired,
  name: propTypes.string.isRequired,
  image: propTypes.string.isRequired,
  category: propTypes.string.isRequired,
  nationality: propTypes.string.isRequired,
  tags: propTypes.arrayOf(propTypes.string),
  alcoholic: propTypes.string,
  type: propTypes.string.isRequired,
  index: propTypes.number.isRequired,
};
