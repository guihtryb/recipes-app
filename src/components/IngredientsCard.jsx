import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Context from '../context/Context';
import { BASE_DRINK_INGREDIENTS_IMAGE,
  BASE_FOOD_INGREDIENTS_IMAGE, fetchDrinkReq, fetchFoodReq } from '../services/APIs';

export default function IngredientsCard({ type, mainRote }) {
  const { drinkLists, foodData } = useContext(Context);
  const requisition = type === 'drinks' ? fetchDrinkReq : fetchFoodReq;
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

  const redirectCorrectly = () => {
  };
  // chamar uma requisição com
  // - typeSelected(search || filter)
  // - caracter do checkbutton ('i')
  // - o nome do ingrediente
  // setar o searchData

  return (
    <section className="ingredients-container">
      { ingredients.map((ingredient, index) => index < maxLength && (
        <Link
          to={ `/${mainRote}` }
          onClick={ redirectCorrectly }
        >
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
        </Link>
      )) }
    </section>
  );
}

IngredientsCard.propTypes = {
  type: PropTypes.string.isRequired,
  mainRote: PropTypes.string.isRequired,
};
