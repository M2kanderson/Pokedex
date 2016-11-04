import React from 'react';

const PokemonDetail = ({pokemonDetail, items}) => {
  return (<div className="pokemon-detail">
    <img src={pokemonDetail.image_url}></img>
    <ul>
      <li><h2>{pokemonDetail.name}</h2></li>
      <li>Type: {pokemonDetail.poke_type}</li>
      <li>Attack: {pokemonDetail.attack}</li>
      <li>Defense: {pokemonDetail.defense}</li>
      <li>Moves: {pokemonDetail.moves.join(", ")}</li>
    </ul>
    <div className="toys">
      <h3>Toys</h3>
      <ul className="toy-list">
        {items.map((item) => item.name)}
      </ul>
    </div>
  </div>)
}

export default PokemonDetail;
