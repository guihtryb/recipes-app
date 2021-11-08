import PropTypes from 'prop-types';
import React from 'react';

function RecipeCard(props) {
  const { thumb, name, recipeIndex } = props;
  return (
    <div data-testid={ `${recipeIndex}-recipe-card` }>
      <h2 data-testid={ `${recipeIndex}-card-name` }>{ name }</h2>
      <img
        src={ thumb }
        alt={ `imagem do alimento ${name}` }
        data-testid={ `${recipeIndex}-card-img` }
      />
    </div>
  );
}

RecipeCard.propTypes = {
  name: PropTypes.string.isRequired,
  recipeIndex: PropTypes.number.isRequired,
  thumb: PropTypes.string.isRequired,
};

export default RecipeCard;
