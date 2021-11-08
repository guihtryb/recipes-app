import React from 'react';
import PropTypes from 'prop-types';

export default function SearchBar({ setSearchText, searchText }) {
  return (
    <div>
      <input
        type="text"
        onChange={ (e) => setSearchText(e.target.value) }
        value={ searchText }
        data-testid="search-input"
      />
      <input type="radio" name="" id="" data-testid="ingredient-search-radio" />
      <input type="radio" name="" id="" data-testid="name-search-radio" />
      <input type="radio" name="" id="" data-testid="first-letter-search-radio" />

      <button
        type="button"
        data-testid="exec-search-btn"
      >
        Buscar
      </button>
    </div>
  );
}

SearchBar.propTypes = {
  setSearchText: PropTypes.func.isRequired,
  searchText: PropTypes.string.isRequired,
};
