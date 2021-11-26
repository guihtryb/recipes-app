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
    if (!recipes) localStorage.setObj('doneRecipes', []);
    if (filter === 'all') {
      setRecipesToRender(recipes);
    } else {
      const filteredRecipes = recipes.filter((recipe) => recipe.type === filter);
      setRecipesToRender(filteredRecipes);
    }
  }, [filter]);

  return (
    <section className="explore-food-section">
      <Header title="Receitas Feitas" />
      <div className="categories-container">
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
        { recipesToRender && recipesToRender.map((recipe, index) => (
          <div
            key={ recipe.id }
          >
            {recipe.tags.map((tags, indexx) => (
              <div
                data-testid={ `${index}-${tags}-horizontal-tag` }
                key={ `${indexx} ${recipe.id}` }
              >
                {tags}
              </div>))}
            <Link to={ `/${recipe.type}s/${recipe.id}` }>
              <img
                className="details-image"
                src={ recipe.image }
                alt=""
                data-testid={ `${index}-horizontal-image` }
                width="320"
                height="205"
              />
            </Link>
            <p
              data-testid={ `${index}-horizontal-top-text` }
            >
              {`${recipe.area} - ${recipe.category}`}
              {recipe.alcoholicOrNot}
            </p>
            <Link to={ `/${recipe.type}s/${recipe.id}` }>
              <p
                data-testid={ `${index}-horizontal-name` }
              >
                {recipe.name}
              </p>
            </Link>
            <p
              data-testid={ `${index}-horizontal-done-date` }
            >
              {recipe.doneDate}
            </p>
            <ShareButton
              testId={ `${index}-horizontal-share-btn` }
              route={ `/${recipe.type}s/${recipe.id}` }
            />

          </div>))}
      </div>
    </section>
  );
}

export default RecipesMade;
