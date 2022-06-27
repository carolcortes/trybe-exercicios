import React from 'react';
import {
  arrayOf,
} from 'prop-types';
import Pokemon from './Pokemon';
import { pokemonType } from '../types';
import '../styles/Pokedex.css';
import Button from './Button';

class Pokedex extends React.Component {
  constructor() {
    super();
    this.state = {
      pokemonIndex: 0,
      filteredType: 'All',
    };
  }

  nextPokemon(pokemonsLength) {
    this.setState((prevState) => ({
      pokemonIndex: (prevState.pokemonIndex + 1) % pokemonsLength,
    }));
  }

  pokemonFilter(filteredType) {
    this.setState({
      filteredType,
      pokemonIndex: 0,
    });
  }

  fetchFilteredPokemons() {
    const { pokemons } = this.props;
    const { filteredType } = this.state;

    return pokemons.filter(({ type }) => (filteredType === 'All'
      ? true : type === filteredType));
  }

  fetchPokemonTypes() {
    const { pokemons } = this.props;
    return [...new Set(pokemons.map(({ type }) => type))];
  }

  render() {
    const { pokemonIndex } = this.state;
    const filteredPokemon = this.fetchFilteredPokemons();
    const pokemonTypes = this.fetchPokemonTypes();

    return (
      <div className="pokedex">
        <div className="pokedex-buttons-panel">
          {
            pokemonTypes.map((type) => (
              <Button
                key={ type }
                type="button"
                className="filter-button"
                onClick={ () => this.pokemonFilter(type) }
              >
                {type}
              </Button>
            ))
          }
        </div>
        <Pokemon pokemon={ filteredPokemon[pokemonIndex] } />
        <div>
          <Button
            type="button"
            className="podedex-button"
            onClick={ () => this.nextPokemon(filteredPokemon.length) }
            disabled={ filteredPokemon.length <= 1 }
          >
            Next
          </Button>
        </div>
      </div>
    );
  }
}

Pokedex.propTypes = {
  pokemons: arrayOf(pokemonType).isRequired,
};

export default Pokedex;
