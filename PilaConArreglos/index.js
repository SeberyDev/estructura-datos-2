//IMPLEMENTANDO PILA CON ARREGLOS
// ARREGLO.LENGTH ES LO MAS ALTO DE LA PILA
class PilaA {
  constructor() {
    this.almacenPila = [];
  }

  push(elemento) {
    this.almacenPila.push(elemento);
    return this.almacenPila;
  }
  pop() {
    if (this.almacenPila.length === 0) return null;

    return this.almacenPila.pop();
  }
  peek() {
    if (this.almacenPila.length === 0) return null;
    return this.almacenPila[this.almacenPila.length - 1];
  }
  size() {
    return this.almacenPila.length;
  }
  print() {
    return this.almacenPila;
  }
}

const PILA_A = new PilaA();
PILA_A.push(5);
PILA_A.push(20);
PILA_A.push(20);
PILA_A.push(30);
PILA_A.pop();
PILA_A.pop();
console.log(PILA_A.peek());
console.log(PILA_A.size());
console.log(PILA_A.print());

//IMPLEMENTANDO PILA CON OBJETO
class Pila {
  constructor() {
    this.almacenPila = {};
    this.contPila = 0;
  }

  push(elemento) {
    //Agrega un nuevo elemento al final de la pila
    this.almacenPila[this.contPila] = elemento;
    this.contPila++;
    return this.almacenPila;
  }
  pop() {
    //Retorna el ultimo elemento y lo elimina
    if (this.contPila === 0) {
      return null;
    }
    this.contPila--;
    const elemento = this.almacenPila[this.contPila];
    delete this.almacenPila[this.contPila];
    return elemento;
  }
  peek() {
    //Retorna el ultimo elemento sin eliminarlo
    if (this.contPila === 0) {
      return null;
    }
    return this.almacenPila[this.contPila - 1];
  }
  size() {
    //Retorna el numero de elementos de la pila
    return this.contPila;
  }
  print() {
    //Retorna el contenido de la pila
    return this.almacenPila;
  }
}

const PILA = new Pila();
PILA.push(5);
PILA.push(20);
PILA.push(20);
PILA.push(30);
PILA.pop();
PILA.pop();
console.log(PILA.peek());
console.log(PILA.size());
console.log(PILA.print());
