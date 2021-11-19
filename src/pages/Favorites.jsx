import React /* { useState } */from 'react';
import FavoriteButton from '../components/FavoriteButton';
import Header from '../components/Header';
import ShareButton from '../components/ShareButton';
// import PropTypes from 'prop-types';

function Favorites() {
  // const [category, setCategory] = useState('All');

  const favoritedRecipes = localStorage.getObj('favoriteRecipes');
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
      { favoritedRecipes && favoritedRecipes.map((recipe, index) => (
        <div key={ recipe.name } className="favorite-container">
          <img
            className="details-image"
            src={ recipe.image }
            alt="recipe"
            data-testid={ `${index}-horizontal-image` }
            width="320"
            height="200"
          />
          <i className="favorite-top-text" data-testid={ `${index}-horizontal-top-text` }>
            { recipe.type === 'comida'
              ? `${recipe.area} - ${recipe.category} ` : `${recipe.alcoholicOrNot} ` }
          </i>
          <span
            className="favorite-title"
            data-testid={ `${index}-horizontal-name` }
          >
            { recipe.name }
          </span>
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
