import PropTypes from 'prop-types';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../style/RecipeCard.css';

function RecipeCard({ thumb, name, recipeIndex, recipeId }) {
  // https://stackoverflow.com/questions/42253277/react-router-v4-how-to-get-current-route
  const location = useLocation();
  const rota = location.pathname.includes('/comidas') ? 'comidas' : 'bebidas';

  return (
    <Link to={ `/${rota}/${recipeId}` }>
      <div data-testid={ `${recipeIndex}-recipe-card` } className="recipe-card">
        <h2 data-testid={ `${recipeIndex}-card-name` } className="recipe-title">
          { name }
        </h2>
        <img
          src={ thumb }
          alt={ `imagem do alimento ${name}` }
          data-testid={ `${recipeIndex}-card-img` }
          className="recipe-image"
        />
      </div>
    </Link>
  );
}

RecipeCard.propTypes = {
  name: PropTypes.string.isRequired,
  recipeId: PropTypes.string.isRequired,
  recipeIndex: PropTypes.number.isRequired,
  thumb: PropTypes.string.isRequired,
};

export default RecipeCard;
