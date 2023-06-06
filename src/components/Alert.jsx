import React from 'react';
import propTypes from 'prop-types';

export default function Alert({ show }) {
  return (
    <div
      className={
        `${!show ? 'hidden' : 'block'} 
      rounded-full 
      px-2 
      py-1 
      mt-2
      bg-orange-400 
      text-center
      font-semibold
      `
      }
    >
      Link copied!
    </div>
  );
}

Alert.propTypes = {
  show: propTypes.bool.isRequired,
};
