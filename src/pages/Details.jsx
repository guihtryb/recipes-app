import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import { fetchDrinkReq, fetchFoodReq } from '../services/APIs';

function Details() {
  const [detailsData, setDetailsData] = useState([]);
  const [ingredients, setIngredients] = useState([]);
  const [measures, setMeasures] = useState([]);

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
    const getKeyValues = async (keySearched, setData) => {
      const response = await requisition('lookup', 'i', id);
      const recipeDetails = response[type][0];
      const searchedKey = Object.entries(recipeDetails)
        .filter((item) => (item[0].includes(keySearched)
        && item[1] ? item : null));

      const ingredientesData = searchedKey.map((item) => item[1]);
      setData(ingredientesData);
    };
    getKeyValues('Ingredient', setIngredients);
    getKeyValues('Measure', setMeasures);
  }, [type, requisition, id]);

  if (!detailsData || !ingredients) return <h3> Loading...</h3>;

  const tags = detailsData.strTags !== null && detailsData.strTags;
  const recommended = [tags && tags.includes(',') ? tags.split(',') : tags];
  const youtubeEmbed = detailsData.strYoutube
    && detailsData.strYoutube.replace('watch?v=', 'embed/');

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
        <p
          key={ ingredient }
          data-testid={ `${index}-ingredient-name-and-measure` }
          className="details-ingredient"
        >
          {`-${ingredient} - ${measures[index]}` }
        </p>)) }
      <p
        data-testid="instructions"
        className="instructions"
      >
        { detailsData.strInstructions }
      </p>
      <iframe
        title="myFrame"
        width="420"
        height="315"
        src={ youtubeEmbed }
        data-testid="video"
      />
      { recommended && recommended.map((item, index) => (
        <span
          key={ index }
          data-testid={ `${index}-recomendation-card` }
        >
          { item }
        </span>
      )) }
      <button type="button" data-testid="start-recipe-btn">
        Start
      </button>
    </section>
  );
}

export default Details;
