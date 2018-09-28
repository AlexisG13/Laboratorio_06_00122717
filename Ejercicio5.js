function Elementos(tipo,arreglo){
    var elementos=[];
    for(let i=0;i<arreglo.length;i++){
        if(typeof arreglo[i]==tipo){
            elementos.push(arreglo[i]);
        }
    }
    console.log("Los elementos de tipo "+tipo+" son: ");
    for(let j in elementos){
        console.log(elementos[j]);
    }
}