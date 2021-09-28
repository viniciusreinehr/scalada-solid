import IAdicionais from "./adicionais.interface"

export default class Rodas implements IAdicionais {
  adicionar() {
    console.log('[RODAS] Adicionadas')
  }
  remover() {
    console.log('[RODAS] Removidas')
  }
}