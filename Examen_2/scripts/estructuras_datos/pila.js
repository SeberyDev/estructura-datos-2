//IMPLEMENTANDO PILA CON OBJETO
export default class Pila {
  constructor() {
    this.almacenPila = {};
    this.contPila = 0;
  }

  //Agrega un nuevo elemento al final de la pila
  push(elemento) {
    this.almacenPila[this.contPila] = elemento;
    this.contPila++;
    return this.almacenPila;
  }
  //Retorna el ultimo elemento y lo elimina
  pop() {
    if (this.contPila === 0) {
      return null;
    }
    this.contPila--;
    const elemento = this.almacenPila[this.contPila];
    delete this.almacenPila[this.contPila];
    return elemento;
  }
  //Retorna el ultimo elemento sin eliminarlo
  peek() {
    if (this.contPila === 0) {
      return null;
    }
    return this.almacenPila[this.contPila - 1];
  }
  //Retorna el numero de elementos de la pila
  size() {
    return this.contPila;
  }
  //Retorna el contenido de la pila
  print() {
    return this.almacenPila;
  }
}
