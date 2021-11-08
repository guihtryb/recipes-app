import React from 'react';
import { Redirect } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Explore() {
  return (
    <div>
      <Header title="Explorar" />
      <Footer />
      <button
        type="button"
        onClick={ () => <Redirect to="/explorar/comidas" /> }
      >
        Explorar Comidas
      </button>
      <button type="button">Explorar Bebidas</button>
    </div>
  );
}

export default Explore;
