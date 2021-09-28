import IAdicionais from "../adicionais/adicionais.interface"
import Movimento from "../adicionais/movimento"
import Passageiros from "../adicionais/passageiros"
import Portas from "../adicionais/portas"
import Rodas from "../adicionais/rodas"
import IModelos from "./modelos.interface"

export default class Sedan implements IModelos {
  constructor(
    private readonly passageiros: IAdicionais = new Passageiros(),
    private readonly rodas: IAdicionais = new Rodas(),
    private readonly portas: IAdicionais = new Portas(),
    private readonly movimento: IAdicionais = new Movimento(),
  ) {}

  criar() {
    console.log('[SEDAN] Criando carro')
    this.rodas.adicionar()
    this.portas.adicionar()
    this.passageiros.adicionar()
    this.movimento.adicionar()
    console.log('[SEDAN] Carro criado')
  }

  destruir() {
    console.log('[SEDAN] Destruindo carro')
    this.movimento.remover()
    this.passageiros.remover()
    this.portas.remover()
    this.rodas.remover()
    console.log('[SEDAN] Carro destruido')
  }
}