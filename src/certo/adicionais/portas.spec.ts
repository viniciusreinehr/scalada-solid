import Portas from "./portas"

describe('Testando portas', () => {
  test('Adicionar portas', () => {
    const portas = new Portas();
    expect(portas).toHaveProperty('adicionar')
    portas.adicionar();
  })

  test('Removendo portas', () => {
    const portas = new Portas();
    expect(portas).toHaveProperty('remover')
    portas.remover();
  })
})