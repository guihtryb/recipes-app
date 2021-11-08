import React, { useState } from 'react';
import PropTypes from 'prop-types';

export default function SearchBar({
  setSearchText, searchText, checkValue, setCheckValue, handleSearch }) {
  const [type, setType] = useState('');

  const searchRecipes = ({ target }, option) => {
    const text = target.value;
    if (option === 'f' && text.length > 1) {
      global.alert('Texto deve conter apenas uma letra!');
    }
    setSearchText(target.value);
  };

  return (
    <form>
      <input
        type="text"
        onChange={ (e) => searchRecipes(e, checkValue) }
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
            onClick={ () => setType('filter') }
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
            onClick={ () => setType('search') }
            id="nameID"
            data-testid="name-search-radio"
          />
          Nome
        </label>
        <label htmlFor="firstID">
          <input
            type="radio"
            value="f"
            name="searchBar"
            onClick={ () => setType('search') }
            id="firstID"
            data-testid="first-letter-search-radio"
          />
          Primeira letra
        </label>
      </div>
      <button
        type="button"
        data-testid="exec-search-btn"
        onClick={ () => handleSearch(type, checkValue, searchText) }
      >
        Buscar
      </button>
    </form>
  );
}

SearchBar.propTypes = {
  setSearchText: PropTypes.func.isRequired,
  setCheckValue: PropTypes.func.isRequired,
  handleSearch: PropTypes.func.isRequired,
  checkValue: PropTypes.string.isRequired,
  searchText: PropTypes.string.isRequired,
};
