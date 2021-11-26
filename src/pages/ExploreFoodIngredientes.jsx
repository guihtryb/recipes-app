import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import IngredientsCard from '../components/IngredientsCard';

function ExploreFoodIngredientes() {
  return (
    <section className="explore-ingredients-section">
      <div className="explore-wrapper">
        <Header title="Explorar Ingredientes" />
        <IngredientsCard type="meals" mainRote="comidas" />
        <Footer />
      </div>
    </section>
  );
}

export default ExploreFoodIngredientes;
