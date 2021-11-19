//Gap fijo
console.log("[10, 4, 40, 32, 67, 12, 43, 31, 65, 1]\n");
const shellSort = arr => {
    const gaps = [5, 3, 1];
    for ( let g = 0; g < gaps.length; ++g ) {
      for ( let i = gaps[ g ]; i < arr.length; ++i ) {
        const temp = arr[ i ];
        let j = i;
        console.log(`gap = ${gaps[g]} Compara ${arr[j-gaps[ g ]]} con ${temp}`);//--------------------
        
        for (; j >= gaps[ g ] && arr[j-gaps[ g ] ] > temp; j -= gaps[ g ] ) {
          console.log(`j = ${j} arr[${j-gaps[g]}] = ${arr[j-gaps[ g ] ]}   temp = ${temp}`);//---------------
          arr[ j ] = arr[ j - gaps[ g ] ];
        }
        
        arr[ j ] = temp;

        console.log(`Pasada ${g}`);
        console.log(`${arr}\n`);
      }
        /* console.log(`Pasada ${g}`);
        console.log(`${arr}`); */
    }
  
    return arr;
  }
  
  
  const arr = [10, 4, 40, 32, 67, 12, 43, 31, 65, 1];
  const result = shellSort(arr);
  
  result;

  

