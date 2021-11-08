import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function LinkButton({ text, linkTo, testid }) {
  return (
    <Link to={ linkTo }>
      <button
        type="button"
        data-testid={ testid }
      >
        { text }
      </button>
    </Link>
  );
}

LinkButton.propTypes = {
  text: PropTypes.string.isRequired,
  linkTo: PropTypes.string.isRequired,
  testid: PropTypes.string.isRequired,
};
