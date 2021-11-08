import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import searchIcon from '../images/searchIcon.svg';
import profileIcon from '../images/profileIcon.svg';
import SearchBar from './SearchBar';

export default function Header({ title }) {
  const [redirect, setRedirect] = useState(false);
  const [searchBar, setSearchBar] = useState(false);
  const [searchText, setSearchText] = useState('');
  const [isExploring, setIsExploring] = useState(false);

  useEffect(() => {
    if (title.includes('Explorar')) setIsExploring(true);
    if (title.includes('Receitas')) setIsExploring(true);
    if (title.includes('Perfil')) setIsExploring(true);
    if (title.includes('Origem')) setIsExploring(false);
    // if (title.includes('Favoritas')) setIsExploring(true);
  }, [title]);

  if (redirect) return <Redirect to="/perfil" />;

  return (
    <header>
      <button
        type="button"
        onClick={ () => setRedirect(true) }
      >
        <img
          src={ profileIcon }
          alt="Perfil"
          data-testid="profile-top-btn"
        />
      </button>

      <p data-testid="page-title">{title}</p>

      {!isExploring
        && (
          <button
            type="button"
            onClick={ () => setSearchBar(!searchBar) }
          >
            <img src={ searchIcon } alt="Buscar" data-testid="search-top-btn" />
          </button>)}

      {
        searchBar && (
          <SearchBar
            setSearchText={ setSearchText }
            searchText={ searchText }
          />)
      }

    </header>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
};
