import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

import { fetchSearchGiphys } from './actions/giphy_actions.js';

window.fetchSearchGiphys = fetchSearchGiphys;

const store = configureStore();

document.addEventListener('DOMContentLoaded', () => {
  window.store = store;
  ReactDOM.render(
    <Root store={store}/>,
    document.getElementById('root')
  );
});
