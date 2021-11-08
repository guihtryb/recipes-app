import React, { useContext } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import RecipeCard from '../components/RecipeCard';
import Context from '../context/Context';
// import PropTypes from 'prop-types';

function DrinkRecipes() {
  const { drinkLists } = useContext(Context);
  const lastRenderedMealIndex = 12;
  const receitasBebidas = drinkLists[4]
    && drinkLists[4].items.drinks.slice(0, lastRenderedMealIndex);
  return (
    <div>
      <Header title="Bebidas" />
      {receitasBebidas && receitasBebidas.map((drink, index) => (
        <RecipeCard
          key={ drink.idDrink }
          name={ drink.strDrink }
          thumb={ drink.strDrinkThumb }
          recipeIndex={ index }
        />
      ))}
      <Footer />
    </div>
  );
}

export default DrinkRecipes;
