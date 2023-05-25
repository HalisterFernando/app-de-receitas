import React from 'react';
import propTypes from 'prop-types';
import ShareIcon from '../images/shareIcon.svg';

export default function ShareBtn({ handleShare }) {
  return (
    <button
      data-testid="share-btn"
      type="button"
      onClick={ () => handleShare() }
    >
      <img src={ ShareIcon } alt="compartilhar" />
    </button>
  );
}

ShareBtn.propTypes = {
  handleShare: propTypes.func.isRequired,
};
