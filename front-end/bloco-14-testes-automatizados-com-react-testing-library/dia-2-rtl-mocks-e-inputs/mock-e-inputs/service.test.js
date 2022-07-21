const service = require('./service');

describe('Testes da função getRandomNumber', () => {
  it('verifica o retorno da função', () => {
    service.getRandomNumber = jest.fn().mockReturnValue(10);

    expect(service.getRandomNumber()).toBe(10);
  })

  it('verfica se a função foi chamada', () => {
    service.getRandomNumber = jest.fn();
    
    service.getRandomNumber();

    expect(service.getRandomNumber()).toHaveBeenCalled();
  })

  it('verifica quantas vezes a função foi chamada', () => {
    service.getRandomNumber = jest.fn();

    service.getRandomNumber();
    service.getRandomNumber();
    service.getRandomNumber();

    expect(service.getRandomNumber()).toHaveBeenCalledTimes(3)
  })
})
