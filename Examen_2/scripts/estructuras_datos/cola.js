export default class Cola {
  constructor() {
    this.almacenCola = {};
    this.inicio = 0;
    this.fin = 0;
  }

  //agrega un nuevo elemento al final de la cola
  enqueue(elemento) {
    this.almacenCola[this.fin] = elemento;
    this.fin++;
    return this.almacenCola;
  }

  //retorna el primer elemento de la cola y lo elimina
  dequeue() {
    if (this.inicio === this.fin) {
      return null;
    }
    const elemento = this.almacenCola[this.inicio];
    delete this.almacenCola[this.inicio];
    this.inicio++;
    return elemento;
  }

  //retorna el primer elemento de la cola sin eliminarlo
  peek() {
    if (this.size() === 0) {
      return null;
    }
    return this.almacenCola[this.inicio];
  }

  //retorna el numero de elementos que contiene la cola
  size() {
    return this.fin - this.inicio;
  }

  //retorna los elementos que contiene la cola
  print() {
    return this.almacenCola;
  }

  //retorna true si la cola esta vacia y flase si no lo esta
  isEmpty() {
    if (this.inicio === this.fin) {
      return true;
    }
    return false;
  }
}
