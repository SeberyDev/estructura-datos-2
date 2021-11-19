// IMPLEMENTACION DE COLA CON ARREGLOS
class ColaA {
  constructor() {
    this.almacenCola = [];
    this.inicio = 0;
    this.fin = 0;
  }

  enqueue(elemento) {
    this.almacenCola.push(elemento);
    return this.almacenCola;
  }

  dequeue() {
    if (this.almacenCola.length === 0) return null;

    return this.almacenCola.shift();
  }

  peek() {
    if (this.size() === 0) return null;

    return this.almacenCola[0];
  }

  size() {
    return this.almacenCola.length;
  }

  print() {
    return this.almacenCola;
  }

  isEmpty() {
    return this.almacenCola.length === 0;
  }
}

const COLA_A = new ColaA();
COLA_A.enqueue(5);
COLA_A.enqueue(10);
COLA_A.enqueue(7);
COLA_A.enqueue(12);
COLA_A.dequeue();
console.log(COLA_A.peek());
console.log(COLA_A.size());
console.log(COLA_A.isEmpty());
console.log(COLA_A.print());

// IMPLEMENTACION DE COLA CON OBJETOS
class Cola {
  constructor() {
    this.almacenCola = {};
    this.inicio = 0;
    this.fin = 0;
  }

  enqueue(elemento) {
    //agrega un nuevo elemento al final de la cola
    this.almacenCola[this.fin] = elemento;
    this.fin++;
    return this.almacenCola;
  }

  dequeue() {
    //retorna el primer elemento de la cola y lo elimina
    if (this.inicio === this.fin) {
      return null;
    }
    const elemento = this.almacenCola[this.inicio];
    delete this.almacenCola[this.inicio];
    this.inicio++;
    return elemento;
  }

  peek() {
    //retorna el primer elemento de la cola sin eliminarlo
    if (this.size() === 0) {
      return null;
    }
    return this.almacenCola[this.inicio];
  }

  size() {
    //retorna el numero de elementos que contiene la cola
    return this.fin - this.inicio;
  }

  print() {
    //retorna los elementos que contiene la cola
    return this.almacenCola;
  }

  isEmpty() {
    //retorna true si la cola esta vacia y flase si no lo esta
    if (this.inicio === this.fin) {
      return true;
    }
    return false;
  }
}

const COLA = new Cola();
COLA.enqueue(5);
COLA.enqueue(10);
COLA.enqueue(7);
COLA.enqueue(12);
COLA.dequeue();
console.log(COLA.peek());
console.log(COLA.size());
console.log(COLA.isEmpty());
console.log(COLA.print());
