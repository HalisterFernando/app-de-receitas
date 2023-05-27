import React from 'react';
import { Link } from 'react-router-dom';
import propTypes from 'prop-types';
import clipboardCopy from 'clipboard-copy';
import ShareBtn from '../ShareBtn';
import useTimeOut from '../../hooks/useTimeout';
import Alert from '../Alert';
import FavoriteBtn from '../FavoriteBtn';

export default function FavoriteRecipeCard(
  { id, name, image, category, nationality = null,
    alcoholic = null, type, index, remove },

) {
  const linkTo = type === 'meal' ? `/foods/${id}` : `/drinks/${id}`;
  const { show, timeOut } = useTimeOut();
  const recipe = { id, name, image, category, nationality, alcoholic, type, index };
  const recipeType = type === 'meal' ? 'foods' : 'drinks';

  const handleShare = () => {
    clipboardCopy(`http://localhost:3000${linkTo}`);
    timeOut();
  };

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
        <div className="flex items-center justify-between text-xs">
          {alcoholic
            ? (<span data-testid={ `${index}-horizontal-top-text` }>{alcoholic}</span>)
            : (
              <span data-testid={ `${index}-horizontal-top-text` }>
                {`${nationality} - ${category}` }
              </span>
            )}
          <ShareBtn handleShare={ handleShare } />
          <FavoriteBtn
            recipe={ recipe }
            isFavorite
            remove={ remove }
            type={ recipeType }
          />
        </div>
        <Link to={ linkTo }>
          <h2 data-testid={ `${index}-horizontal-name` }>{name}</h2>
        </Link>
        {show && <Alert show={ show } />}
      </div>
    </div>
  );
}

FavoriteRecipeCard.propTypes = {
  id: propTypes.string.isRequired,
  name: propTypes.string.isRequired,
  image: propTypes.string.isRequired,
  category: propTypes.string.isRequired,
  nationality: propTypes.string,
  alcoholic: propTypes.string,
  type: propTypes.string.isRequired,
  index: propTypes.number.isRequired,
  remove: propTypes.func.isRequired,
};
