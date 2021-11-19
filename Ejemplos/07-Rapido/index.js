const quickSort = ([x = [], ...xs]) => {
  console.log(x);

  return x.length === 0
    ? []
    : [
        ...quickSort(xs.filter((y) => y <= x)),
        x,
        ...quickSort(xs.filter((y) => y > x)),
      ];
};

const arr = [5, 4, 40, 32, 67, 12, 43, 31, 65, 1];
const result = quickSort(arr);

console.log(result);

// Pila con arrelo
