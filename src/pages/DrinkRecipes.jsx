import React, { useContext } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import RecipeCard from '../components/RecipeCard';
import CategoryButton from '../components/CategoryButton';
import Context from '../context/Context';
// import PropTypes from 'prop-types';

function DrinkRecipes() {
  const { drinkLists, searchData } = useContext(Context);
  const lastRenderedDrinkIndex = 12;
  const lastRenderedCategoryIndex = 5;
  const receitasBebidas = drinkLists[4]
    && drinkLists[4].items.drinks.slice(0, lastRenderedDrinkIndex);
  const categoriasBebidas = drinkLists[0]
    && drinkLists[0].items.drinks.slice(0, lastRenderedCategoryIndex);
  const receitasCategoriasBebidas = searchData.drinks
    && searchData.drinks.slice(0, lastRenderedDrinkIndex);
  return (
    <div>
      <Header title="Bebidas" />
      { categoriasBebidas && categoriasBebidas.map((category) => (
        <CategoryButton category={ category } key={ category.strCategory } />
      )) }
      {!searchData.drinks ? receitasBebidas && receitasBebidas.map((drink, index) => (
        <RecipeCard
          key={ drink.idDrink }
          name={ drink.strDrink }
          thumb={ drink.strDrinkThumb }
          recipeIndex={ index }
        />
      )) : receitasCategoriasBebidas.map((data, index) => (
        index < lastRenderedDrinkIndex && <RecipeCard
          key={ data.idDrink }
          name={ data.strDrink }
          thumb={ data.strDrinkThumb }
          recipeIndex={ index }
        />
      ))}
      <Footer />
    </div>
  );
}

export default DrinkRecipes;
