function Usuarios(){
    var usuarios=[];
    x=prompt("Ingrese una opcion");
    while(x!=6){
        if(x!=6){
        switch(x){
            case 1:
            nombreP=prompt("Ingrese el nombre");
            var usuario ={
                nombre:nombreP
            };
            case 2:
            case 3:
            case 4:
            case 5:        
            default:
            break;
        }
        x=prompt("Ingrese una opcion");
    }
}  
}