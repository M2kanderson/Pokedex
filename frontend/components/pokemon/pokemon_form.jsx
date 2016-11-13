import React from 'react';

class PokemonForm extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      name: "",
      attack: 0,
      defense: 0,
      poke_type: "bug",
      moves: {},
      image_url: ""
    }

    this.createNewPokemon = this.createNewPokemon.bind(this);
  }

  update(property){
    if(property === "moves")
      return e => this.setState(
        {['moves']: Object.assign({}, this.state.moves, {[e.target.id]: e.target.value})}
      )
    return e => this.setState({[property]: e.target.value});
  }

  createNewPokemon(e){
    e.preventDefault();
    this.props.createPokemon(this.state);
  }

  render(){
    return (
      <form className="pokemon-form" onSubmit={this.createNewPokemon}>
        <input type="text"
               onChange={this.update("name")}
               value={this.state.name}
               placeholder="Name"></input>
        <input type="number"
               onChange={this.update("attack")}
               value={this.state.attack}
               placeholder="Attack"></input>
        <input type="number"
               onChange={this.update("defense")}
               value={this.state.defense}
               placeholder="Defense"></input>
        <input type="text"
               onChange={this.update("poke_type")}
               value={this.state.poke_type}
               placeholder="Select Pokemon Type"></input>
        <input type="text"
               onChange={this.update("image_url")}
               value={this.state.image_url}
               placeholder="Image URL"></input>
        <input type="text"
               onChange={this.update("moves")}
               id="move1"
               value={this.state.moves.move1 || ''}
               placeholder="Move 1"></input>
        <input type="text"
               onChange={this.update("moves")}
               id="move2"
               value={this.state.moves.move2 || ''}
               placeholder="Move 2"></input>
        <input type="text"
               onChange={this.update("moves")}
               id="move3"
               value={this.state.moves.move3 || ''}
               placeholder="Move 3"></input>
        <input type='submit' value="Submit"></input>
      </form>);
  }
}

export default PokemonForm;
