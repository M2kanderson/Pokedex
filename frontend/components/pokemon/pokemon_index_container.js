import { connect } from 'react-redux';
import { selectAllPokemon } from '../../reducers/selectors';
import PokemonIndex from './pokemon_index';

const MapStateToProps = (state) => ({
  pokemon: selectAllPokemon(state)
});

export default connect(
  MapStateToProps
)(PokemonIndex);
