import IModelos from "./modelos.interface";

export default class Wagon implements IModelos {
  criar() {
    console.log('[WAGON] Criado')
  }
  destruir() {
    console.log('[WAGON] Destruido')
  }
}