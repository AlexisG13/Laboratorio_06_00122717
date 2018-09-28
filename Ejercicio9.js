function Adivinar(n){
    var arreglo=[];
    for(let i=0;i<21;i++){
        arreglo.push(Math.random()*101);
    }
    if(arreglo.includes(n)){
        console.log("Adivinaste el numero! Felicidades! :D")
    }
    else{
        console.log("No lo adivinaste :(");
    }
}