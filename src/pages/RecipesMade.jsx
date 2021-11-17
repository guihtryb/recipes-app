import React from 'react';
import Header from '../components/Header';
// import PropTypes from 'prop-types';

function RecipesMade() {
  return (
    <>
      <Header title="Receitas Feitas" />
      <div>
        <div>
          <button
            type="button"
            name="all"
            id="allID"
            data-testid="filter-by-all-btn"
          >
            All
          </button>
          <button
            type="button"
            name="food"
            id="foodID"
            data-testid="filter-by-food-btn"
          >
            Food
          </button>
          <button
            type="button"
            name="drinks"
            id="drinksID"
            data-testid="filter-by-drink-btn"
          >
            Drinks
          </button>
        </div>
        <div>
          Gerador de card das receitas feitas
        </div>
      </div>
    </>
  );
}

export default RecipesMade;
