import { connect } from 'react-redux';
import { selectPokemonItem } from '../../reducers/selectors';
import ItemDetail from './item_detail';

const MapStateToProps = (state, ownProps) => {
  return ({
    item: selectPokemonItem(state, parseInt(ownProps.params.itemId))
  });
}


export default connect(
  MapStateToProps
)(ItemDetail);
