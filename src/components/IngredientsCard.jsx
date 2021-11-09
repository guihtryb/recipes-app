import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Context from '../context/Context';
import { BASE_DRINK_INGREDIENTS_IMAGE,
  BASE_FOOD_INGREDIENTS_IMAGE } from '../services/APIs';

export default function IngredientsCard({ type }) {
  const { drinkLists, foodData } = useContext(Context);
  const maxLength = 12;
  const ingredientsData = type === 'drinks'
    ? drinkLists[2] : foodData[2];
  if (!ingredientsData) {
    return (
      <h3> Loading...</h3>
    );
  }

  const ingredientItems = ingredientsData.items[type];
  const ingredients = type === 'drinks' ? ingredientItems
    .map((ingredient) => ingredient.strIngredient1)
    : ingredientsData.items[type].map((ingredient) => ingredient.strIngredient);

  const imgUrl = type === 'drinks' ? BASE_DRINK_INGREDIENTS_IMAGE
    : BASE_FOOD_INGREDIENTS_IMAGE;

  return (
    <section className="ingredients-container">
      { ingredients.map((ingredient, index) => index < maxLength && (
        <div
          className="ingredient-card"
          key={ ingredient }
          data-testid={ `${index}-ingredient-card` }
        >
          <img
            src={ `${imgUrl}${ingredient}-Small.png` }
            alt="Ingredient"
            className="ingredient-card"
            data-testid={ `${index}-card-img` }
          />
          <span
            className="ingredient-name"
            data-testid={ `${index}-card-name` }
          >
            {ingredient}
          </span>
        </div>
      )) }
    </section>
  );
}

IngredientsCard.propTypes = {
  type: PropTypes.string.isRequired,
};
