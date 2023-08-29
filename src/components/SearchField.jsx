import React, { useState } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';

function SearchField({ user }) {
  const [searchTerm, setSearchTerm] = useState(user.name);

  const handleOnChange = (newSearchTerm) => {
    setSearchTerm(newSearchTerm.target.value);
  };
  console.log('rendering SearchField');
  return (
    <input onChange={handleOnChange} value={searchTerm} />
  );
}

SearchField.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string,
  }).isRequired,
};
export default SearchField;
