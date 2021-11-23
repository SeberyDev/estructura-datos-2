class Nodo {
  constructor(dato, next, back) {
    this.dato = dato;
    this.next = next;
    this.back = back;
  }
}

class DoubleLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  //insertFirst
  insertFirst(dato) {
    const newNode = new Nodo(dato, this.head, null);

    if (this.head) {
      newNode.next = this.head;
      this.head.back = newNode;
      this.head = newNode;
    } else {
      this.head = newNode;
      this.tail = newNode;
    }
    this.size++;
  }
  //insertLast
  insertLast(dato) {
    const newNode = new Nodo(dato, null, this.tail);

    if (this.tail) {
      newNode.back = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
    } else {
      this.tail = newNode;
      this.head = newNode;
    }
    this.size++;
  }

  //insertAt
  insertAt(dato, index) {
    if (index < 0 || index > this.size) {
      return null;
    }

    const newNode = new Nodo(dato, null, null);
    let current = this.head;
    let previous;

    if (index === 0) {
      newNode.next = current;
      current.back = newNode;
      this.head = newNode;
    } else {
      for (let i = 0; i < index; i++) {
        previous = current;
        current = current.next;
      }

      newNode.next = current;
      newNode.back = previous;
      current.back = newNode;
      previous.next = newNode;
    }
    this.size++;
  }
  //removeFirst
  removeFirst() {
    if (!this.head) {
      return null;
    }

    const valueToReturn = this.head.dato;

    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
      this.head.back = null;
    }
    this.size--;
    return valueToReturn;
  }
  //removeLast
  removeLast() {
    if (!this.tail) {
      return null;
    }

    const valueToReturn = this.tail.dato;

    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = this.tail.back;
      this.tail.next = null;
    }
    this.size--;
    return valueToReturn;
  }
  //removeData
  removeData(dato) {
    let current = this.head;
    let previous = null;

    while (current !== null) {
      if (current.dato === dato) {
        if (!previous) {
          this.removeFirst();
        } else if (!current.next) {
          this.removeLast();
        } else {
          previous.next = current.next;
          current.next.back = previous;
        }
        this.size--;
        return current.dato;
      }
      previous = current;
      current = current.next;
    }
    return null;
  }
  //removeFrom
  removeFrom(index) {
    if (index < 0 || index >= this.size) return null;

    let count = 0;
    let current = this.head;
    let first = null;
    let second = null;
    while (current) {
      if (count === index - 1 && index === this.size - 1) {
        current.next = null;
        this.tail = current;
      } else if (count === index + 1 && index === 0) {
        current.back = null;
        this.head = current;
      } else {
        if (count === index - 1) {
          first = current;
        } else if (count === index + 1) {
          second = current;
        }
      }

      if (first && second) {
        first.next = second;
        second.back = first;
      }

      ++count;
      current = current.next;
    }

    --this.size;
  }

  //print
  print() {
    let current = this.head;
    let result = "";
    while (current) {
      result += current.dato + " <-> ";
      current = current.next;
    }

    return (result += " X ");
  }
  //reversePrint
  reversePrint() {
    let current = this.tail;
    let result = "";
    while (current) {
      result += current.dato + " <---> ";
      current = current.back;
    }

    return (result += " NULL ");
  }
  //getSize
  getSize() {
    return this.size;
  }

  //isEmpty
  isEmpty() {
    return this.size === 0;
  }
}

const LISTADE = new DoubleLinkedList();
LISTADE.insertFirst(50);
LISTADE.insertFirst(40);
LISTADE.insertFirst(30);
LISTADE.insertFirst(20);
LISTADE.insertFirst(10);
LISTADE.removeFrom(2);
console.log(LISTADE.print());
