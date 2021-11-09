import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Context from './Context';
import { AppData } from '../services/APIs';

function Provider({ children }) {
  const [searchData, setSearchData] = useState([]);
  const [foodData, setFoodData] = useState([]);
  const [drinkLists, setDrinkLists] = useState([]);

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
