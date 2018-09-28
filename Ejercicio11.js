function DatosUsuario(nombreP,apellidoP,fecha_nP,telefonoP,correoP){
    arreglo=[];
    var usuario ={
        nombre:nombreP,
        apellido:apellidoP,
        fecha_nacimiento:fecha_nP,
        telefono:telefonoP,
        correo:correoP
    };
    console.log(usuario);
    arreglo.push(usuario);
}