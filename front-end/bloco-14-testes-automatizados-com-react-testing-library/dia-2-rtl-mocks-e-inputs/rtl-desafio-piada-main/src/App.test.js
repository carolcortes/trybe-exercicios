import { render, screen } from "@testing-library/react";
import App from "./App";

describe("Teste do App Jokes", () => {
  test('exibe o título "Piadas do Chuck Norris" na tela', () => {
    render(<App />);

    const title = screen.getByRole('heading' , { name: /Piadas do Chuck Norris/i, level: 1 }); 
    // encontra o h1 com o texto da chave 'name'

    expect(title).toBeInTheDocument();
  });

  test("exibe o corpo da piada na tela", async () => {
    const expectedJoke = 'jesus did not make Chuck Norris, Chuck Norris made jesus';

    // global.fetch = async () => ({
    //   json: async => ({ value: expectedJoke })
    // });

    global.fetch = jest.fn(async () => ({
      json: async () => ({ value: expectedJoke })
    }))

    render(<App />);
    
    const joke = await screen.findByText(expectedJoke);

    expect(joke).toHaveTextContent(expectedJoke);
  });
});
