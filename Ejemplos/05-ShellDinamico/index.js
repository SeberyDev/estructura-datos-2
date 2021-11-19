console.log("10, 4, 40, 32, 67, 12, 43, 31, 65, 1\n");

const shellSort = (arr) => {
  const gap = arr.length;
  let h = 1;
  while (h < gap / 3) {
    h = 3 * h + 1;
  }
  while (h >= 1) {
    for (let i = h; i < gap; i++) {
      for (let j = i; j >= h && arr[j] < arr[j - h]; j -= h) {
        [arr[j], arr[j - h]] = [arr[j - h], arr[j]];
      }

      console.log(`${arr}`);
    }
    h = (h - 1) / 3;
  }

  return arr;
};

const arr = [10, 4, 40, 32, 67, 12, 43, 31, 65, 1];
const result = shellSort(arr);

//result;
