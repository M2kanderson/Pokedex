import React from 'react';
import { withRouter } from 'react-router';


const PokemonIndexItem = ({poke, router}) => {
  const handleClick = (url) => (e) => {
    router.push(url);
  }
  return(
  <li onClick={handleClick(`/pokemon/${poke.id}`)}>
    <p>{poke.name}</p>
    <img src={poke.image_url}></img>
  </li>
  )
}

export default withRouter(PokemonIndexItem);
