import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../style/Perfil.css';

function Perfil() {
  const userEmail = localStorage.getItem('user') !== null
    ? JSON.parse(localStorage.getItem('user')).email : 'email';
  return (
    <section className="perfil-section">
      <div className="perfil-container">
        <Header title="Perfil" />
        <h2 className="user-email" data-testid="profile-email">{ userEmail }</h2>
        <div className="categories-container">
          <Link to="/recipes-app/receitas-feitas">
            <button
              type="button"
              data-testid="profile-done-btn"
            >
              Receitas Feitas
            </button>
          </Link>
          <Link to="/recipes-app/receitas-favoritas">
            <button
              type="button"
              data-testid="profile-favorite-btn"
            >
              Receitas Favoritas
            </button>
          </Link>
          <Link to="/recipes-app/">
            <button
              type="button"
              data-testid="profile-logout-btn"
              onClick={ () => localStorage.clear() }
            >
              Sair
            </button>
          </Link>
        </div>
        <Footer />
      </div>
    </section>
  );
}

export default Perfil;
