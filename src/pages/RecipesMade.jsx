import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import '../utils/index';
import ShareButton from '../components/ShareButton';
import '../style/RecipesMade.css';
import FavoriteButton from '../components/FavoriteButton';

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
  console.log(recipesToRender);

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
      { recipesToRender && recipesToRender.map((recipe, index) => (
        <div className="recipe-made-card" key={ recipe.id }>
          <Link to={ `${recipe.type}s/${recipe.id}` }>
            <div className="recipe-made-infos-container">
              <div className="recipe-made-tags-and-image" key={ recipe.id }>
                {recipe.tags.map((tags, i) => (
                  <div
                    data-testid={ `${index}-${tags}-horizontal-tag` }
                    key={ `${i} ${recipe.id}` }
                    className="recipe-made-tags"
                  >
                    {tags}
                  </div>))}
                <img
                  className="recipe-made-image"
                  src={ recipe.image }
                  alt=""
                  data-testid={ `${index}-horizontal-image` }
                  width="320"
                  height="205"
                />
              </div>
              <div className="recipe-made-infos">
                <p
                  data-testid={ `${index}-horizontal-top-text` }
                >
                  { recipe.type === 'comida'
                    ? `${recipe.area} - ${recipe.category}` : `${recipe.category}` }
                  {recipe.alcoholicOrNot}
                </p>
                <h3
                  data-testid={ `${index}-horizontal-name` }
                  className="recipe-made-title"
                >
                  {recipe.name}
                </h3>
                <h3
                  data-testid={ `${index}-horizontal-done-date` }
                  className="recipe-made-date"
                >
                  {recipe.doneDate}
                </h3>
              </div>
            </div>

          </Link>
          <div className="recipes-made-buttons">
            <ShareButton
              testId={ `${index}-horizontal-share-btn` }
              route={ `/recipes-app/${recipe.type}s/${recipe.id}` }
            />
            <FavoriteButton
              id={ recipe.id }
              type={ recipe.type }
              area={ recipe.type === 'bebida' ? '' : recipe.area }
              category={ recipe.category }
              alcoholicOrNot={ recipe.type === 'comida' ? '' : recipe.alcoholicOrNot }
              name={ recipe.name }
              image={ recipe.image }
            />
          </div>
        </div>
      ))}
    </section>
  );
}

export default RecipesMade;
