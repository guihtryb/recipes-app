import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import IngredientsCard from '../components/IngredientsCard';
// import PropTypes from 'prop-types';

function ExploreFoodIngredientes() {
  return (
    <div>
      <Header title="Explorar Ingredientes" />
      <IngredientsCard type="meals" />
      <Footer />
    </div>
  );
}

export default ExploreFoodIngredientes;
