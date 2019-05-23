import React from "react";
import { renderRoutes } from "react-router-config";

export default props => {
  return (
    <section>
      <h2>HOME component</h2>
      <div>{renderRoutes(props.route.routes)}</div>
    </section>
  );
};
