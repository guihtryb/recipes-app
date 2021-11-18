import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import whiteHeart from '../images/whiteHeartIcon.svg';
import blackHeart from '../images/blackHeartIcon.svg';
import '../utils/index';

function FavoriteButton({ id, type, area, category, alcoholicOrNot, name, image }) {
  const [favorited, setFavorited] = useState(false);

  useEffect(() => {
    const favRecipes = localStorage.getObj('favoriteRecipes');
    if (!favRecipes) localStorage.setObj('favoriteRecipes', []);
    const favRecipe = favRecipes && favRecipes.some((recipe) => recipe.id === id);
    console.log(favRecipe);
    if (favRecipe) setFavorited(true);
  }, [id]);

  const handleFavButton = () => {
    setFavorited(!favorited);
    const favoriteRecipes = localStorage.getObj('favoriteRecipes');
    if (favorited) {
      const filteredFavoriteRecipes = favoriteRecipes
        .filter((recipe) => recipe.id !== id);
      localStorage.setObj('favoriteRecipes', [...filteredFavoriteRecipes]);
    } else {
      localStorage.setObj('favoriteRecipes', [...favoriteRecipes, {
        id,
        type,
        area,
        category,
        alcoholicOrNot,
        name,
        image,
      }]);
    }
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
