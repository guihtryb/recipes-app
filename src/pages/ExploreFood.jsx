import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import LinkButton from '../components/LinkButton';
// import PropTypes from 'prop-types';

function ExploreFood() {
  return (
    <div>
      <Header title="Explorar Comidas" />
      <div>
        <LinkButton
          text="Por Ingredientes"
          testid="explore-by-ingredient"
          linkTo="/explorar/comidas/ingredientes"
        />
        <LinkButton
          text="Por Local de Origem"
          testid="explore-by-area"
          linkTo="/explorar/comidas/ingredientes"
        />
        <LinkButton
          text="Me Surpreenda!"
          testid="explore-surprise"
          linkTo="/explorar/comidas/ingredientes"
        />
      </div>
      <Footer />
    </div>
  );
}

export default ExploreFood;
