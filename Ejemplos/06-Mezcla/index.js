let a=1;
const mergeSort = arr => {
    if (arr.length < 2) {
      return arr;
    }
  
    const middle = parseInt(arr.length / 2) | 0;
    const left = arr.slice(0, middle);
    const right = arr.slice(middle);

    console.log(left);
    console.log(right);

    const merge = (left, right) => {
      const result = [];
      let il = ir = 0;
  
      while (il < left.length && ir < right.length) {
        result.push( (left[il] < right[ir]) ? left[il++] : right[ir++] );
      }
      a--;
      console.log("result = ",...result, ...left.slice(il), ...right.slice(ir));
      return [...result, ...left.slice(il), ...right.slice(ir)];
    }
    
    console.log("merge :"+a);
    a++;
    console.log(`left ${left} right ${right}`);
    return merge(mergeSort(left), mergeSort(right));
  }
  
  const arr = [10, 4, 40, 32, 67, 12, 43, 31, 65, 1];
  const result = mergeSort(arr);
  
  
  result; // [1, 4, 19, 12, 31, 32, 40, 43, 65, 67]

  console.log(result);