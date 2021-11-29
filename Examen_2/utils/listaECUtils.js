import ListaEC from "../scripts/estructuras_datos/lista_enlazada_simple_circular.js";

export const listaECActionsHTML = `
  <div class="action">
    <h2>insertFirst</h2>
    <input id="ECinsertFirstInput" type="text" placeholder="dato" />
    <button onclick="ECinsertFirst()">Ejecutar</button>
  </div>
  <div class="action">
    <h2>insertLast</h2>
    <input id="ECinsertLastInput" type="text" placeholder="dato" />
    <button onclick="ECinsertLast()">Ejecutar</button>
  </div>
  <div class="action">
    <h2>insertAt</h2>
    <input id="ECinsertAtDato" type="text" placeholder="dato" />
    <input id="ECinsertAtIndex" type="text" placeholder="index" />
    <button onclick="ECinsertAt()">Ejecutar</button>
  </div>
  <div class="action">
    <h2>removeFirst</h2>
    <button onclick="ECremoveFirst()">Ejecutar</button>
  </div>
  <div class="action">
    <h2>removeLast</h2>
    <button onclick="ECremoveLast()">Ejecutar</button>
  </div>
  <div class="action">
    <h2>removeData</h2>
    <input id="ECremoveDataInput" type="text" placeholder="dato" />
    <button onclick="ECremoveData()">Ejecutar</button>
  </div>
  <div class="action">
    <h2>removeFrom</h2>
    <input id="ECremoveFromInput" type="text" placeholder="index" />
    <button onclick="ECremoveFrom()">Ejecutar</button>
  </div>
  <div class="action">
    <h2>removeList</h2>
    <button onclick="ECremoveList()">Ejecutar</button>
  </div>
  <div class="action">
    <h2>getSize</h2>
    <button onclick="ECgetSize()">Ejecutar</button>
  </div>
  <div class="action">
    <h2>getLast</h2>
    <button onclick="ECgetLast()">Ejecutar</button>
  </div>
  <div class="action">
    <h2>getFirst</h2>
    <button onclick="ECgetFirst()">Ejecutar</button>
  </div>
`;

const listaEC = new ListaEC();

const ECreviewContainer = document.querySelector(".LECreviewContainer");
const ECreviewText = document.getElementById("LECreviewText");

window.ECinsertFirst = () => {
  listaEC.insertFirst(document.getElementById("ECinsertFirstInput").value);
  generalPrint(ECreviewContainer, listaEC);
};

window.ECinsertLast = () => {
  listaEC.insertLast(document.getElementById("ECinsertLastInput").value);
  generalPrint(ECreviewContainer, listaEC);
};

window.ECinsertAt = () => {
  listaEC.insertAt(
    document.getElementById("ECinsertAtDato").value,
    Number(document.getElementById("ECinsertAtIndex").value)
  );
  generalPrint(ECreviewContainer, listaEC);
};

window.ECremoveFirst = () => {
  listaEC.removeFirst();
  generalPrint(ECreviewContainer, listaEC);
};

window.ECremoveLast = () => {
  listaEC.removeLast();
  generalPrint(ECreviewContainer, listaEC);
};

window.ECremoveData = () => {
  listaEC.removeData(document.getElementById("ECremoveDataInput"));
  generalPrint(ECreviewContainer, listaEC);
};

window.ECremoveFrom = () => {
  listaEC.removeFrom(
    Number(document.getElementById("ECremoveFromInput").value)
  );
  generalPrint(ECreviewContainer, listaEC);
};

window.ECremoveList = () => {
  listaEC.removeList();
  generalPrint(ECreviewContainer, listaEC);
};

window.ECgetSize = () => {
  ECreviewText.textContent = `Size: ${listaEC.getSize()}`;
};

window.ECgetLast = () => {
  ECreviewText.textContent = `Last: ${listaEC.getLastComplete()}`;
};
window.ECgetFirst = () => {
  ECreviewText.textContent = `First: ${listaEC.getFirst().dato}`;
};

const generalPrint = (container, structure) => {
  if (structure.print() === null) {
    container.innerHTML = "";
    return;
  }

  let html = "";
  const data = structure.print();
  html = data.map((dat) => {
    return `<div>${dat}</div>`;
  });

  container.innerHTML = html;
};
