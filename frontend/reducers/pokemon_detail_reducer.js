import { RECEIVE_POKEMON} from '../actions/pokemon_actions';
import { merge } from 'lodash';

let _defaultState = {
  image_url: '',
  name: '',
  poke_type: '',
  attack: '',
  defense: '',
  moves: [],
  items: []
};

const PokemonDetailReducer = (state = _defaultState, action) => {
  let newState = {}
  switch (action.type) {
    case RECEIVE_POKEMON:
      newState = merge({}, action.pokemon);
      return newState;
    default:
      return state;
  }
}

export default PokemonDetailReducer;
