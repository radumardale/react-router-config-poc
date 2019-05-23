import React from 'react';
import { Redirect } from 'react-router-dom';

const secureRoute = Component => props => {
  const { isAuthenticated } = props;
  return isAuthenticated ? (
    <Component {...props} />
  ) : (
    <Redirect to="/unauthorized" />
  );
};

export default secureRoute;
