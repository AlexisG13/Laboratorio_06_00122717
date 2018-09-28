function Murcielago(cadena) {
    var letras = cadena.split("");
    var palabra = [];
    for (let i in letras) {
        switch (letras[i]) {
            case "0":
                palabra.push("m");
                break;
            case "1":
                palabra.push("u");
                break;
            case "2":
                palabra.push("r");
                break;
            case "3":
                palabra.push("c");
                break;
            case "4":
                palabra.push("i");
                break;
            case "5":
                palabra.push("e");
                break;
            case "6":
                palabra.push("l");
                break;
            case "7":
                palabra.push("a");
                break;
            case "8":
                palabra.push("g");
                break;
            case "9":
                palabra.push("o");
                break;
            default:
                break;
        }
    }
    decoded=palabra.join("");
    console.log("La palabra es: "+decoded);
}