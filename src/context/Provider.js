import React from 'react';
import PropTypes from 'prop-types';
import Context from './Context';

function Provider({ children }) {
  return (
    <Context.Provider value={ { data, isLoading } }>
      {children}
    </Context.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
