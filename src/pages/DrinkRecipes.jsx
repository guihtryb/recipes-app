import React, { useContext } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import RecipeCard from '../components/RecipeCard';
import FilterByCategoryButton from '../components/FilterByCategoryButton';
import FilterByAllButton from '../components/FilterByAllButton';
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
  const receitasSearchBebidas = searchData.length
    && searchData.slice(0, lastRenderedDrinkIndex);
  return (
    <div>
      <Header title="Bebidas" />
      { categoriasBebidas && categoriasBebidas.map((category) => (
        <FilterByCategoryButton category={ category } key={ category.strCategory } />
      )) }
      <FilterByAllButton />
      {searchData.length === 0
        && (receitasBebidas && receitasBebidas.map((bebida, index) => (
          <RecipeCard
            key={ bebida.idDrink }
            name={ bebida.strDrink }
            thumb={ bebida.strDrinkThumb }
            recipeIndex={ index }
          />
        ))) }
      {searchData.drinks ? receitasCategoriasBebidas.map((drink, index) => (
        <RecipeCard
          key={ drink.idDrink }
          name={ drink.strDrink }
          thumb={ drink.strDrinkThumb }
          recipeIndex={ index }
        />
      )) : receitasSearchBebidas && receitasSearchBebidas.map((data, index) => (
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
