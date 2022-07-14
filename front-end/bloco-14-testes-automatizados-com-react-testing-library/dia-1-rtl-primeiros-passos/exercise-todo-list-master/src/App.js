import React, { Component } from 'react';
import InputTodo from './InputTodo';
import Item from './Item';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      listTodo: [],
      selectedTodo: null,
    };

    this.addTodo = this.addTodo.bind(this);
    this.selectTodo = this.selectTodo.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
  }

  selectTodo(indexTodo) {
    const { selectedTodo } = this.state;
    this.setState({ selectedTodo: selectedTodo === indexTodo ? null : indexTodo });
  }

  removeTodo(indexTodo) {
    this.setState((prevState) => ({
      listTodo: prevState.listTodo.filter((_, index) => index !== indexTodo),
    }));
  }

  addTodo(todo) {
    this.setState((state) => ({ listTodo: [...state.listTodo, todo] }));
  }

  render() {
    const { listTodo, selectedTodo } = this.state;

    return (
      <main className="App">
        <InputTodo
          addTodo={ (todo) => this.addTodo(todo) }
        />
        <ul>
          { listTodo.map((todo, index) => (
            <li key={ index + 1 }>

              <Item content={ todo } />
              <button
                type="button"
                onClick={ () => this.selectTodo(index) }
              >
                Selecionar
              </button>
              <button
                type="button"
                onClick={ () => this.removeTodo(index) }
                disabled={ selectedTodo !== index }
              >
                Remover
              </button>
            </li>
          )) }
        </ul>
      </main>
    );
  }
}

export default App;
