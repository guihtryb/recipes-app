import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import { fetchDrinkReq, fetchFoodReq } from '../services/APIs';

const recipeTypeToggle = (type, param1, param2) => (type === 'meals' ? param1 : param2);

function RecipeInProgress() {
  const [detailsData, setDetailsData] = useState();
  const [ingredients, setIngredients] = useState();
  const [measures, setMeasures] = useState([]);

  const location = useLocation();
  const path = location.pathname;
  const id = path.split('/')[2];
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

  return (
    <section className="details-container">
      <img
        className="details-image"
        src={ detailsData[`str${key}Thumb`] }
        alt=""
        data-testid="recipe-photo"
        swidth="320"
        height="205"

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

      <h4 data-testid="recipe-category" className="recipe-category">

        { detailsData.strCategory }

      </h4>

      <button type="button" data-testid="share-btn">
        Share
      </button>

      <button type="button" data-testid="favorite-btn">
        Favorite
      </button>

      { ingredients.map((ingredient, index) => (
        <p
          key={ ingredient }
          data-testid={ `${index}-ingredient-step` }
          className="details-ingredient"
        >
          {`-${ingredient} - ${measures[index]}` }
        </p>)) }

      <p data-testid="instructions" className="instructions">

        { detailsData.strInstructions }

      </p>

      <button type="button" data-testid="finish-recipe-btn">
        Finish Recipe
      </button>

    </section>
  );
}

export default RecipeInProgress;
