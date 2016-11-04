import React from 'react';

const PokemonIndex = ({pokemon}) => {
  let list = pokemon.map((poke) => (
    <li key={poke.id}>
    <p>{poke.name}</p>
    <img src={poke.image_url}></img>
  </li>))

  return (
    <ul>{list}</ul>
  );
};

export default PokemonIndex;
