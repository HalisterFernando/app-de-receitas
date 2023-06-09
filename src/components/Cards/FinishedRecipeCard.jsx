import React from 'react';
import { Link } from 'react-router-dom';
import format from 'date-fns/format';
import propTypes from 'prop-types';
import Tag from './Tag';
import ShareBtn from '../ShareBtn';
import Alert from '../Alert';
import useShare from '../../hooks/useShare';

export default function FinishedRecipeCard(
  { id, name, image, category, nationality = null,
    tags = null, alcoholic = '', type, index },

) {
  const linkTo = type === 'meal' ? `/foods/${id}` : `/drinks/${id}`;
  const currentDate = format(new Date(), 'dd/MM/yyyy');

  const { handleShare, show } = useShare();

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
        bg-white
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
        <div className="flex items-center justify-between text-xs">
          {alcoholic
            ? (<span data-testid={ `${index}-horizontal-top-text` }>{alcoholic}</span>)
            : (
              <span data-testid={ `${index}-horizontal-top-text` }>
                {`${nationality} - ${category}` }
              </span>
            )}
          <ShareBtn handleShare={ handleShare } />
        </div>
        <Link to={ linkTo }>
          <h2 data-testid={ `${index}-horizontal-name` }>{name}</h2>
          {show && <Alert show={ show } />}
        </Link>
        <span
          className="text-xs"
          data-testid={ `${index}-horizontal-done-date` }
        >
          {`Done in: ${currentDate}`}
        </span>
        <div className="flex gap-2">
          {tags && tags.map((tagName) => (
            <div key={ id }>
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
  nationality: propTypes.string,
  tags: propTypes.arrayOf(propTypes.string),
  alcoholic: propTypes.string,
  type: propTypes.string.isRequired,
  index: propTypes.number.isRequired,
};
