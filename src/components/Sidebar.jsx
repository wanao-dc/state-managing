import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';

function Sidebar({ children }) {
  console.log('rendering Sidebar');
  return (
    <>
      <h1>Sidebar</h1>
      {children}
    </>
  );
}

Sidebar.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
export default Sidebar;
