import React from 'react';
import propTypes from 'prop-types';

export default function Alert({ show }) {
  return (
    <div className={ `${!show ? 'hidden' : 'block'} ml-2` }>
      <span>Link copied!</span>
    </div>
  );
}

Alert.propTypes = {
  show: propTypes.bool.isRequired,
};
