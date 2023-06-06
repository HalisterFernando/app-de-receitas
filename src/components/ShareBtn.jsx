import React from 'react';
import propTypes from 'prop-types';
import { BsShareFill } from 'react-icons/bs';

export default function ShareBtn({ handleShare }) {
  return (
    <button
      className="bg-orange-300 h-8 w-8 rounded-full p-1"
      data-testid="share-btn"
      type="button"
      onClick={ () => handleShare() }
    >
      <BsShareFill className="mx-auto" />
    </button>
  );
}

ShareBtn.propTypes = {
  handleShare: propTypes.func.isRequired,
};
