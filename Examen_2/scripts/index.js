// IMPORTACIONES DE MODULOS
import { colaActionsHTML } from "../utils/colaUtils.js";
import { pilaActionsHTML } from "../utils/pilaUtils.js";
import { listaEnlazadaActionsHTML } from "../utils/listaEnlazadaUtils.js";
import { listaEnlazadaDobleActionsHTML } from "../utils/listaEnlazadaDobleUtils.js";
import { listaECActionsHTML } from "../utils/listaECUtils.js";
import { listaCDEActionsHTML } from "../utils/listaCDEUtils.js";

// BOTONES DE ESTRUCTURAS DE DATOS
const structuresButtons = Array.from(
  document.querySelectorAll(".structures button")
);

// OPERATIONS
const allOperations = [
  colaActionsHTML,
  pilaActionsHTML,
  listaEnlazadaActionsHTML,
  listaEnlazadaDobleActionsHTML,
  listaECActionsHTML,
  listaCDEActionsHTML,
];

const operationsContainer = document.querySelector(".operations");

// EVENTOS DE BOTONES DE ESTRUCTURAS DE DATOS
for (let i = 0; i < allOperations.length; ++i) {
  structuresButtons[i].addEventListener("click", () => {
    operationsContainer.innerHTML = allOperations[i];
  });
}

// SPANS ANIMATION
const spans = Array.from(document.querySelectorAll(".preview span"));

setInterval(() => {
  for (const span of spans) {
    span.textContent = span.textContent === "" ? "_" : "";
  }
}, 550);
