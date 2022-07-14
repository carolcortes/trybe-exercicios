import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';

describe('Testando a aplicação, testando botão, e sua funcionalidade', () => {
  test('Verifica se o botão está na tela com o texto "Adicionar"', () => {
    render(<App />);
    const button = screen.getByRole('button');

    expect(button).toBeInTheDocument();
  });

  test('Ao clicar no botão Adicionar a tarefa deve ser adicionada na tela', () => {
    // Use o userEvent, para simular a digitação do usuário e o clique.
    render(<App />);
    const button = screen.getByRole('button');
    const inputTask = screen.getByLabelText('Tarefa:');

    userEvent.type(inputTask, 'estudar');
    expect(screen.queryByText('estudar')).not.toBeInTheDocument();

    userEvent.click(button);
    expect(screen.queryByText('estudar')).toBeInTheDocument();
  });
});
