import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import { fetchDrinkReq, fetchFoodReq } from '../services/APIs';

function Details() {
  const [detailsData, setDetailsData] = useState([]);
  const location = useLocation();
  const path = location.pathname;
  const id = path.split('s/')[1];
  const type = path.includes('comidas') ? 'meals' : 'drinks';
  const requisition = type === 'meals' ? fetchFoodReq : fetchDrinkReq;

  useEffect(() => {
    const getRecipeDetails = async () => {
      const response = await requisition('lookup', 'i', id);
      const recipeDetails = response[type];
      setDetailsData(recipeDetails);
    };
    getRecipeDetails();
  }, [type, requisition, id]);

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
