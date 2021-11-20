import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Context from './Context';
import { AppData } from '../services/APIs';

function Provider({ children }) {
  const [searchData, setSearchData] = useState([]);
  const [foodData, setFoodData] = useState([]);
  const [drinkLists, setDrinkLists] = useState([]);
<<<<<<< HEAD
  const [usedIngredients, setUsedIngredients] = useState([]);
=======
  const [favoritesData, setFavoritesData] = useState([]);
>>>>>>> 262878fa4cdbe99f96195dab8e2111c4febb9548

  useEffect(() => {
    const loadFoodData = async () => {
      const food = await AppData.getFoodData();
      setFoodData(food);
    };
    loadFoodData();
  }, []);

  useEffect(() => {
    const loadDrinkLists = async () => {
      const lists = await AppData.getDrinkLists();
      setDrinkLists(lists);
    };
    loadDrinkLists();
  }, []);

  const contextValue = {
    foodData,
    drinkLists,
    searchData,
    setSearchData,
<<<<<<< HEAD
    usedIngredients,
    setUsedIngredients,
=======
    favoritesData,
    setFavoritesData,
>>>>>>> 262878fa4cdbe99f96195dab8e2111c4febb9548
  };

  return (
    <Context.Provider value={ contextValue }>
      { children }
    </Context.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
