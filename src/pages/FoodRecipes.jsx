import React, { useContext } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import RecipeCard from '../components/RecipeCard';
import Context from '../context/Context';
// import PropTypes from 'prop-types';

function FoodRecipes() {
  const { foodData, searchData } = useContext(Context);
  const lastRenderedMealIndex = 12;
  const receitasComidas = foodData[3]
    && foodData[3].items.meals.slice(0, lastRenderedMealIndex);

  return (
    <div>
      <Header title="Comidas" />
      {!searchData.length ? receitasComidas && receitasComidas.map((meal, index) => (
        <RecipeCard
          key={ meal.idMeal }
          name={ meal.strMeal }
          thumb={ meal.strMealThumb }
          recipeIndex={ index }
        />
      )) : searchData.map((data, index) => (
        <RecipeCard
          key={ data.idMeal }
          name={ data.strMeal }
          thumb={ data.strMealThumb }
          recipeIndex={ index }
        />
      ))}
      <Footer />
    </div>
  );
  // }
}

FoodRecipes.propTypes = {

};

export default FoodRecipes;
