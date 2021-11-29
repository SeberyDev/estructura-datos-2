import ListaEnlazada from "../scripts/estructuras_datos/lista_enlazada_simple.js";

export const listaEnlazadaActionsHTML = `
  <div class="action">
    <h2>insertBefore</h2>
    <input id="LEinsertBeforeInput" type="text" placeholder="dato" />
    <button onclick="LEinsertBefore()">Ejecutar</button>
  </div>
  <div class="action">
    <h2>insertAfter</h2>
    <input id="LEinsertAfterInput" type="text" placeholder="dato" />
    <button onclick="LEinsertAfter()">Ejecutar</button>
  </div>
  <div class="action">
    <h2>insertAt</h2>
    <input id="LEinsertAtInputDato" type="text" placeholder="dato" />
    <input id="LEinsertAtInputIndex" type="text" placeholder="index" />
    <button onclick="LEinsertAt()">Ejecutar</button>
  </div>
  <div class="action">
    <h2>removeFirst</h2>
    <button onclick="LEremoveFirst()">Ejecutar</button>
  </div>
  <div class="action">
    <h2>removeLast</h2>
    <button onclick="LEremoveLast()">Ejecutar</button>
  </div>
  <div class="action">
    <h2>removeData</h2>
    <input id="LEremoveDataInput" type="text" placeholder="dato" />
    <button onclick="LEremoveData()">Ejecutar</button>
  </div>
  <div class="action">
    <h2>removeFrom</h2>
    <input id="LEremoveFromInput" type="text" placeholder="index" />
    <button onclick="LEremoveFrom()">Ejecutar</button>
  </div>
  <div class="action">
    <h2>removeList</h2>
    <button onclick="LEremoveList()">Ejecutar</button>
  </div>
  <div class="action">
    <h2>isEmpty</h2>
    <button onclick="LEisEmpty()">Ejecutar</button>
  </div>
  <div class="action">
    <h2>getSize</h2>
    <button onclick="LEgetSize()">Ejecutar</button>
  </div>
`;

const listaEnlazada = new ListaEnlazada();

const LEPreviewContainer = document.querySelector(".LEPreviewContainer");
const LEPreviewText = document.getElementById("LEPreviewText");

window.LEinsertBefore = () => {
  listaEnlazada.insertBefore(
    document.getElementById("LEinsertBeforeInput").value
  );
  generalPrint(LEPreviewContainer, listaEnlazada);
};

window.LEinsertAfter = () => {
  listaEnlazada.insertAfter(
    document.getElementById("LEinsertAfterInput").value
  );
  generalPrint(LEPreviewContainer, listaEnlazada);
};

window.LEinsertAt = () => {
  listaEnlazada.insertAt(
    document.getElementById("LEinsertAtInputDato").value,
    document.getElementById("LEinsertAtInputIndex").value
  );
  generalPrint(LEPreviewContainer, listaEnlazada);
};

window.LEremoveFirst = () => {
  listaEnlazada.removeFirst();
  generalPrint(LEPreviewContainer, listaEnlazada);
};

window.LEremoveLast = () => {
  listaEnlazada.removeLast();
  generalPrint(LEPreviewContainer, listaEnlazada);
};

window.LEremoveData = () => {
  listaEnlazada.removeData(document.getElementById("LEremoveDataInput").value);
  generalPrint(LEPreviewContainer, listaEnlazada);
};

window.LEremoveFrom = () => {
  listaEnlazada.removeFrom(document.getElementById("LEremoveFromInput").value);
  generalPrint(LEPreviewContainer, listaEnlazada);
};

window.LEremoveList = () => {
  listaEnlazada.removeList();
  generalPrint(LEPreviewContainer, listaEnlazada);
};

window.LEisEmpty = () => {
  LEPreviewText.textContent = `Empty: ${listaEnlazada.isEmpty()}`;
};

window.LEgetSize = () => {
  LEPreviewText.textContent = `Size: ${listaEnlazada.getSize()}`;
};

const generalPrint = (container, structure) => {
  let html = "";
  const data = structure.print();
  html = data.map((dat) => {
    return `<div>${dat}</div>`;
  });

  container.innerHTML = html.join().replaceAll(",", "");
};
