import PropTypes from 'prop-types';
import React, { useState } from 'react';
import copy from 'clipboard-copy';
import share from '../images/shareIcon.svg';

function ShareButton({ testId, route }) {
  const [isSharing, setIsSharing] = useState('');

  const handleShareButton = () => {
    const THREE_SECONDS = 3000;
    copy(`http://localhost:3000${route}`);
    setIsSharing('Link copiado!');
    setTimeout(() => setIsSharing(''), THREE_SECONDS);
  };

  return (
    <button
      type="button"
      data-testid={ testId }
      onClick={ handleShareButton }
      src="../src/images/shareIcon.svg"
    >
      <img src={ share } alt="share" />
      {isSharing}
    </button>
  );
}

ShareButton.propTypes = {
  route: PropTypes.string.isRequired,
  testId: PropTypes.string.isRequired,
};

export default ShareButton;
