import { Component } from "react";
import logo from './logo.svg';

const conteudos = [
  {
    conteudo: 'High Order Functions',
    bloco: 8,
    status: 'Aprendido'
  },
  {
    conteudo: 'Composicao de Componentes',
    bloco: 11,
    status: 'Aprendendo',
  },
  {
    conteudo: 'Composicao de Estados',
    bloco: 12,
    status: 'Aprenderei'
  },
  {
    conteudo: 'Redux',
    bloco: 16,
    status: 'Aprenderei'
  },
];

class Content extends Component {
  render() {
    return (
      <div className="Content">
        {
          conteudos.map(({ conteudo, bloco, status }) =>
            <div key={bloco} className="conteudo">
              <h3>{conteudo}</h3>
              <p>Status: {status}</p>
              <p>Bloco: {bloco}</p>
            </div>
          )
        }
        <img src={logo} className="App-logo" alt="logo" />
      </div>
    );
  };
};

export default Content;