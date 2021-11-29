import Pila from "../scripts/estructuras_datos/pila.js";

export const pilaActionsHTML = `
  <div class="action">
    <h2>push</h2>
    <input id="pilaPushInput" type="text" placeholder="elemento" />
    <button onclick="pilaPush()">Ejecutar</button>
  </div>
  <div class="action">
    <h2>pop</h2>
    <button onclick="pilaPop()">Ejecutar</button>
  </div>
  <div class="action">
    <h2>peek</h2>
    <button onclick="pilaPeek()">Ejecutar</button>
  </div>
  <div class="action">
    <h2>size</h2>
    <button onclick="pilaSize()">Ejecutar</button>
  </div>
`;

const pila = new Pila();

const pilaPreviewContainer = document.querySelector(".pilaPreviewContainer");
const pilaPreviewText = document.getElementById("pilaPreviewText");

window.pilaPush = () => {
  pila.push(document.getElementById("pilaPushInput").value);
  generalPrint(pilaPreviewContainer, pila);
};

window.pilaPop = () => {
  pila.pop();
  generalPrint(pilaPreviewContainer, pila);
};

window.pilaPeek = () => {
  pilaPreviewText.textContent = `Peek: ${pila.peek()}`;
};

window.pilaSize = () => {
  pilaPreviewText.textContent = `Size: ${pila.size()}`;
};

const generalPrint = (container, structure) => {
  let html = "";
  const obj = structure.print();
  for (const property in obj) {
    html += `<div>${obj[property]}</div>`;
  }

  container.innerHTML = html;
};
