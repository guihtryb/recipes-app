import React, { useEffect } from 'react';
import { useLocation } from 'react-router';
import { fetchDrinkReq, fetchFoodReq } from '../services/APIs';

function Details() {
  const location = useLocation();
  const path = location.pathname;
  const id = path.split('s/')[1];
  const type = path.includes('comidas') ? 'comidas' : 'bebidas';
  const requisition = type === 'comidas' ? fetchFoodReq : fetchDrinkReq;

  useEffect(() => {
    const getRecipeDetails = async () => {
      const recipeDetails = await requisition('lookup', 'i', id);
    };
    getRecipeDetails();
  }, [requisition, id]);
  // criar função para a manotagem do componente
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
