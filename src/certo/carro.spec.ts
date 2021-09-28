import Carro from "./carro"

describe('Exemplo certo', () => {
  test('Criar o carro', () => {
    const carro = new Carro()
    expect(carro).toHaveProperty('criar')
    carro.criar();
  })

  test('Destruir o carro', () => {
    const carro = new Carro()
    expect(carro).toHaveProperty('destruir')
    carro.destruir();
  })
})