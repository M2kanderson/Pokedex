export const fetchAllPokemon = (success, error) => {
  $.ajax({
    type: 'GET',
    url: 'api/pokemon',
    success,
    error
  });
};

export const fetchPokemonById = (id,success, error) => {
  $.ajax({
    type: 'GET',
    url: `api/pokemon/${id}`,
    success,
    error
  });
};

export const createPokemon = (pokemon,success, error) => {
  pokemon.moves = Object.keys(pokemon.moves).map(k => pokemon.moves[k]);
  $.ajax({
    type: 'POST',
    url: `api/pokemon/`,
    data: {pokemon: pokemon},
    success,
    error
  });
}
