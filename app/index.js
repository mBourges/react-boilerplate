import React from 'react';
import ReactDOM from 'react-dom';

import { Router, hashHistory } from 'react-router';
import App from './containers/app';
import createRoutes from './routes';

const rootRoute = {
  component: App,
  childRoutes: createRoutes(),
};

ReactDOM.render(
  <Router
    history={ hashHistory }
    routes={ rootRoute }
  />,
  generateAppContainerElement()
);

function generateAppContainerElement() {
  const app = document.createElement('div');

  app.setAttribute('id', 'app');
  document.body.appendChild(app);

  return app;
}
