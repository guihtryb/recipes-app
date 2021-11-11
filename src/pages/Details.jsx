import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import { fetchDrinkReq, fetchFoodReq } from '../services/APIs';

function Details() {
  const [detailsData, setDetailsData] = useState([]);
  const [ingredients, setIngredients] = useState([]);

  const location = useLocation();
  const path = location.pathname;
  const id = path.split('s/')[1];
  const type = path.includes('comidas') ? 'meals' : 'drinks';
  const requisition = type === 'meals' ? fetchFoodReq : fetchDrinkReq;
  const key = type === 'meals' ? 'Meal' : 'Drink';
  useEffect(() => {
    const getRecipeDetails = async () => {
      const response = await requisition('lookup', 'i', id);
      const recipeDetails = response[type][0];
      console.log(recipeDetails);
      setDetailsData(recipeDetails);
    };
    getRecipeDetails();
  }, [type, requisition, id]);

  useEffect(() => {
    const getIngredients = async () => {
      const response = await requisition('lookup', 'i', id);
      const recipeDetails = response[type][0];

      const searchedKey = Object.entries(recipeDetails)
        .filter((item) => (item[0].includes('Ingredient')
        && item[1].length ? item : null));
      const ingredientesData = searchedKey.map((item) => item[1]);
      setIngredients(ingredientesData);
    };
    getIngredients();
  }, [type, requisition, id]);

  if (!detailsData || !ingredients) return <h3> Loading...</h3>;
  // const tags = detailsData.strTags !== null && detailsData.strTags;
  // const recommended = [tags && tags.includes(',') ? tags.split(',') : tags];
  // console.log(recommended);

  return (
    <section className="details-container">
      <img
        className="details-image"
        src={ detailsData[`str${key}Thumb`] }
        alt=""
        data-testid="recipe-photo"
      />
      <span
        className="recipe-title"
        data-testid="recipe-title"
      >
        {detailsData[`str${key}`]}
      </span>
      <button
        type="button"
        data-testid="share-btn"
      >
        Share
      </button>
      <button
        type="button"
        data-testid="favorite-btn"
      >
        Favorite
      </button>
      <p
        data-testid="recipe-category"
        className="recipe-category"
      >
        { detailsData.strCategory }
      </p>
      { ingredients.map((ingredient, index) => (
        <span
          key={ ingredient }
          data-testid={ `${index}-ingredient-name-and-measure` }
          className="details-ingredient"
        >
          { ingredient }
        </span>)) }
      <p
        data-testid="instructions"
        className="instructions"
      >
        { detailsData.strInstructions }
      </p>
      {/* { type === 'meals' ? <video controls>
        <source data-testid="video" src={ detailsData.strYoutube } type="video/mp4" />
      </video>

        : null }
      { recommended && recommended.map((item, index) => (
        <span
          key={ index }
          data-testid={ `${index}-recomendation-card` }
        >
          { item }
        </span>
      )) } */}
      <button type="button" data-testid="start-recipe-btn">
        Start
      </button>
    </section>
  );
}

export default Details;
