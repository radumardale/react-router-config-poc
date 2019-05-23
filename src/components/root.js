import React from 'react';
import { renderRoutes } from 'react-router-config';
import { NavLink } from 'react-router-dom';

export default props => {
  const [isAuthenticated, toggleIsAuthenticated] = React.useState(true);
  return (
    <section>
      <header>
        <h1>Root component</h1>
        <nav>
          <NavLink to="/" exact activeClassName="selected-link">
            Home
          </NavLink>
          <NavLink to="/app" activeClassName="selected-link">
            Secured section
          </NavLink>
          <span>
            <input
              id="isAuthenticated"
              type="checkbox"
              checked={isAuthenticated}
              onChange={e => {
                toggleIsAuthenticated(!isAuthenticated);
              }}
            />
            <label htmlFor="isAuthenticated">is authenticated</label>
          </span>
        </nav>
      </header>
      <div>{renderRoutes(props.route.routes, { isAuthenticated })}</div>
    </section>
  );
};
