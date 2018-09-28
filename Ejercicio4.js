function SumaArreglo(arreglo){
    var suma=0;
    if(arreglo.length%2==0){
    x=(arreglo.length/2);
    for(let i=0;i<x;i++){
        suma=arreglo[i]+arreglo[arreglo.length-1-i];
        console.log(suma);
        suma=0;
    }
    }
    else{
        x=Math.round(arreglo.length/2);
        for(let i=0;i<x;i++){
            if(i==x-1){
                suma=arreglo[i];
            }
            else{
                suma=arreglo[i]+arreglo[arreglo.length-1-i];
            }
            console.log(suma);
            suma=0;
        }
    } 
}