import React from 'react';
import {
  arrayOf,
} from 'prop-types';

import Pokemon from './Pokemon';
import { pokemonType } from './types';

class Pokedex extends React.Component {
  constructor() {
    this.state = 
  }
  render() {
    const { pokemons } = this.props;
    return (
      <div className="pokedex">
        <Pokemon pokemon={ pokemons[0] } />
        <div>
          <button type="button">Next</button>
        </div>
      </div>
    );
  }
}

Pokedex.propTypes = {
  pokemons: arrayOf(pokemonType).isRequired,
};

export default Pokedex;
