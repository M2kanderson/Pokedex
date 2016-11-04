import React from 'react';
import ReactDOM from 'react-dom'
import configureStore from './store/store.js'

import Root from './components/root';


import { receiveAllPokemon, requestAllPokemon } from './actions/pokemon_actions';
import { fetchAllPokemon } from './util/api_util';
import { selectAllPokemon } from './reducers/selectors';
window.receiveAllPokemon = receiveAllPokemon;
window.fetchAllPokemon = fetchAllPokemon;
window.requestAllPokemon = requestAllPokemon;
window.selectAllPokemon = selectAllPokemon;

const App = () => (
  <div>Hello World</div>
);

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();
  window.store = store;
  const rootEl = document.getElementById('root');
	ReactDOM.render(
		<Root store={store}/>,
    rootEl
	);
});
