import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import LinkButton from '../components/LinkButton';
// import PropTypes from 'prop-types';

function ExploreDrink() {
  return (
    <div>
      <Header title="Explorar Bebidas" />
      <div>
        <LinkButton
          text="Por Ingredientes"
          testid="explore-by-ingredient"
          linkTo="/explorar/bebidas/ingredientes"
        />

        <LinkButton
          text="Me Surpreenda!"
          testid="explore-surprise"
          linkTo="/explorar/bebidas/ingredientes"
        />

      </div>
      <Footer />
    </div>
  );
}

export default ExploreDrink;
