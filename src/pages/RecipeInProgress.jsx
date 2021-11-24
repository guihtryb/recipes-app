import React, { useEffect, useState, useContext } from 'react';
import { useLocation } from 'react-router';
import { useHistory } from 'react-router-dom';
import { fetchDrinkReq, fetchFoodReq } from '../services/APIs';
import IngredientsCheckbox from '../components/IngredientsCheckbox';
import Context from '../context/Context';
import ShareButton from '../components/ShareButton';
import FavoriteButton from '../components/FavoriteButton';
import '../style/RecipeInProgress.css';

const handleStateAndStorage = ({
  inProgressRecipes,
  setUsedIngredients,
  usedIngredients,
  type,
  id,
}) => {
  if (!inProgressRecipes) {
    localStorage.setObj('inProgressRecipes', {
      cocktails: {},
      meals: {},
    });
    setUsedIngredients({
      cocktails: {},
      meals: {},
    });
  } else {
    const recipeType = type === 'meals' ? 'meals' : 'cocktails';
    const inProgressRecipesKeys = Object.keys(inProgressRecipes[recipeType])
      .includes(id);

    if (!inProgressRecipesKeys) {
      localStorage.setObj('inProgressRecipes', {
        ...inProgressRecipes,
        [recipeType]: {
          ...inProgressRecipes[recipeType],
          [id]: [],
        },
      });
      setUsedIngredients({
        ...usedIngredients,
        [recipeType]: {
          ...usedIngredients[recipeType],
          [id]: [],
        },
      });
    }
  }
};

const recipeTypeToggle = (type, param1, param2) => (type === 'meals' ? param1 : param2);

function RecipeInProgress() {
  const { usedIngredients,
    setUsedIngredients } = useContext(Context);
  const [detailsData, setDetailsData] = useState([]);
  const [ingredients, setIngredients] = useState([]);
  const [measures, setMeasures] = useState([]);

  const location = useLocation();
  const path = location.pathname;
  const id = path.split('/')[3];
  const type = path.includes('comidas') ? 'meals' : 'drinks';
  const requisition = recipeTypeToggle(type, fetchFoodReq, fetchDrinkReq);
  const key = recipeTypeToggle(type, 'Meal', 'Drink');
  const recipeType = type === 'meals' ? 'meals' : 'cocktails';
  const history = useHistory();
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

  useEffect(() => {
    const inProgressRecipes = localStorage.getObj('inProgressRecipes');
    const paramObj = {
      inProgressRecipes,
      setUsedIngredients,
      usedIngredients,
      type,
      id,
    };
    handleStateAndStorage(paramObj);
  }, [id, type, setUsedIngredients, usedIngredients]);

  if (!detailsData || !ingredients) return <h3> Loading...</h3>;

  return (
    <section className="details-section">
      <div className="details-container">
        <img
          className="details-image"
          src={ detailsData[`str${key}Thumb`] }
          alt=""
          data-testid="recipe-photo"
          swidth="320"
          height="205"

        />
        <h3
          className="details-recipe-title"
          data-testid="recipe-title"
        >
          {detailsData[`str${key}`]}
        </h3>
        <h4 data-testid="recipe-category" className="in-progress-category">
          { key === 'Drink' && detailsData.strAlcoholic }
        </h4>
        <h4 data-testid="recipe-category" className="in-progress-category">
          { `Category - ${detailsData.strCategory}` }
        </h4>
        <ShareButton
          testId="share-btn"
          route={ path.split('/in-progress')[0] }
        />
        <FavoriteButton
          id={ id }
          type={ type === 'drinks' ? 'bebida' : 'comida' }
          area={ type === 'drinks' ? '' : detailsData.strArea }
          category={ detailsData.strCategory }
          alcoholicOrNot={ type === 'meals' ? '' : detailsData.strAlcoholic }
          name={ detailsData[`str${key}`] }
          image={ detailsData[`str${key}Thumb`] }
        />
        <div className="details-infos">
          { ingredients.map((ingredient, index) => (
            <p
              key={ ingredient }
              data-testid={ `${index}-ingredient-step` }
              className="details-ingredient"
            >
              <IngredientsCheckbox
                type={ type }
                id={ id }
                index={ index }
                ingredient={ ingredient }
              />
              {`${ingredient} - ${measures[index]}` }
            </p>)) }
          <p data-testid="instructions" className="instructions">
            { detailsData.strInstructions }
          </p>
        </div>
        <button
          type="button"
          data-testid="finish-recipe-btn"
          disabled={ (usedIngredients[recipeType] && usedIngredients[recipeType][id])
          && usedIngredients[recipeType][id].length !== ingredients.length }
          onClick={ () => history.push('/recipes-app/receitas-feitas') }
        >
          Finish Recipe
        </button>
      </div>
    </section>
  );
}

export default RecipeInProgress;
