import DoubleLinkedList from "../scripts/estructuras_datos/lista_enlazada_doble.js";

export const listaEnlazadaDobleActionsHTML = `
  <div class="action">
    <h2>insertFirst</h2>
    <input id="LEDinsertFirstInput" type="text" placeholder="dato" />
    <button onclick="LEDinsertFirst()">Ejecutar</button>
  </div>
  <div class="action">
    <h2>insertLast</h2>
    <input id="LEDinsertLastInput" type="text" placeholder="dato" />
    <button onclick="LEDinsertLast()">Ejecutar</button>
  </div>
  <div class="action">
    <h2>insertAt</h2>
    <input id="LEDinsertAtDato" type="text" placeholder="dato" />
    <input id="LEDinsertAtIndex" type="text" placeholder="index" />
    <button onclick="LEDinsertAt()">Ejecutar</button>
  </div>
  <div class="action">
    <h2>removeFirst</h2>
    <button onclick="LEDremoveFirst()">Ejecutar</button>
  </div>
  <div class="action">
    <h2>removeLast</h2>
    <button onclick="LEDremoveLast()">Ejecutar</button>
  </div>
  <div class="action">
    <h2>removeData</h2>
    <input id="LEDremoveDataInput" type="text" placeholder="dato" />
    <button onclick="LEDremoveData()">Ejecutar</button>
  </div>
  <div class="action">
    <h2>removeFrom</h2>
    <input id="LEDremoveFromInput" type="text" placeholder="index" />
    <button onclick="LEDremoveFrom()">Ejecutar</button>
  </div>
  <div class="action">
    <h2>getSize</h2>
    <button onclick="LEDgetSize()">Ejecutar</button>
  </div>
  <div class="action">
    <h2>isEmpty</h2>
    <button onclick="LEDisEmpty()">Ejecutar</button>
  </div>
`;

const listaEnlazadaDoble = new DoubleLinkedList();

const LEDreviewContainer = document.querySelector(".LEDreviewContainer");
const LEDreviewText = document.getElementById("LEDreviewText");

window.LEDinsertFirst = () => {
  listaEnlazadaDoble.insertFirst(
    document.getElementById("LEDinsertFirstInput").value
  );

  generalPrint(LEDreviewContainer, listaEnlazadaDoble);
};

window.LEDinsertLast = () => {
  listaEnlazadaDoble.insertLast(
    document.getElementById("LEDinsertLastInput").value
  );

  generalPrint(LEDreviewContainer, listaEnlazadaDoble);
};

window.LEDinsertAt = () => {
  listaEnlazadaDoble.insertAt(
    document.getElementById("LEDinsertAtDato").value,
    document.getElementById("LEDinsertAtIndex").value
  );
  generalPrint(LEDreviewContainer, listaEnlazadaDoble);
};

window.LEDremoveFirst = () => {
  listaEnlazadaDoble.removeFirst();
  generalPrint(LEDreviewContainer, listaEnlazadaDoble);
};

window.LEDremoveLast = () => {
  listaEnlazadaDoble.removeLast();
  generalPrint(LEDreviewContainer, listaEnlazadaDoble);
};

window.LEDremoveData = () => {
  listaEnlazadaDoble.removeData(
    document.getElementById("LEDremoveDataInput").value
  );
  generalPrint(LEDreviewContainer, listaEnlazadaDoble);
};

window.LEDremoveFrom = () => {
  const n = Number(document.getElementById("LEDremoveFromInput").value);
  listaEnlazadaDoble.removeFrom(n);
  generalPrint(LEDreviewContainer, listaEnlazadaDoble);
};

window.LEDgetSize = () => {
  LEDreviewText.textContent = `Size: ${listaEnlazadaDoble.getSize()}`;
};

window.LEDisEmpty = () => {
  LEDreviewText.textContent = `Empty: ${listaEnlazadaDoble.isEmpty()}`;
};

const generalPrint = (container, structure) => {
  let html = "";
  const data = structure.print();
  html = data.map((dat) => {
    return `<div>${dat}</div>`;
  });

  container.innerHTML = html.join().replaceAll(",", "");
};
