function principal(name){
    nombre=name;
    uno=[];
    dos={};
    contador=0;
    

    function a(indice,valor){
        uno[indice]=valor;
        
        return uno;
    }

    function b(valor){
        dos[contador]=valor;
        contador++;

        return dos;
    }

    function c(){
        console.log(uno);
        console.log(dos);
    }

    return  {
                nombre,
                a,
                b,
                c
            }

}

const clos = principal('Obj1');
clos.b('d')
clos.a(7,'pepe');