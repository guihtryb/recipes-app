import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import { fetchDrinkReq, fetchFoodReq } from '../services/APIs';
import '../style/Details.css';

const recipeTypeToggle = (type, param1, param2) => (type === 'meals' ? param1 : param2);

function Details() {
  const [detailsData, setDetailsData] = useState([]);
  const [ingredients, setIngredients] = useState([]);
  const [measures, setMeasures] = useState([]);
  const [recipeStatus, setRecipeStatus] = useState([
    { 'Receita em Progresso': false },
    { 'Receita Feita': true },
    { 'Iniciar Receita': false },
  ]);
  console.log(setRecipeStatus);
  const recipeButton = Object.keys(recipeStatus
    .find((item) => Object.values(item)[0] === true))[0];

  const location = useLocation();
  const path = location.pathname;
  const id = path.split('s/')[1];
  const type = path.includes('comidas') ? 'meals' : 'drinks';
  const requisition = recipeTypeToggle(type, fetchFoodReq, fetchDrinkReq);
  const key = recipeTypeToggle(type, 'Meal', 'Drink');
  useEffect(() => {
    const getRecipeDetails = async () => {
      const response = await requisition('lookup', 'i', id);
      const recipeDetails = response[type][0];
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
      <h3
        className="recipe-title"
        data-testid="recipe-title"
      >
        {detailsData[`str${key}`]}
      </h3>
      <h4 data-testid="recipe-category">
        { key === 'Drink' && detailsData.strAlcoholic }
      </h4>
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
      {key !== 'Drink' && <iframe
        title="myFrame"
        width="420"
        height="315"
        src={ youtubeEmbed }
        data-testid="video"
      />}
      { recommended && recommended.map((item, index) => (
        <span
          key={ index }
          data-testid={ `${index}-recomendation-card` }
        >
          { item }
        </span>
      )) }
      <button
        className="details-start-recipe"
        type="button"
        data-testid="start-recipe-btn"
        value="Iniciar Receita"
        // { ...recipeButton === 'Receita Feita' ? { style : { visibility: 'hidden' } } : null }
      >
        { recipeButton }
      </button>
    </section>
  );
}

export default Details;
