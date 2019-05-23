import React from 'react';
import { renderRoutes } from 'react-router-config';
import { NavLink } from 'react-router-dom';

export default props => {
  const branch = props.route.routes;

  // componentDidMount
  React.useEffect(() => {
    branch.forEach(what => {
      what.component.preload();
    });
  }, []);

  return (
    <section>
      <header>
        <h2>This is a secured page</h2>
        <nav>
          <NavLink to="/app/child" exact activeClassName="selected-link">
            Child 1
          </NavLink>
          <NavLink to="/app/child1" exact activeClassName="selected-link">
            Child 2
          </NavLink>
        </nav>
      </header>
      <main>{renderRoutes(props.route.routes)}</main>
    </section>
  );
};
