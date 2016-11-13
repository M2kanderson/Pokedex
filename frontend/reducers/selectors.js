import { values } from 'lodash';

export const selectAllPokemon = ({pokemon}) => (
  _.values(pokemon)
);

export const selectPokemonItem = (state,itemId) => (
  state.pokemonDetail.items.find((item) => item.id === itemId) || {}
);
