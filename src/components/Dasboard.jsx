import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';

function Dashboard({ user = [] }) {
  const { name } = user;
  console.log('rendering Dashboard');

  return (
    <h1>
      Dashboard of
      {' '}
      {name}
    </h1>
  );
}

Dashboard.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string,
  }).isRequired,
};

export default Dashboard;
