import Cola from "../scripts/estructuras_datos/cola.js";

export const colaActionsHTML = `
  <div class="action">
    <h2>enqueue</h2>
    <input id="colaEnqueueInput" type="text" placeholder="elemento" />
    <button onclick="colaEnqueue()">Ejecutar</button>
  </div>
  <div class="action">
    <h2>dequeue</h2>
    <button onclick="colaDequeue()">Ejecutar</button>
  </div>
  <div class="action">
    <h2>peek</h2>
    <button onclick="colaPeek()">Ejecutar</button>
  </div>
  <div class="action">
    <h2>size</h2>
    <button onclick="colaSize()">Ejecutar</button>
  </div>
  <div class="action">
    <h2>isEmpty</h2>
    <button onclick="colaIsEmpty()">Ejecutar</button>
  </div>
  `;

const cola = new Cola();

const colaPreviewContainer = document.querySelector(".colaPreviewContainer");
const colaPreviewText = document.getElementById("colaPreviewText");

window.colaEnqueue = () => {
  cola.enqueue(document.getElementById("colaEnqueueInput").value);
  colaPrint();
};

window.colaDequeue = () => {
  cola.dequeue();
  colaPrint();
};

window.colaPeek = () => {
  colaPreviewText.textContent = `Peek: ${cola.peek()}`;
};

window.colaSize = () => {
  colaPreviewText.textContent = `Size: ${cola.size()}`;
};

window.colaIsEmpty = () => {
  colaPreviewText.textContent = `Empty: ${cola.isEmpty()}`;
};

const colaPrint = () => {
  let html = "";
  const colaObj = cola.print();
  for (const property in colaObj) {
    html += `<div>${colaObj[property]}</div>`;
  }

  colaPreviewContainer.innerHTML = html;
};
