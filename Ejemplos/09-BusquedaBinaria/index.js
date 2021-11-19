let arr = [1, 4, 19, 12, 31, 32, 40, 43, 65, 67];


function bBinaria(arreglo,r,nB,l=0){
    if(l>r){return -1};

    let pivote = Math.floor((l+r)/2);

    if(arr[pivote]===nB){
        return pivote;
    }

    if(pivote < nB){
        return bBinaria(arreglo,r,nB,pivote+1);
    }else{
        return bBinaria(arreglo,pivote+1,nB);
    }
}



let resultado = bBinaria(arr,arr.length-1,33,0)
if(resultado===-1){
    console.log("El numero que busca no se encuentra ");
}else{
    console.log(`Se encontro el numero ${arr[resultado]} en la posicion : ${resultado}`);
}
