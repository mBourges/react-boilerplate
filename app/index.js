import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, hashHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import App from './containers/app';
import createRoutes from './routes';
import configureStore from './store';

const initialState = {};
const store = configureStore(initialState, hashHistory);

if (window.devToolsExtension) {
  window.devToolsExtension.updateStore(store);
}

import { selectLocationState } from './containers/app/selectors';
const history = syncHistoryWithStore(hashHistory, store, {
  selectLocationState: selectLocationState()
});

const rootRoute = {
  component: App,
  childRoutes: createRoutes(store),
};

ReactDOM.render(
  <Provider store={ store }>
    <Router
      history={ history }
      routes={ rootRoute }
    />
  </Provider>,
  generateAppContainerElement()
);

function generateAppContainerElement() {
  const app = document.createElement('div');

  app.setAttribute('id', 'app');
  document.body.appendChild(app);

  return app;
}
