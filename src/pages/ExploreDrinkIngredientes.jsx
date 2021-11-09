import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
// import PropTypes from 'prop-types';
import IngredientsCard from '../components/IngredientsCard';

function ExploreDrinkIngredientes() {
  return (
    <div>
      <Header title="Explorar Ingredientes" />
      <IngredientsCard type="drinks" mainRote="bebidas" />
      <Footer />
    </div>
  );
}

export default ExploreDrinkIngredientes;
