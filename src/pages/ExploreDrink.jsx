import React from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import LinkButton from '../components/LinkButton';
import { fetchRandomRecipe } from '../services/APIs';
// import PropTypes from 'prop-types';

function ExploreDrink() {
  const history = useHistory();
  const randomRecipe = async () => {
    const randomId = (await fetchRandomRecipe('bebidas')).drinks[0].idDrink;
    history.push(`/bebidas/${randomId}`);
  };

  return (
    <div className="explore-wrapper">
      <Header title="Explorar Bebidas" />
      <div className="categories-container">
        <LinkButton
          text="Por Ingredientes"
          testid="explore-by-ingredient"
          linkTo="/explorar/bebidas/ingredientes"
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

export default ExploreDrink;
