import React, { useContext } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import RecipeCard from '../components/RecipeCard';
import FilterByCategoryButton from '../components/FilterByCategoryButton';
import Context from '../context/Context';
import FilterByAllButton from '../components/FilterByAllButton';
// import PropTypes from 'prop-types';

function FoodRecipes() {
  const { foodData, searchData } = useContext(Context);
  const lastRenderedMealIndex = 12;
  const lastRenderedCategoryIndex = 5;
  const receitasComidas = foodData[3]
    && foodData[3].items.meals.slice(0, lastRenderedMealIndex);
  const categoriasComidas = foodData[0]
    && foodData[0].items.meals.slice(0, lastRenderedCategoryIndex);
  const receitasCategoriasComidas = searchData.meals
    && searchData.meals.slice(0, lastRenderedMealIndex);
  const receitasSearchComidas = searchData.length
    && searchData.slice(0, lastRenderedMealIndex);

  return (
    <div>
      <Header title="Comidas" />
      { categoriasComidas && categoriasComidas.map((category) => (
        <FilterByCategoryButton category={ category } key={ category.strCategory } />
      )) }
      <FilterByAllButton />
      {searchData.length === 0
        && (receitasComidas && receitasComidas.map((meal, index) => (
          <RecipeCard
            key={ meal.idMeal }
            name={ meal.strMeal }
            thumb={ meal.strMealThumb }
            recipeIndex={ index }
            recipeId={ meal.idMeal }
          />
        ))) }

      {searchData.meals ? receitasCategoriasComidas.map((data, index) => (
        <RecipeCard
          key={ data.idMeal }
          name={ data.strMeal }
          thumb={ data.strMealThumb }
          recipeId={ data.idMeal }
          recipeIndex={ index }
        />
      )) : receitasSearchComidas && receitasSearchComidas.map((food, index) => (
        <RecipeCard
          key={ food.idMeal }
          name={ food.strMeal }
          thumb={ food.strMealThumb }
          recipeIndex={ index }
          recipeId={ food.idMeal }
        />
      ))}
      <Footer />
    </div>
  );
}

FoodRecipes.propTypes = {

};

export default FoodRecipes;
