import './App.css';

const nomes = [
  'Benjamin',
  'Alberto',
  'Alfredo',
  'Daiane',
  'Ronaldinho',
  'Rogérinho',
];

const NomeDoBenjamin = (values) => {
  return (
    values.map((value) => <li key={value}>{value}</li>)
  );
};

function App() {
  return (
  //  NomeDoBenjamin('Benjamin')
  NomeDoBenjamin(nomes)
  );
}

export default App;
