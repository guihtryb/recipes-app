import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import searchIcon from '../images/searchIcon.svg';
import profileIcon from '../images/profileIcon.svg';
import SearchBar from './SearchBar';
import { fetchDrinkReq, fetchFoodReq } from '../services/APIs';

export default function Header({ title }) {
  const [redirect, setRedirect] = useState(false);
  const [searchBar, setSearchBar] = useState(false);
  const [searchText, setSearchText] = useState('');
  const [isExploring, setIsExploring] = useState(false);
  const [checkValue, setCheckValue] = useState('');
  const [searchData, setSearchData] = useState([]);

  const handleSearch = async (type, option, search) => {
    if (title === 'Comidas') {
      const data = await fetchFoodReq(type, option, search);
      setSearchData(data);
    }
    if (title === 'Bebidas') {
      const data = await fetchDrinkReq(type, option, search);
      setSearchData(data);
    }
  };

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
            setCheckValue={ setCheckValue }
            checkValue={ checkValue }
            handleSearch={ handleSearch }
            searchData={ searchData }
          />)
      }

    </header>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
};
