import React from 'react';

function SearchBar() {
  return (
    <div>
      <input type="search" name="" id="" data-testid="search-input" />
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

export default SearchBar;
