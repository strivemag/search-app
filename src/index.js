import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';

import './views/styles/index.css';
import App from './views/app';
import registerServiceWorker from './registerServiceWorker';
import configureStore from './core/store';
import history from './core/history';

const store = configureStore();

function render(Component) {
  ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
          <div>
            <Component/>
          </div>
        </Router>
      </Provider>,

    document.getElementById('root')
  );
}

if (module.hot) {
  module.hot.accept('./views/app', () => {
    render(require('./views/app').default);
  });
}

registerServiceWorker();
render(App);
