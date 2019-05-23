import React from 'react';
import ReactDOM from 'react-dom';
import { renderRoutes } from 'react-router-config';

import './styles.css';
import routes from './routes';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <React.Suspense fallback="...loading">
      <BrowserRouter>{renderRoutes(routes)}</BrowserRouter>
    </React.Suspense>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
