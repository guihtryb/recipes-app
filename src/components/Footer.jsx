import React from 'react';
import { Link } from 'react-router-dom';
import '../style/Footer.css';

export default function Footer() {
  return (
    <footer data-testid="footer">
      <Link
        to="/bebidas"
        data-testid="drinks-bottom-btn"
      >
        { ' ' }
      </Link>
      <Link
        to="/explorar"
        data-testid="explore-bottom-btn"
      >
        { ' ' }
      </Link>
      <Link
        to="/comidas"
        data-testid="food-bottom-btn"
      >
        { ' ' }
      </Link>
    </footer>
  );
}
