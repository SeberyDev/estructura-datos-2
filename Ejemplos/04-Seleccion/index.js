console.log("[10, 4, 40, 32, 67, 12, 43, 31, 65, 1]");
function selectionSort(Arr) {
    let n = Arr.length;

    for (let i = 0; i < n; i++) {
        
        let min = i;
        for (let j = i + 1; j < n; j++) {
            if (Arr[j] < Arr[min]) {
                min = j;
            }
        }
        if (min != i) {
            let tmp = Arr[i];
            Arr[i] = Arr[min];
            Arr[min] = tmp;
        }

        console.log(`Pasada ${i}`);
        console.log(`${Arr}`);
    }
    return Arr;
}

const arr = [10, 4, 40, 32, 67, 12, 43, 31, 65, 1];
const result = selectionSort(arr);

result;
//console.log(result);

