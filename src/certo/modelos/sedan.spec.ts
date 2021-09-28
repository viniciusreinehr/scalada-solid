import Sedan from "./sedan"

describe('Exemplo carro Sedan', () => {
  test('Criar o carro sedan', () => {
    const carro = new Sedan()
    expect(carro).toHaveProperty('criar')
    carro.criar();
  })

  test('Destruir o carro sedan', () => {
    const carro = new Sedan()
    expect(carro).toHaveProperty('destruir')
    carro.destruir();
  })
})