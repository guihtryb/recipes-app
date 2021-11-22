/* eslint-disable react/self-closing-comp */
import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Context from '../context/Context';
import '../style/IngredientsCards.css';
import { BASE_DRINK_INGREDIENTS_IMAGE,
  BASE_FOOD_INGREDIENTS_IMAGE, fetchDrinkReq, fetchFoodReq } from '../services/APIs';

export default function IngredientsCard({ type, mainRote }) {
  const { drinkLists, foodData, setSearchData } = useContext(Context);
  const requisition = type === 'drinks' ? fetchDrinkReq : fetchFoodReq;
  const maxLength = 12;
  const loadingGif = type === 'drinks' ? 'https://media3.giphy.com/media/3og0IB9TepluVHcMFy/giphy.gif?cid=ecf05e476hxg8v2h9y8cm299vb7nwfm1abzquj84z7kqhm06&rid=giphy.gif&ct=g' : 'https://media0.giphy.com/media/3o7bu8sRnYpTOG1p8k/giphy.gif?cid=ecf05e4739n2hlkxm6a8ymnheguv7bxk3f5m6wag9ocwigzy&rid=giphy.gif&ct=g';
  const ingredientsData = type === 'drinks'
    ? drinkLists[2] : foodData[2];
  if (!ingredientsData) {
    return (
      <div>
        <img src={ loadingGif } alt="" className="loading-gif" />
      </div>
    );
  }

  const ingredientItems = ingredientsData.items[type];
  const ingredients = type === 'drinks' ? ingredientItems
    .map((ingredient) => ingredient.strIngredient1)
    : ingredientsData.items[type].map((ingredient) => ingredient.strIngredient);

  const imgUrl = type === 'drinks' ? BASE_DRINK_INGREDIENTS_IMAGE
    : BASE_FOOD_INGREDIENTS_IMAGE;

  const redirectCorrectly = async (ingredient) => {
    const dataRequisition = await requisition('filter', 'i', ingredient);
    const newSearchData = dataRequisition[type];
    setSearchData(newSearchData);
  };

  return (
    <section className="ingredients-container">
      { ingredients.map((ingredient, index) => index < maxLength && (
        <Link
          to={ `/${mainRote}` }
          onClick={ () => redirectCorrectly(ingredient) }
        >
          <div
            className="ingredient-card recipe-card "
            key={ ingredient }
            data-testid={ `${index}-ingredient-card` }
          >
            <img
              src={ `${imgUrl}${ingredient}-Small.png` }
              alt="Ingredient"
              className="ingredient-card recipe-image "
              data-testid={ `${index}-card-img` }
            />
            <span
              className="ingredient-name recipe-title"
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
