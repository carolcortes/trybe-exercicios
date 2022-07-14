import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import Item from '../Item';

describe('Teste do campo de input', () => {
  test('Testando a adição de vários itens a aplicação', () => {
    const listTodo = ['Realizar CR', 'Ler Post no Medium', 'Beber água'];
    render(<App />);

    const inputTask = screen.getByLabelText('Tarefa:');
    const button = screen.getByRole('button');

    listTodo.forEach((task) => {
      userEvent.type(inputTask, task);
      userEvent.click(button);
    });

    listTodo.forEach((task) => {
      expect(screen.getByText(task)).toBeInTheDocument();
    });
  });
});

describe('Teste do componente Item', () => {
  test('Ao receber uma string como prop ela precisa aparecer na tela', () => {
    render(<Item content="estudar" />);
    expect(screen.getByText('estudar')).toBeInTheDocument();
  });
});
