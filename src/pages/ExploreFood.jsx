import React from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import LinkButton from '../components/LinkButton';
import { fetchRandomRecipe } from '../services/APIs';
// import PropTypes from 'prop-types';

function ExploreFood() {
  const history = useHistory();
  const randomRecipe = async () => {
    const randomId = (await fetchRandomRecipe('comidas')).meals[0].idMeal;
    history.push(`/recipes-app/comidas/${randomId}`);
  };
  return (
    <div className="explore-wrapper">
      <Header title="Explorar Comidas" />
      <div className="categories-container">
        <LinkButton
          text="Por Ingredientes"
          testid="explore-by-ingredient"
          linkTo="/recipes-app/explorar/comidas/ingredientes"
        />
        <LinkButton
          text="Por Local de Origem"
          testid="explore-by-area"
          linkTo="/recipes-app/explorar/comidas/area"
        />
        <button
          type="button"
          data-testid="explore-surprise"
          onClick={ randomRecipe }
        >
          Me Surpreenda!
        </button>
      </div>
      <Footer />
    </div>
  );
}

export default ExploreFood;
