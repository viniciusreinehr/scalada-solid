import Rodas from "./rodas"

describe('Testando rodas', () => {
  test('Adicionar rodas', () => {
    const rodas = new Rodas();
    expect(rodas).toHaveProperty('adicionar')
    rodas.adicionar();
  })

  test('Removendo rodas', () => {
    const rodas = new Rodas();
    expect(rodas).toHaveProperty('remover')
    rodas.remover();
  })
})