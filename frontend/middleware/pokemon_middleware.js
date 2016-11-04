import { fetchAllPokemon, fetchPokemonById } from '../util/api_util';
import { REQUEST_ALL_POKEMON, receiveAllPokemon, REQUEST_POKEMON, receivePokemon } from '../actions/pokemon_actions';


const PokemonMiddleware = ({ dispatch }) => next => action => {
  switch (action.type) {
    case REQUEST_ALL_POKEMON:
      const receiveAllPokemonSuccess = (data) => dispatch(receiveAllPokemon(data));
      const receiveAllPokemonError = (e) => console.log(e);
      fetchAllPokemon(receiveAllPokemonSuccess, receiveAllPokemonError);
      return next(action);
    case REQUEST_POKEMON:
      const receivePokemonSuccess = (data) => dispatch(receivePokemon(data));
      const receivePokemonError = (e) => console.log(e);
      fetchPokemonById(action.id , receivePokemonSuccess, receivePokemonError);
      return next(action);
    default:
      return next(action);

  }
}

export default PokemonMiddleware;
