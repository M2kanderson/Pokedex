import { values } from 'lodash';

export const selectAllPokemon = ({pokemon}) => (
  _.values(pokemon)
);
