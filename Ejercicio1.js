function Ocurrencias(n,arreglo){
    cont=0;
    for(let i=0;i<arreglo.length;i++){
        if(n==arreglo[i]){
            cont=cont+1;
        }
    }
    return cont;
}