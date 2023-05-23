import React from 'react';
import propTypes from 'prop-types';
import Favorite from '../images/blackHeartIcon.svg';
import NotFavorite from '../images/whiteHeartIcon.svg';

export default function FavoriteBtn({ recipe, isFavorite, add, remove }) {
  return (
    <button
      type="button"
      onClick={ () => (isFavorite ? remove(recipe) : add(recipe)) }
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
}.isRequired;
