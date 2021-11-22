import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import searchIcon from '../images/searchIcon.svg';
import profileIcon from '../images/profileIcon.svg';
import SearchBar from './SearchBar';
import '../utils/index';
import '../style/Header.css';

export default function Header({ title }) {
  const [redirect, setRedirect] = useState(false);
  const [searchBar, setSearchBar] = useState(false);
  const [isExploring, setIsExploring] = useState(false);

  useEffect(() => {
    if (title.includes('Explorar')) setIsExploring(true);
    if (title.includes('Receitas')) setIsExploring(true);
    if (title.includes('Perfil')) setIsExploring(true);
    if (title.includes('Origem')) setIsExploring(false);
  }, [title]);

  if (redirect) return <Redirect to="/perfil" />;

  return (
    <header className={ !searchBar ? 'header-container' : 'header-container-expanded' }>
      <button
        type="button"
        onClick={ () => setRedirect(true) }
        className="profile-btn"
      >
        <img
          src={ profileIcon }
          alt="Perfil"
          data-testid="profile-top-btn"
        />
      </button>
      <p
        data-testid="page-title"
        className="page-title"
      >
        {title}
      </p>
      {!isExploring
        && (
          <button
            type="button"
            className="search-btn"
            onClick={ () => setSearchBar(!searchBar) }
          >
            <img src={ searchIcon } alt="Buscar" data-testid="search-top-btn" />
          </button>)}
      {
        searchBar && (
          <SearchBar
            title={ title }
          />)
      }
    </header>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
};
