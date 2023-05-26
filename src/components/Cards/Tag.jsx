import React from 'react';
import propTypes from 'prop-types';

export default function Tag({ name, index }) {
  return (
    <div
      className="text-xs rounded-full bg-orange-400 text-center p-1"
      data-testid={ `${index}-${name}-horizontal-tag` }
    >
      {name}
    </div>
  );
}

Tag.propTypes = {
  name: propTypes.string.isRequired,
  index: propTypes.number.isRequired,
};
