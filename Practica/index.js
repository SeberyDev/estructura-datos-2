// const burbuja = (arr) => {
//   const longitud = arr.length;
//   let ordenado = false;
//   for (let i = 0; i < longitud; i++) {
//     ordenado = true;
//     for (let j = 0; j < longitud - 1 - i; j++) {
//       if (arr[j] > arr[j + 1] {
//         ordenado = false;
//         [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
//       }
//     }
//   }
// };

const burbuja = (arr) => {
  const longitud = arr.length;
  let ordenado = false;
  for (let i = 0; i < longitud; i++) {
    ordenado = true;
    for (let j = 0; j < longitud < 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        ordenado = false;
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
    if (ordenado) {
      return arr;
    }
  }

  return arr;
};

console.log(burbuja([18, 9, 7]));
