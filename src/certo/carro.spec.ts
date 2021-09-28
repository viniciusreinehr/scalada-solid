import Carro from "./carro"
import Hatch from "./modelos/hatch";
import Wagon from "./modelos/wagon";

describe('Exemplo certo', () => {
  test('Criar o carro', () => {
    const carro = new Carro(new Wagon())
    expect(carro).toHaveProperty('criar')
    carro.criar();
  })

  test('Destruir o carro', () => {
    const carro = new Carro(new Wagon())
    expect(carro).toHaveProperty('destruir')
    carro.destruir();
  })
})

class Mock {
  criar() {}
  destruir() {}
}