import React, { useContext } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import RecipeCard from '../components/RecipeCard';
import CategoryButton from '../components/CategoryButton';
import Context from '../context/Context';
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

  return (
    <div>
      <Header title="Comidas" />
      { categoriasComidas && categoriasComidas.map((category) => (
        <CategoryButton category={ category } key={ category.strCategory } />
      )) }
      {!searchData.meals
        ? receitasComidas && receitasComidas.map((meal, index) => (
          <RecipeCard
            key={ meal.idMeal }
            name={ meal.strMeal }
            thumb={ meal.strMealThumb }
            recipeIndex={ index }
          />
        )) : receitasCategoriasComidas.map((data, index) => (
          <RecipeCard
            key={ data.idMeal }
            name={ data.strMeal }
            thumb={ data.strMealThumb }
            recipeIndex={ index }
          />
        ))}
      {console.log(searchData.length)}
      <Footer />
    </div>
  );
  // }
}

FoodRecipes.propTypes = {

};

export default FoodRecipes;
