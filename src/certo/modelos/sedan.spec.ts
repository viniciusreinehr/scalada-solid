import Sedan from "./sedan"

describe('Exemplo carro Sedan', () => {
  test('Criar o carro sedan', () => {
    const passageiros = new Mock();
    const rodas = new Mock();
    const portas = new Mock();
    const movimento = new Mock();
    const carro = new Sedan(passageiros, rodas, portas, movimento)
    expect(carro).toHaveProperty('criar')
    carro.criar();
  })

  test('Destruir o carro sedan', () => {
    const passageiros = new Mock();
    const rodas = new Mock();
    const portas = new Mock();
    const movimento = new Mock();
    const carro = new Sedan(passageiros, rodas, portas, movimento)
    expect(carro).toHaveProperty('destruir')
    carro.destruir();
  })
})

class Mock {
  adicionar() {
    console.log('MOCK')
  }
  remover() {
    console.log('MOCK')
  }
}