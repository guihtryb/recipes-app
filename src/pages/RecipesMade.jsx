import React from 'react';
import Header from '../components/Header';
// import PropTypes from 'prop-types';

/* [{
  id: id-da-receita,
  type: comida-ou-bebida,
  area: area-da-receita-ou-texto-vazio,
  category: categoria-da-receita-ou-texto-vazio,
  alcoholicOrNot: alcoholic-ou-non-alcoholic-ou-texto-vazio,
  name: nome-da-receita,
  image: imagem-da-receita
}] */

/*
                objReceita.tags.reduce(
                  (acc, tags) => (` ${acc}`),
                  '')  */

function RecipesMade() {
  const tavaNoLocalStored = JSON.parse(localStorage.getItem('doneRecipes'));
  console.log(tavaNoLocalStored);
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

          { tavaNoLocalStored.map((objReceita, index) => (
            <div
              key={ objReceita.id }
            >
              {objReceita.tags.map((tags, indexx) => (
                <div
                  data-testid={ `${index}-${tags}-horizontal-tag` }
                  key={ `${indexx} ${objReceita.id}` }

                />))}
              <img
                className="details-image"
                src={ objReceita.image }
                alt=""
                data-testid={ `${index}-horizontal-image` }
                swidth="320"
                height="205"

              />
              <p
                data-testid={ `${index}-horizontal-top-text` }
              >
                {objReceita.category}
              </p>
              <p
                data-testid={ `${index}-horizontal-name` }
              >
                {objReceita.name}
              </p>
              <p
                data-testid={ `${index}-horizontal-done-date` }
              >
                {objReceita.doneDate}
              </p>
              <button
                type="button"
                data-testid={ `${index}-horizontal-share-btn` }
              >
                compartilha
              </button>

            </div>))}

          Gerador de card das receitas feitas
        </div>
      </div>
    </>
  );
}

export default RecipesMade;
