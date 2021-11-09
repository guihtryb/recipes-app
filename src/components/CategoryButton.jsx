import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { fetchFoodReq, fetchDrinkReq } from '../services/APIs';
import Context from '../context/Context';

function CategoryButton(props) {
  const { category } = props;
  const { setSearchData } = useContext(Context);

  // https://stackoverflow.com/questions/42253277/react-router-v4-how-to-get-current-route
  const location = useLocation();

  const handleClick = async ({ target: { value } }) => {
    const filteredByCategoryRecipes = location.pathname === '/comidas'
      ? await fetchFoodReq('filter', 'c', value)
      : await fetchDrinkReq('filter', 'c', value);

    setSearchData(filteredByCategoryRecipes);
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
