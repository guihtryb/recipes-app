import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import whiteHeart from '../images/whiteHeartIcon.svg';
import blackHeart from '../images/blackHeartIcon.svg';
import '../utils/index';

function FavoriteButton({ id, type, area, category, alcoholicOrNot, name, image }) {
  const [favorited, setFavorited] = useState(false);

  useEffect(() => {
    const favRecipes = localStorage.getObj('favoriteRecipes');
    if (!favRecipes) localStorage.setObj('doneRecipes', []);
  }, []);

  const handleFavButton = () => {
    setFavorited(!favorited);
    const favoriteRecipes = localStorage.getObj('doneRecipes');
    localStorage.setObj('doneRecipes', [...favoriteRecipes, {
      id,
      type,
      area,
      category,
      alcoholicOrNot,
      name,
      image,
    }]);
  };

  return (
    <button
      type="button"
      data-testid="favorite-btn"
      onClick={ handleFavButton }
      src={ favorited ? blackHeart : whiteHeart }
    >
      <img src={ favorited ? blackHeart : whiteHeart } alt="favorite" />
    </button>
  );
}

FavoriteButton.propTypes = {
  alcoholicOrNot: PropTypes.string.isRequired,
  area: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default FavoriteButton;
