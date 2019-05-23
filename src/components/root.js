import React from 'react';
import { renderRoutes } from 'react-router-config';
import { NavLink } from 'react-router-dom';

export default props => {
  console.log('props = ', props);
  return (
    <section>
      <header>
        <h1>Root component</h1>
        <nav>
          <NavLink to="/" exact activeClassName="selected-link">
            Home
          </NavLink>
          <NavLink to="/app" exact activeClassName="selected-link">
            Secured section
          </NavLink>
        </nav>
      </header>
      <div>{renderRoutes(props.route.routes)}</div>
    </section>
  );
};
