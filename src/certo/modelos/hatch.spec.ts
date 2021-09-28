import Hatch from "./hatch"

describe('Exemplo carro hatch', () => {
  test('Criar o carro hatch', () => {
    const carro = new Hatch()
    expect(carro).toHaveProperty('criar')
    carro.criar();
  })

  test('Destruir o carro hatch', () => {
    const carro = new Hatch()
    expect(carro).toHaveProperty('destruir')
    carro.destruir();
  })
})