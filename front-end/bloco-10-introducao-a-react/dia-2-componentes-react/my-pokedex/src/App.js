import './App.css';
import Pokedex from './Pokedex';
import pokemons from './data';
import Header from './Header';

function App() {
  return (
    <div className="App">
      <Header />
      <Pokedex pokemons={pokemons} />
    </div>
  );
}

export default App;
