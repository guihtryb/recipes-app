import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import IngredientsCard from '../components/IngredientsCard';
// import PropTypes from 'prop-types';

function ExploreFoodIngredientes() {
  return (
    <div className="explore-wrapper">
      <Header title="Explorar Ingredientes" />
      <IngredientsCard type="meals" mainRote="comidas" />
      <Footer />
    </div>
  );
}

export default ExploreFoodIngredientes;
