import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Context from '../context/Context';
import drinkIcon from '../images/drinkIcon.svg';
import exploreIcon from '../images/exploreIcon.svg';
import mealIcon from '../images/mealIcon.svg';
import '../style/Footer.css';

export default function Footer() {
  const { setSearchData } = useContext(Context);
  const clearSearchData = () => {
    setSearchData([]);
  };

  return (
    <footer data-testid="footer" className="footer-menu">
      <Link
        to="/recipes-app/bebidas"
        data-testid="drinks-bottom-btn"
        src={ drinkIcon }
        onClick={ clearSearchData }
      >
        <img src={ drinkIcon } alt="drink-icon" />
      </Link>
      <Link
        to="/recipes-app/explorar"
        data-testid="explore-bottom-btn"
        src={ exploreIcon }
        onClick={ clearSearchData }
      >
        <img src={ exploreIcon } alt="drink-icon" />
      </Link>
      <Link
        to="/recipes-app/comidas"
        data-testid="food-bottom-btn"
        src={ mealIcon }
        onClick={ clearSearchData }
      >
        <img src={ mealIcon } alt="drink-icon" />
      </Link>
    </footer>
  );
}
