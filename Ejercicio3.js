function TipoDato(arreglo){
    var tipos=[];
    for(let i=0;i<arreglo.length;i++){
        var tipo=typeof arreglo[i];
        if(!tipos.includes(tipo)){
            tipos.push(tipo);
        }
    }
    return tipos;
}