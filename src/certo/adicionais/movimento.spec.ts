import Movimento from "./movimento"

describe('Testando movimentos', () => {
  test('Adicionar movimento', () => {
    const movimento = new Movimento();
    expect(movimento).toHaveProperty('adicionar')
    movimento.adicionar();
  })

  test('Removendo movimento', () => {
    const movimento = new Movimento();
    expect(movimento).toHaveProperty('remover')
    movimento.remover();
  })
})