import PropTypes from 'prop-types';
import React, { useEffect, useState, useContext } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import '../utils/index';
import Context from '../context/Context';

export default function RecipeStatusButton({ recipeId, type }) {
  const [visibilityStatus, setVisibilityStatus] = useState('hidden');
  const [recipeStatus, setRecipeStatus] = useState('Iniciar Receita');
  const key = type === 'meals' ? 'meals' : 'cocktails';
  const history = useHistory();
  const { pathname } = useLocation();
  const { setUsedIngredients } = useContext(Context);

  useEffect(() => {
    const doneRecipes = localStorage.getObj('doneRecipes');
    const inProgressRecipes = localStorage.getObj('inProgressRecipes');
    if (!doneRecipes) localStorage.setObj('doneRecipes', []);
    if (!inProgressRecipes) {
      localStorage.setObj('inProgressRecipes', {
        cocktails: {},
        meals: {},
      });
      setUsedIngredients({
        cocktails: {},
        meals: {},
      });
    }
  }, [setUsedIngredients]);
  useEffect(() => {
    const compareId = () => {
      const doneRecipes = localStorage.getObj('doneRecipes');
      const inProgress = localStorage
        .getObj('inProgressRecipes')[key][recipeId] !== undefined;
      const isDone = !doneRecipes.some((item) => item.id === recipeId);

      if (isDone) setVisibilityStatus('visible');
      if (inProgress) {
        setVisibilityStatus('visible');
        setRecipeStatus('Continuar Receita');
      }
    };
    compareId();
  }, [recipeId, key]);

  const handleClick = () => {
    if (recipeStatus === 'Iniciar Receita') {
      return history.push(`${pathname}/in-progress`);
    }
  };

  return (
    <div>
      <button
        type="button"
        data-testid="start-recipe-btn"
        className="details-start-recipe"
        style={ { visibility: visibilityStatus } }
        onClick={ () => handleClick() }
      >
        {recipeStatus}
      </button>
    </div>
  );
}

RecipeStatusButton.propTypes = {
  recipeId: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};
