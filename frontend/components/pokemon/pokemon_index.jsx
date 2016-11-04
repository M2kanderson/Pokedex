import React from 'react';
import PokemonIndexItem from './pokemon_index_item';

const PokemonIndex = ({pokemon, children}) => {
  let list = pokemon.map((poke) => (
      <PokemonIndexItem poke={poke} key={poke.id}/>
    ))

  return (
    <div className='pokemon-index'>
      <ul>{list}</ul>
      {children}
    </div>

  );
};

export default PokemonIndex;
