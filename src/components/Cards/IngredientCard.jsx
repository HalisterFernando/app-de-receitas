import React from 'react';
import propTypes from 'prop-types';

export default function IngredientCard({ name, image, index }) {
  return (
    <div
      className="
      flex
      flex-col
      justify-center
      items-center
      w-36
      shadow-md
      shadow-black
      rounded
      p-2
      "
      data-testid={ `${index}-ingredient-card` }
    >
      <div>
        <img src={ image } alt={ name } data-testid={ `${index}-card-img` } />
      </div>
      <div>
        <h2
          data-testid={ `${index}-card-name` }
          className="text-xs"
        >
          {name}

        </h2>
      </div>
    </div>
  );
}

IngredientCard.propTypes = {
  name: propTypes.string.isRequired,
  image: propTypes.string.isRequired,
  index: propTypes.number.isRequired,

};
