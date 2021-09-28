import IAdicionais from "./adicionais.interface"

export default class Movimento implements IAdicionais {
  adicionar() {
    console.log('[MOVIMENTO] Adicionadas')
  }
  remover() {
    console.log('[MOVIMENTO] Removidas')
  }
}