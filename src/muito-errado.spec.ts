import CarroMuitoErrado from "./muito-errado";

describe('Exemplo muito errado', () => {
  test('Criar o carro', () => {
    const carro = new CarroMuitoErrado();
    expect(carro).toHaveProperty('criar');
    carro.criar();
  })

  test('Destruir o carro', () => {
    const carro = new CarroMuitoErrado();
    expect(carro).toHaveProperty('destruir');
    carro.destruir();
  })
})