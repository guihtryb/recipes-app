import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import Carousel from 'react-multi-carousel';
import Context from '../context/Context';
import RecipeCard from '../components/RecipeCard';
import 'react-multi-carousel/lib/styles.css';

// https://www.npmjs.com/package/react-multi-carousel
const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2,
  },
};

function RecommendationCarousel({ type }) {
  const { foodData, drinkLists } = useContext(Context);

  if (!foodData.length > 0 || !drinkLists.length > 0) return <h3>Loading</h3>;

  const lastRenderedRecipeIndex = 6;
  const recipes = type === 'meals'
    ? drinkLists[4].items.drinks.slice(0, lastRenderedRecipeIndex)
    : foodData[3].items.meals.slice(0, lastRenderedRecipeIndex);
  const correctKey = type !== 'meals' ? 'Meal' : 'Drink';

  return (
    <Carousel responsive={ responsive }>
      { recipes.map((recipe, index) => (
        <RecipeCard
          key={ recipe[`id${correctKey}`] }
          name={ recipe[`str${correctKey}`] }
          thumb={ recipe[`str${correctKey}Thumb`] }
          recipeIndex={ index }
          recipeId={ recipe[`id${correctKey}`] }
          recipeRecommendation
        />
      ))}
    </Carousel>
  );
}

RecommendationCarousel.propTypes = {
  type: PropTypes.string.isRequired,
};

export default RecommendationCarousel;
