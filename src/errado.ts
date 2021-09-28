/**
 * Exemplo de uso ERRADO
 */
 export default class CarroErrado {
  criar(tipo = 'sedan') {
    if (tipo == 'sedan')
      console.log('[CARRO] Criando carro sedan')

    this.colocarRodas()
    this.colocarPortas()
    this.colocarPessoa()
    this.andar()

    if (tipo == 'sedan')
      console.log('[CARRO] Carro sedan criado')
  }
  destruir(tipo = 'sedan') {
    if (tipo == 'sedan')
      console.log('[CARRO] Destruindo carro sedan')
      
    this.parar()
    this.retirarPessoa()
    this.retirarPortas()
    this.retirarRodas()

    if (tipo == 'sedan')
      console.log('[CARRO] Carro sedan destruido')
  }
  colocarPessoa() {
    console.log('[CARRO] Adicionando pessoa')
  }
  retirarPessoa() {
    console.log('[CARRO] Retirando pessoa')
  }
  colocarRodas() {
    console.log('[CARRO] Colocando rodas')
  }
  retirarRodas() {
    console.log('[CARRO] Retirando rodas')
  }
  colocarPortas() {
    console.log('[CARRO] Colocando portas')
  }
  retirarPortas() {
    console.log('[CARRO] Retirando portas')
  }
  andar() {
    console.log('[CARRO] Começou a Andar')
  }
  parar() {
    console.log('[CARRO] Parou de Andar')
  }
}
