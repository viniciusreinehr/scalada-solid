/**
 * Exemplo de uso CORRETO
 */

import IModelos from "./modelos/modelos.interface"
import Sedan from "./modelos/sedan"

 export default class Carro {
  constructor(
    private readonly modelo: IModelos = new Sedan()
  ) {}

  criar() {
    console.log('[CARRO] Criando carro')
    this.modelo.criar()
    console.log('[CARRO] Carro criado')
  }

  destruir() {
    console.log('[CARRO] Destruindo carro')
    this.modelo.destruir()
    console.log('[CARRO] Carro destruido')
  }
}
