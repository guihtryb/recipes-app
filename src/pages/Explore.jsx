import React from 'react';
import { Redirect } from 'react-router-dom';

function Explore() {
  return (
    <>
      <button
        type="button"
        onClick={ () => <Redirect to="/explorar/comidas" /> }
      >
        Explorar Comidas
      </button>
      <button type="button">Explorar Bebidas</button>
    </>
  );
}

export default Explore;
