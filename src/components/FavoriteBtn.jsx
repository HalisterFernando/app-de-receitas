import React from 'react';
import propTypes from 'prop-types';
import Favorite from '../images/blackHeartIcon.svg';
import NotFavorite from '../images/whiteHeartIcon.svg';

export default function FavoriteBtn(
  { recipe, isFavorite, add = () => {}, remove = () => {}, type = null },
) {
  return (
    <button
      type="button"
      onClick={ () => (isFavorite ? remove(recipe, type) : add(recipe, type)) }
    >
      <img
        src={ isFavorite ? Favorite : NotFavorite }
        alt={ isFavorite ? 'favorito' : 'não favorito' }
      />
    </button>
  );
}
FavoriteBtn.propTypes = {
  recipe: propTypes.shape({
    alcoholic: propTypes.string,
    category: propTypes.string,
    id: propTypes.string,
    image: propTypes.string,
    index: propTypes.number,
    name: propTypes.string,
    nationality: propTypes.string,
    type: propTypes.string,
  }).isRequired,
  isFavorite: propTypes.bool.isRequired,
  add: propTypes.func,
  remove: propTypes.func,
  type: propTypes.string,
};
