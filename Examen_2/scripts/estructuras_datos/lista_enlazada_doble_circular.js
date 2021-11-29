class Nodo {
  constructor(dato) {
    this.dato = dato;
    this.next = null;
    this.back = null;
  }
}

export default class ListaCDE {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  insertFirst(dato) {
    let newnode = new Nodo(dato);
    if (this.size === 0) {
      this.head = newnode;
      this.tail = newnode;
      newnode.next = this.tail;
      newnode.back = this.head;
      this.size++;
      return newnode.dato;
    }

    let current = this.head;
    for (let i = 0; i < this.size; i++) {
      current = current.next;
      if (current === this.tail) {
        this.tail.next = newnode;
        newnode.next = this.head;
        newnode.back = this.tail;
        this.head.back = newnode;
        this.head = newnode;
        this.size++;
        return newnode.dato;
      }
    }
  }

  insertLast(dato) {
    let newnode = new Nodo(dato);
    if (this.size === 0) {
      this.head = newnode;
      this.tail = newnode;
      newnode.next = this.tail;
      newnode.back = this.head;
      this.size++;
      return newnode.dato;
    }

    /* let current = this.head;
      for(let i=0; i<this.size; i++){
          current = current.next;
          if(current===this.tail){
              this.tail.next = newnode;
              newnode.back = this.tail;
              newnode.next = this.head;
              this.head.back = newnode;
              this.tail = newnode;
              this.size++;
              return newnode.dato;
          }
      } */
    this.tail.next = newnode;
    newnode.back = this.tail;
    newnode.next = this.head;
    this.head.back = newnode;
    this.tail = newnode;
    this.size++;
    return this.tail.dato;
  }

  insertAt(dato, index) {
    if (index < 0 || index > this.size) {
      return null;
    }
    let newnode = new Nodo(dato);
    if (index === 0) {
      this.insertFirst(dato);
      return newnode.dato;
    }
    if (index === this.size) {
      this.insertLast(dato);
      return newnode.dato;
    }

    let current = this.head;
    for (let i = 0; i < index; i++) {
      current = current.next;
    }
    current.back.next = newnode;
    newnode.back = current.back;
    newnode.next = current;
    current.back = newnode;
    this.size++;
    return newnode.dato;
  }

  removeFirst() {
    if (this.size === 0) {
      return null;
    }

    let current = this.head;

    if (this.size === 1) {
      this.head = null;
      this.tail = null;
      this.size = 0;
      return current.dato;
    }

    this.tail.next = this.head.next;
    this.head.next.back = this.tail;
    this.head = this.head.next;
    this.size--;
    return current.dato;
  }

  removeLast() {
    if (this.size === 0) {
      return null;
    }

    let current = this.tail;

    if (this.size === 1) {
      this.head = null;
      this.tail = null;
      this.size = 0;
      return current.dato;
    }

    this.tail.back.next = this.head;
    this.head.back = this.tail.back;
    this.tail = this.tail.back;
    this.size--;
    return current.dato;
  }

  removeData(dato) {
    if (this.head === null) {
      return null;
    }

    let current = this.head;
    let previous;
    if (current.dato === dato) {
      this.removeFirst();
      return current.dato;
    }
    for (let i = 0; i < this.size; i++) {
      if (current.dato === dato) {
        this.removeFrom(i);
        return;
      }
      current = current.next;
    }
  }

  removeFrom(index) {
    if (this.size === 0) {
      return null;
    }

    if (index === 0) {
      this.removeFirst();
      return;
    }
    if (index === this.size - 1) {
      this.removeLast();
      return;
    }
    let current = this.head;
    for (let i = 0; i < index; i++) {
      current = current.next;
    }
    current.back.next = current.next;
    current.next.back = current.back;
    this.size--;
    return current.dato;
  }

  removeList() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  print() {
    if (this.size === 0) {
      return null;
    }
    const data = [];
    let current = this.head;
    let mostrar = "";
    for (let i = 0; i < this.size; i++) {
      // mostrar += current.dato + " ";
      data.push(current.dato);
      current = current.next;
    }
    return data;
  }

  reveresePrint() {
    if (this.size === 0) {
      return null;
    }
    let current = this.tail;
    let mostrar = "";
    for (let i = this.size - 1; i >= 0; i--) {
      mostrar += current.dato + " ";
      current = current.back;
    }
    return mostrar;
  }

  isEmpty() {
    if (this.size === 0) {
      return true;
    }
    return false;
  }

  getSize() {
    return this.size;
  }
}
