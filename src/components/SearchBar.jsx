import React from 'react';
import PropTypes from 'prop-types';

export default function SearchBar({ setSearchText, searchText, setCheckValue }) {
  return (
    <form>
      <input
        type="text"
        onChange={ (e) => setSearchText(e.target.value) }
        value={ searchText }
        data-testid="search-input"
      />
      <div
        onChange={ (e) => setCheckValue(e.target.value) }
      >
        <label htmlFor="ingredientID">
          <input
            type="radio"
            value="i"
            name="searchBar"
            id="ingredientID"
            data-testid="ingredient-search-radio"
          />
          Ingrediente
        </label>
        <label htmlFor="nameID">

          <input
            type="radio"
            value="s"
            name="searchBar"
            id="nameID"
            data-testid="name-search-radio"
          />
          Nome
        </label>
        <label htmlFor="firstID">
          <input
            type="radio"
            value="a"
            name="searchBar"
            id="firstID"
            data-testid="first-letter-search-radio"
          />
          Primeira letra
        </label>

      </div>

      <button
        type="button"
        data-testid="exec-search-btn"
      >
        Buscar
      </button>
    </form>
  );
}

SearchBar.propTypes = {
  setSearchText: PropTypes.func.isRequired,
  setCheckValue: PropTypes.func.isRequired,
  searchText: PropTypes.string.isRequired,
};
