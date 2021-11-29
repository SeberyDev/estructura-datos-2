class Nodo {
  constructor(dato, next) {
    this.dato = dato;
    this.next = null;
  }
}

export default class ListaEC {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  //insertFirst : agrega un elemento al principio de la lista
  insertFirst(dato) {
    let newnode = new Nodo(dato);
    if (this.size === 0) {
      newnode.next = this.head;
      this.head = newnode;
      newnode.next = this.head;
    } else {
      newnode.next = this.head;
      this.head = newnode;
      this.getLast().next = this.head;
    }
    this.size++;
    return this.head.dato;
  }
  //insertLast : agrega un elemento al final de la lista
  insertLast(dato) {
    let newnode = new Nodo(dato);
    let current = this.head;
    if (current == null) {
      this.head = newnode;
      newnode.next = this.head;
    } else if (current.next === this.head) {
      current.next = newnode;
      newnode.next = this.head;
    } else {
      while (current.next !== this.head) {
        current = current.next;
      }
      current.next = newnode;
      newnode.next = this.head;
      this.getLast().next = this.head;
    }
    this.size++;
    return newnode.dato;
  }
  //insertAt : agrega un elemento en una posicion especifica
  insertAt(dato, index) {
    if (index < 0 || index > this.size) {
      return null;
    }

    let newnode = new Nodo(dato);
    let current = this.head;
    let back;

    if (index === 0) {
      newnode.next = current;
      this.head = newnode;
    } else {
      for (let i = 0; i < index; i++) {
        back = current;
        current = current.next;
      }
      newnode.next = current;
      back.next = newnode;
    }
    this.size++;
  }
  //removeFirst : remueve el primer elemenro de la lista
  removeFirst() {
    if (this.size == 0) {
      return null;
    }
    let current = this.head;
    let tail;
    for (let i = 0; i < this.size; i++) {
      tail = current;
      current = current.next;
      if (current === this.head && current.next === this.head) {
        current = this.head.dato;
        this.head = null;
        this.size--;
        return current;
      }
      if (current === this.head) {
        tail.next = current.next;
        this.head = current.next;
        this.size--;
        return current.dato;
      }
    }

    return current.dato;
  }
  //removeLast : remueve el ultimo elemento de la lista
  removeLast() {
    if (this.size === 0) {
      return null;
    }
    let current = this.head;
    let tail;

    for (let i = 0; i < this.size; i++) {
      tail = current;
      current = current.next;
      if (current.next === this.head) {
        tail.next = current.next;
        this.size--;
        return current.dato;
      }
    }
  }
  //remuveData : remueve el elemento con el valor que pasemos por parametro
  removeData(dato) {
    if (this.head === null) {
      return null;
    }
    let current = this.head;
    let previous;
    let i = 0;
    if (i === 0 && current.dato === dato) {
      this.removeFirst();
      this.size--;
      return current.dato;
    }
    for (i = 0; i < this.size; i++) {
      previous = current;
      current = current.next;
      if (current.dato === dato) {
        previous.next = current.next;
        this.size--;
        return current.dato;
      }
    }
    this.size--;
  }
  //removeFrom : remueve el elemento con el indice que le indiquemos por parametro
  removeFrom(index) {
    if (this.size === 0) {
      return null;
    }
    if (index === 0) {
      let x = this.head.dato;
      this.removeFirst();
      return x;
    }
    let current = this.head;
    let previous;
    for (let i = 0; i < index; i++) {
      previous = current;
      current = current.next;
    }
    previous.next = current.next;
    this.size--;
    return current.dato;
  }
  //************************** METODOS AUXILIARES****************

  //removeList : remueve todo el contenido de la lista
  removeList() {
    this.head = null;
    this.size = 0;
  }
  //print : retorna los elementos que contiene la lista
  print() {
    if (this.size === 0) {
      return null;
    }
    let list = "";
    const data = [];

    /* if(this.size===1){
          list=this.head.dato;
          return list;
      } */
    let current = this.head; /* 
          while(current.next !== this.head){
              list+=`  ${current.dato}`;
              current=current.next;
          } */
    for (let i = 0; i < this.size; i++) {
      list += `  ${current.dato}`;
      data.push(current.dato);
      current = current.next;
    }

    return data;
  }
  //getSize : retorna el numero de elementos de la lista
  getSize() {
    return this.size;
  }
  //getLast : retorna el ultimo elemento de la lista
  getLast() {
    let tail = this.head;
    if (this.getSize() === 0) {
      return null;
    } else {
      for (let i = 0; i < this.size; i++) {
        tail = tail.next;
      }
      return tail;
    }
  }
  getLastComplete() {
    let tail = this.head;
    if (this.getSize() === 0) {
      return null;
    } else {
      return this.print().pop();
    }
  }
  //getFirst : retorna el primer elemento de la lista
  getFirst() {
    if (this.getSize() === 0) {
      return null;
    }
    return this.head;
  }
}
