import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';

function SearchField({ searchTerm, onChange = (f) => f }) {
  console.log('rendering SearchField');
  return (
    <input onChange={onChange} value={searchTerm} />
  );
}

SearchField.propTypes = {
  searchTerm: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
export default SearchField;
