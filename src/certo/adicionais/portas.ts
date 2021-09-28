import IAdicionais from "./adicionais.interface"

export default class Portas implements IAdicionais {
  adicionar() {
    console.log('[PORTAS] Adicionadas')
  }
  remover() {
    console.log('[PORTAS] Removidas')
  }
}