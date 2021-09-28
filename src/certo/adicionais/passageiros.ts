import IAdicionais from "./adicionais.interface"

export default class Passageiros implements IAdicionais {
  adicionar() {
    console.log('[PASSAGEIROS] Adicionadas')
  }
  remover() {
    console.log('[PASSAGEIROS] Removidas')
  }
}