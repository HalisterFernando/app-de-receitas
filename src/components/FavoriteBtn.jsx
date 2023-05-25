import React from 'react';
import propTypes from 'prop-types';
import Favorite from '../images/blackHeartIcon.svg';
import NotFavorite from '../images/whiteHeartIcon.svg';

export default function FavoriteBtn({ recipe, isFavorite, add, remove, type }) {
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
  recipe: propTypes.objectOf(propTypes.any),
  isFavorite: propTypes.bool,
  add: propTypes.func,
  remove: propTypes.func,
  type: propTypes.string,
}.isRequired;
