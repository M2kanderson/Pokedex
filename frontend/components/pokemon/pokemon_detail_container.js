import { connect } from 'react-redux';
import PokemonDetail from './pokemon_detail';

const MapStateToProps = ({pokemonDetail}) => ({
  items: pokemonDetail.items,
  pokemonDetail
});

export default connect(
  MapStateToProps
)(PokemonDetail);
