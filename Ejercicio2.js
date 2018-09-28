function Promedio(arreglo){
    var acum=0;
    var cont=0;
    for(let i=0;i<arreglo.length;i++){
        acum+=arreglo[i];
        cont+=1;
    }
    var promedio=acum/cont;
    console.log("La suma es: "+acum);
    console.log("El promedio es: "+promedio);
}