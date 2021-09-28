import Passageiros from "./passageiros"

describe('Testando passageiros', () => {
  test('Adicionar passageiros', () => {
    const passageiros = new Passageiros();
    expect(passageiros).toHaveProperty('adicionar')
    passageiros.adicionar();
  })

  test('Removendo passageiros', () => {
    const passageiros = new Passageiros();
    expect(passageiros).toHaveProperty('remover')
    passageiros.remover();
  })
})