import PropTypes from 'prop-types';
import React, { useContext, useEffect, useState } from 'react';
import whiteHeart from '../images/whiteHeartIcon.svg';
import blackHeart from '../images/blackHeartIcon.svg';
import '../utils/index';
import Context from '../context/Context';

function FavoriteButton({ id,
  type,
  area,
  category,
  alcoholicOrNot,
  name,
  image,
  testId = 'favorite-btn',
}) {
  const [favorited, setFavorited] = useState(false);
  const { favoritesData, setFavoritesData } = useContext(Context);

  useEffect(() => {
    const favRecipes = localStorage.getObj('favoriteRecipes');
    if (!favRecipes) localStorage.setObj('favoriteRecipes', []);
    const favRecipe = favRecipes && favRecipes.some((recipe) => recipe.id === id);
    if (favRecipe) setFavorited(true);
  }, [id]);

  const handleFavButton = () => {
    setFavorited(!favorited);
    const favoriteRecipes = localStorage.getObj('favoriteRecipes');
    if (favorited) {
      const filteredFavoriteRecipes = favoriteRecipes
        .filter((recipe) => recipe.id !== id);
      localStorage.setObj('favoriteRecipes', [...filteredFavoriteRecipes]);
      const filteredFavoriteData = favoritesData.filter((item) => item.id !== id);
      setFavoritesData([...filteredFavoriteData]);
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
      setFavoritesData([
        ...favoritesData,
        {
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
      data-testid={ testId }
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
  testId: PropTypes.string.isRequired,
};

export default FavoriteButton;
