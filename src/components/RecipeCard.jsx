import PropTypes from 'prop-types';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function RecipeCard({ thumb, name, recipeIndex, recipeId, recipeRecommendation }) {
  // https://stackoverflow.com/questions/42253277/react-router-v4-how-to-get-current-route
  const location = useLocation();
  const rotaRecomendation = location.pathname.includes('/comidas')
    ? 'bebidas' : 'comidas';
  const rota = location.pathname.includes('/comidas') ? 'comidas' : 'bebidas';
  const dataTestId = recipeRecommendation
    ? `${recipeIndex}-recomendation-card` : `${recipeIndex}-recipe-card`;
  const recipeHeader = recipeRecommendation
    ? `${recipeIndex}-recomendation-title` : `${recipeIndex}-card-name`;

  return (
    <Link to={ `/${recipeRecommendation ? rotaRecomendation : rota}/${recipeId}` }>
      <div data-testid={ dataTestId }>
        <h2 data-testid={ recipeHeader }>{ name }</h2>
        <img
          src={ thumb }
          alt={ `imagem do alimento ${name}` }
          data-testid={ `${recipeIndex}-card-img` }
          width="300"
        />
      </div>
    </Link>
  );
}

RecipeCard.propTypes = {
  name: PropTypes.string.isRequired,
  recipeId: PropTypes.string.isRequired,
  recipeIndex: PropTypes.number.isRequired,
  recipeRecommendation: PropTypes.bool.isRequired,
  thumb: PropTypes.string.isRequired,
};

export default RecipeCard;
