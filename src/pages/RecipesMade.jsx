import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import '../utils/index';
import ShareButton from '../components/ShareButton';

function RecipesMade() {
  const [recipesToRender, setRecipesToRender] = useState([]);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    const recipes = localStorage.getObj('doneRecipes');
    if (filter === 'all') {
      setRecipesToRender(recipes);
    } else {
      const filteredRecipes = recipes.filter((recipe) => recipe.type === filter);
      setRecipesToRender(filteredRecipes);
    }
  }, [filter]);

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
            onClick={ () => setFilter('all') }
          >
            All
          </button>
          <button
            type="button"
            name="food"
            id="foodID"
            data-testid="filter-by-food-btn"
            onClick={ () => setFilter('comida') }
          >
            Food
          </button>
          <button
            type="button"
            name="drinks"
            id="drinksID"
            data-testid="filter-by-drink-btn"
            onClick={ () => setFilter('bebida') }
          >
            Drinks
          </button>
        </div>
        <div>

          { recipesToRender.map((objReceita, index) => (
            <div
              key={ objReceita.id }
            >
              {objReceita.tags.map((tags, indexx) => (
                <div
                  data-testid={ `${index}-${tags}-horizontal-tag` }
                  key={ `${indexx} ${objReceita.id}` }

                >
                  {tags}
                </div>))}
              <Link to={ `/${objReceita.type}s/${objReceita.id}` }>
                <img
                  className="details-image"
                  src={ objReceita.image }
                  alt=""
                  data-testid={ `${index}-horizontal-image` }
                  swidth="320"
                  height="205"

                />
              </Link>
              <p
                data-testid={ `${index}-horizontal-top-text` }
              >
                {`${objReceita.area} - ${objReceita.category}`}
                {objReceita.alcoholicOrNot}
              </p>
              <Link to={ `/${objReceita.type}s/${objReceita.id}` }>
                <p
                  data-testid={ `${index}-horizontal-name` }
                >
                  {objReceita.name}
                </p>
              </Link>
              <p
                data-testid={ `${index}-horizontal-done-date` }
              >
                {objReceita.doneDate}
              </p>
              <ShareButton
                testId={ `${index}-horizontal-share-btn` }
                route={ `/${objReceita.type}s/${objReceita.id}` }
              />

            </div>))}

          Gerador de card das receitas feitas
        </div>
      </div>
    </>
  );
}

export default RecipesMade;
