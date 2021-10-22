// KEYS
console.log("--- KEYS ---");

const persona = { 
  nombre: "Juan",
  edad: 32,
  ocupacion: "Abogado"
};

console.log(Object.keys(persona));

// IS
console.log("--- IS ---");

const obj1 = { test: "" };
const obj2 = { test: "" };

console.log(Object.is(obj1, obj2));

// FROM ENTRIES
console.log("--- FROM ENTRIES ---");

const info = new Map([
  ["nombre", "Juan"],
  ["Edad", 32]
]);

console.log(Object.fromEntries(info));