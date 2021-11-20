import PropTypes from 'prop-types';
import React, { useContext, useEffect } from 'react';
import Context from '../context/Context';
import '../utils/index';

function IngredientsCheckbox({ type, id, index, ingredient }) {
  const {
    usedIngredients,
    setUsedIngredients,
  } = useContext(Context);

  const handleCheckbox = ({ target: { value } }) => {
    const inProgressRecipes = localStorage.getObj('inProgressRecipes');
    const recipeType = type === 'meals' ? 'meals' : 'cocktails';
    const isRecipeIngredientChecked = inProgressRecipes[recipeType][id]
      .includes(value);

    if (isRecipeIngredientChecked) {
      const filteredIngredientsStorage = inProgressRecipes[recipeType][id]
        .filter((ingredientElement) => ingredientElement !== value);
      const filteredIngredients = usedIngredients[recipeType][id]
        .filter((ingredientElement) => ingredientElement !== value);
      localStorage.setObj('inProgressRecipes', {
        ...inProgressRecipes,
        [recipeType]: {
          ...inProgressRecipes[recipeType],
          [id]: filteredIngredientsStorage,
        },
      });
      setUsedIngredients({
        ...usedIngredients,
        [recipeType]: {
          ...usedIngredients[recipeType],
          [id]: filteredIngredients,
        },
      });
    } else {
      localStorage.setObj('inProgressRecipes', {
        ...inProgressRecipes,
        [recipeType]: {
          ...inProgressRecipes[recipeType],
          [id]: [...inProgressRecipes[recipeType][id], value],
        },
      });
      setUsedIngredients({
        ...usedIngredients,
        [recipeType]: {
          ...usedIngredients[recipeType],
          [id]: [...usedIngredients[recipeType][id], value],
        },
      });
    }
  };

  useEffect(() => {
    const inProgressRecipes = localStorage.getObj('inProgressRecipes');
    setUsedIngredients(inProgressRecipes);
  }, [setUsedIngredients]);

  const recipeType = type === 'meals' ? 'meals' : 'cocktails';
  const checkedAttribute = {
    checked: 'checked',
  };

  if (usedIngredients[recipeType]
    && !(usedIngredients[recipeType][id].includes(ingredient))) {
    delete checkedAttribute.checked;
  }

  return (
    <input
      type="checkbox"
      id={ `ingredient-${index}-checkbox` }
      value={ ingredient }
      onClick={ handleCheckbox }
      checked={ usedIngredients[recipeType]
        && usedIngredients[recipeType][id].includes(ingredient) }
      { ...checkedAttribute }
    />
  );
}

IngredientsCheckbox.propTypes = {
  id: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  ingredient: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default IngredientsCheckbox;
