import React from "react";
import ReactDOM from "react-dom";
import { matchRoutes, renderRoutes } from "react-router-config";

import "./styles.css";
import routes from "./routes";
import { BrowserRouter } from "react-router-dom";

function App() {
  return <BrowserRouter>{renderRoutes(routes)}</BrowserRouter>;
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
