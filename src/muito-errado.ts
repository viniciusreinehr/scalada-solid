/**
 * Exemplo de uso MUITO ERRADO
 */
export default class CarroMuitoErrado {
  criar(tipo = 'sedan') {
    if (tipo == 'sedan')
      console.log('[CARRO] Criando carro sedan')

    console.log('[CARRO] Colocando rodas')
    console.log('[CARRO] Colocando portas')
    console.log('[CARRO] Adicionando pessoa')
    console.log('[CARRO] Começou a Andar')

    if (tipo == 'sedan')
      console.log('[CARRO] Carro sedan criado')
  }
  destruir(tipo = 'sedan') {
    if (tipo == 'sedan')
      console.log('[CARRO] Destruindo carro sedan')

    console.log('[CARRO] Parou de Andar')
    console.log('[CARRO] Retirando pessoa')
    console.log('[CARRO] Retirando portas')
    console.log('[CARRO] Retirando rodas')

    if (tipo == 'sedan')
      console.log('[CARRO] Carro sedan destruido')
  }
}
