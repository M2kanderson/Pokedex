import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, hashHistory } from 'react-router';
import PokemonIndexContainer from './pokemon/pokemon_index_container';
import PokemonDetailContainer from './pokemon/pokemon_detail_container';
import PokemonFormContainer from './pokemon/pokemon_form_container';
import ItemDetailContainer from './items/item_detail_container';
import { requestAllPokemon, requestSinglePokemon } from '../actions/pokemon_actions'

const Root = ({ store }) => (
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={PokemonIndexContainer} onEnter={() => store.dispatch(requestAllPokemon())}>
        <Route path="/pokemon/:pokemonId"
               component={PokemonDetailContainer}
               onEnter={(nextState) => store.dispatch(requestSinglePokemon(nextState.params.pokemonId))}>
            <Route path="item/:itemId" component={ItemDetailContainer}></Route>
        </Route>
        <Route path="/new"
               component={PokemonFormContainer}></Route>
      </Route>
    </Router>
  </Provider>
);

export default Root;
