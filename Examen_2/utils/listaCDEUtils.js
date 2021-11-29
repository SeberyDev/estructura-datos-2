import ListaCDE from "../scripts/estructuras_datos/lista_enlazada_doble_circular.js";

export const listaCDEActionsHTML = `
  <div class="action">
    <h2>insertFirst</h2>
    <input id="CDEinsertFirstInput" type="text" placeholder="dato" />
    <button onclick="CDEinsertFirst()" >Ejecutar</button>
  </div>
  <div class="action">
    <h2>insertLast</h2>
    <input id="CDEinsertLastInput" type="text" placeholder="dato" />
    <button onclick="CDEinsertLast()">Ejecutar</button>
  </div>
  <div class="action">
    <h2>insertAt</h2>
    <input id="CDEinsertAtDato" type="text" placeholder="dato" />
    <input id="CDEinsertAtIndex" type="text" placeholder="index" />
    <button onclick="CDEinsertAt()">Ejecutar</button>
  </div>
  <div class="action">
    <h2>removeFirst</h2>
    <button onclick="CDEremoveFirst()">Ejecutar</button>
  </div>
  <div class="action">
    <h2>removeLast</h2>
    <button onclick="CDEremoveLast()">Ejecutar</button>
  </div>
  <div class="action">
    <h2>removeData</h2>
    <input id="CDEremoveDataInput" type="text" placeholder="dato" />
    <button onclick="CDEremoveData()">Ejecutar</button>
  </div>
  <div class="action">
    <h2>removeFrom</h2>
    <input id="CDEremoveFromInput" type="text" placeholder="index" />
    <button onclick="CDEremoveFrom()">Ejecutar</button>
  </div>
  <div class="action">
    <h2>removeList</h2>
    <button onclick="CDEremoveList()">Ejecutar</button>
  </div>
  <div class="action">
    <h2>getSize</h2>
    <button onclick="CDEgetSize()">Ejecutar</button>
  </div>
`;

const listaCDE = new ListaCDE();

const LECDreviewContainer = document.querySelector(".LECDreviewContainer");
const LECDreviewText = document.getElementById("LECDreviewText");

window.CDEinsertFirst = () => {
  listaCDE.insertFirst(document.getElementById("CDEinsertFirstInput").value);
  generalPrint(LECDreviewContainer, listaCDE);
};

window.CDEinsertLast = () => {
  listaCDE.insertLast(document.getElementById("CDEinsertLastInput").value);
  generalPrint(LECDreviewContainer, listaCDE);
};

window.CDEinsertAt = () => {
  listaCDE.insertAt(
    document.getElementById("CDEinsertAtDato").value,
    Number(document.getElementById("CDEinsertAtIndex").value)
  );
  generalPrint(LECDreviewContainer, listaCDE);
};

window.CDEremoveFirst = () => {
  listaCDE.removeFirst();
  generalPrint(LECDreviewContainer, listaCDE);
};

window.CDEremoveLast = () => {
  listaCDE.removeLast();
  generalPrint(LECDreviewContainer, listaCDE);
};

window.CDEremoveData = () => {
  listaCDE.removeData(document.getElementById("CDEremoveDataInput").value);
  generalPrint(LECDreviewContainer, listaCDE);
};

window.CDEremoveFrom = () => {
  listaCDE.removeFrom(
    Number(document.getElementById("CDEremoveFromInput").value)
  );
  generalPrint(LECDreviewContainer, listaCDE);
};

window.CDEremoveList = () => {
  listaCDE.removeList();
  generalPrint(LECDreviewContainer, listaCDE);
};

window.CDEgetSize = () => {
  LECDreviewText.textContent = `Size: ${listaCDE.getSize()}`;
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

  container.innerHTML = html.join().replaceAll(",", "");
};
