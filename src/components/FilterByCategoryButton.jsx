import PropTypes from 'prop-types';
import React, { useContext, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { fetchFoodReq, fetchDrinkReq } from '../services/APIs';
import Context from '../context/Context';

function CategoryButton(props) {
  const { category } = props;
  const { setSearchData } = useContext(Context);
  const [currentCategory, setCurrentCategory] = useState({
    [category.strCategory]: true,
  });
  const location = useLocation();
  const handleClick = async ({ target: { value } }) => {
    if (currentCategory[value] === false) {
      setCurrentCategory({
        [value]: !currentCategory[value],
      });
      return setSearchData([]);
    }
    const filteredByCategoryRecipes = location.pathname === '/recipes-app/comidas'
      ? await fetchFoodReq('filter', 'c', value)
      : await fetchDrinkReq('filter', 'c', value);

    setSearchData(filteredByCategoryRecipes);
    setCurrentCategory({
      [value]: !currentCategory[value],
    });
  };

  return (
    <button
      type="button"
      data-testid={ `${category.strCategory}-category-filter` }
      value={ category.strCategory }
      onClick={ handleClick }
    >
      { category.strCategory }
    </button>
  );
}

CategoryButton.propTypes = {
  category: PropTypes.shape({
    strCategory: PropTypes.string.isRequired,
  }).isRequired,
};

export default CategoryButton;
