import React from 'react';
import { useLocation } from 'react-router';

function Details() {
  const location = useLocation();
  const path = location.pathname;
  const id = path.split('s/')[1];
  // criar função para o clique no card
  // passar id para a função
  // verificar tipo de comida (bebidas ou refeições)
  // refeições ? www.themealdb.com/api/json/v1/1/lookup.php?i=52772 : www.thecocktaildb.com/api/json/v1/1/lookup.php?i=11007;
  // setar detailsData
  // assim que o component montar
  //  work with data
  return (
    <div>
      Say hi
    </div>
  );
}

export default Details;
