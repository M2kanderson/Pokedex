import { RECEIVE_ALL_POKEMON, RECEIVE_NEW_POKEMON} from '../actions/pokemon_actions';
import { merge } from 'lodash';

let _defaultState = {}

const PokemonReducer = (state = _defaultState, action) => {
  let newState = {}
  switch (action.type) {
    case RECEIVE_ALL_POKEMON:
      newState = merge({}, action.pokemon);
      return newState;
    case RECEIVE_NEW_POKEMON:
      newState = merge({}, state, {[action.pokemon.id]:action.pokemon});
      return newState;
    default:
      return state;
  }
}

export default PokemonReducer;
