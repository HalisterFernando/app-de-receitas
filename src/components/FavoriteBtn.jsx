import React from 'react';
import propTypes from 'prop-types';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';

export default function FavoriteBtn(
  { recipe, isFavorite, add = () => {}, remove = () => {}, type = null },
) {
  return (
    <button
      className="bg-orange-300 h-8 w-8 rounded-full p-1"
      type="button"
      onClick={ () => (isFavorite ? remove(recipe, type) : add(recipe, type)) }
    >
      <span className="text-2xl">
        {
          isFavorite ? <AiFillHeart /> : <AiOutlineHeart />
        }
      </span>
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
