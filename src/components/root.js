import React from "react";
import { renderRoutes } from "react-router-config";

export default props => {
  console.log("props = ", props);
  return (
    <section>
      <h1>Root component</h1>
      <div>{renderRoutes(props.route.routes)}</div>
    </section>
  );
};
