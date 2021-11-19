console.log("[10, 4, 40, 32, 67, 12, 43, 31, 65, 1]");
const insertionSort = arr => {
    const l = arr.length;
    let j, temp;

    for (let i = 1; i < l; i++) {
        j = i;
        temp = arr[i];
        while (j > 0 && arr[j - 1] > temp) {
            arr[j] = arr[j - 1];
            j--;
        }
        arr[j] = temp;
        console.log(`Pasada ${i}`);
        console.log(`${arr}`);
    }

    return arr;
};

const arr = [10, 4, 40, 32, 67, 12, 43, 31, 65, 1];
const result = insertionSort(arr);

//console.log(result);