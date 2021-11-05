import React from 'react';
import { Link } from 'react-router-dom';
import drinkIcon from '../images/drinkIcon.svg';
import exploreIcon from '../images/exploreIcon.svg';
import mealIcon from '../images/mealIcon.svg';
import '../style/Footer.css';

export default function Footer() {
  return (
    <footer data-testid="footer" className="footer-menu">
      <Link
        to="/bebidas"
        data-testid="drinks-bottom-btn"
        src={ drinkIcon }
      >
        <img src={ drinkIcon } alt="drink-icon" />
      </Link>
      <Link
        to="/explorar"
        data-testid="explore-bottom-btn"
        src={ exploreIcon }
      >
        <img src={ exploreIcon } alt="drink-icon" />
      </Link>
      <Link
        to="/comidas"
        data-testid="food-bottom-btn"
        src={ mealIcon }
      >
        <img src={ mealIcon } alt="drink-icon" />
      </Link>
    </footer>
  );
}
