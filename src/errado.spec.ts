import CarroErrado from "./errado"

describe('Exemplo errado', () => {
  test('Criar o carro', () => {
    const carro = new CarroErrado();
    expect(carro).toHaveProperty('criar');
    carro.criar();
  })

  test('Destruir o carro', () => {
    const carro = new CarroErrado();
    expect(carro).toHaveProperty('destruir');
    carro.destruir();
  })
})