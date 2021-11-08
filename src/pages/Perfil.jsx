import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
// import PropTypes from 'prop-types';

function Perfil() {
  const userEmail = JSON.parse(localStorage.getItem('user')).email;
  return (
    <div>
      <Header title="Perfil" />
      <h2 data-testid="profile-email">{ userEmail }</h2>
      <button type="button" data-testid="profile-done-btn">Receitas Feitas</button>
      <button type="button" data-testid="profile-favorite-btn">Receitas Favoritas</button>
      <button type="button" data-testid="profile-logout-btn">Sair</button>
      <Footer />
    </div>
  );
}

export default Perfil;
