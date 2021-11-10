import React, { useContext } from 'react';
import Context from '../context/Context';

function FilterByAllButton() {
  const { setSearchData } = useContext(Context);
  return (
    <button
      type="button"
      data-testid="All-category-filter"
      onClick={ () => setSearchData([]) }
    >
      All
    </button>
  );
}

export default FilterByAllButton;
