import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import FavoriteButton from '../components/FavoriteButton';
import Header from '../components/Header';
import ShareButton from '../components/ShareButton';
import Context from '../context/Context';
// import PropTypes from 'prop-types';

function Favorites() {
  const { favoritesData } = useContext(Context);
  // console.log(favorites);
  const favRecipes = localStorage.getObj('favoriteRecipes');
  const favorites = !favoritesData.length
    ? favRecipes : favoritesData;

  const favoriteButtons = [
    {
      name: 'All',
      testId: 'filter-by-all-btn',
    },
    {
      name: 'Food',
      testId: 'filter-by-food-btn',
    },
    {
      name: 'Drinks',
      testId: 'filter-by-drink-btn',
    },
  ];

  return (
    <>
      <Header title="Receitas Favoritas" />
      { favoriteButtons.map((button) => (
        <button
          type="button"
          key={ button.name }
          className="favorites-category-button"
          data-testid={ button.testId }
        >
          {button.name}
        </button>
      ))}
      { favorites && favorites.map((recipe, index) => (
        <div key={ recipe.name } className="favorite-container">
          <Link to={ `${recipe.type}s/${recipe.id}` }>
            <img
              className="details-image"
              src={ recipe.image }
              alt="recipe"
              data-testid={ `${index}-horizontal-image` }
              width="320"
              height="200"
            />
            <i
              className="favorite-top-text"
              data-testid={ `${index}-horizontal-top-text` }
            >
              { recipe.type === 'comida'
                ? `${recipe.area} - ${recipe.category} ` : `${recipe.alcoholicOrNot} ` }
            </i>
            <span
              className="favorite-title"
              data-testid={ `${index}-horizontal-name` }
            >
              { recipe.name }
            </span>
          </Link>
          <FavoriteButton
            id={ recipe.id }
            type={ recipe.type }
            area={ recipe.area }
            category={ recipe.category }
            alcoholicOrNot={ recipe.alcoholicOrNot }
            name={ recipe.name }
            image={ recipe.image }
            testId={ `${index}-horizontal-favorite-btn` }
          />
          <ShareButton
            testId={ `${index}-horizontal-share-btn` }
            route={ recipe.type === 'comida'
              ? `/comidas/${recipe.id}` : `bebidas/${recipe.id}` }
          />
        </div>
      )) }
    </>
  );
}

export default Favorites;
