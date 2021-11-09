import React, { useContext } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Context from '../context/Context';
import RecipeCard from '../components/RecipeCard';
import { fetchFoodReq } from '../services/APIs';

// import PropTypes from 'prop-types';

function ExploreFoodArea() {
  const { foodData } = useContext(Context);
  const areaData = foodData[1];
  const maxLength = 12;
  const foodRecipes = foodData[3]
    && foodData[3].items.meals.slice(0, maxLength);

  const area = areaData ? areaData.items.meals : null;
  const searchArea = async (searchedArea) => {
    const newSearchData = await fetchFoodReq('filter', 'a', searchedArea);
    console.log(newSearchData);
  };

  if (!area) return <img src="https://media0.giphy.com/media/3o7bu8sRnYpTOG1p8k/giphy.gif?cid=ecf05e4739n2hlkxm6a8ymnheguv7bxk3f5m6wag9ocwigzy&rid=giphy.gif&ct=g" alt="" />;
  return (
    <div>
      <Header title="Explorar Origem" />
      <select className="area-dropdown" data-testid="explore-by-area-dropdown" onChange={ ({ target }) => searchArea(target.value) }>
        { area.map((item) => (
          <option
            data-testid={ `${item.strArea}-option` }
            key={ item.strArea }
            value={ item.strArea }
          >
            { `${item.strArea}` }
          </option>
        )) }
      </select>
      {foodRecipes.map((meal, index) => (
        index < maxLength
        && <RecipeCard
          key={ meal.idMeal }
          name={ meal.strMeal }
          thumb={ meal.strMealThumb }
          recipeIndex={ index }
        />))}
      <Footer />
    </div>
  );
}

export default ExploreFoodArea;
