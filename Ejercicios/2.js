// 4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.

const repetirTextoNVeces = (texto = "", Number = undefined) => {
    if(!texto) return console.warn("El parametro debe ser un string");
    
    if(Number === undefined) return console.warn("No ingresaste ningún número")

    if(Number === 0) return console.error("Ingresaste 0, el código nunca va a mostrarse")

    if(Math.sign(Number) === -1) return console.error("El número de veces no puede ser negativo")

    for (let i = 0; i < Number; i++) {
        console.info(`${texto} + ${i + 1}`);
    }
}

repetirTextoNVeces("Hola Mundo", 4)
repetirTextoNVeces("Hola Mundo", 0)
repetirTextoNVeces("Hola Mundo", -1)
repetirTextoNVeces("", 3)

// 5) Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".
const invertirPalabrasEnUnaCadenaDeTexto = (String = "") => {
    (!String)
        ? console.warn("El parametro debe ser un string")
        : console.info(String.split("").reverse().join(""))
}

invertirPalabrasEnUnaCadenaDeTexto("Hola mundo")
// 6) Programa una función para contar el número de veces que se repite una palabra en un texto largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.
const contarCantidadDeVecesQueSeRepiteUnaPalabra = (cadena = "", texto = "") => {
    if(!cadena) return console.warn("No ingresaste texto largo")

    if(!texto) return console.warn("No ingresaste la palabra a evaluar")

    let i = 0;
    let contador = 0;

    while(i !== -1) {
        i = cadena.indexOf(texto, i)
        if(i !== -1) {
            i++;
            contador++
        }
    }
    return console.info(`La palabra ${texto} se repite ${contador} veces`)
}

contarCantidadDeVecesQueSeRepiteUnaPalabra();
contarCantidadDeVecesQueSeRepiteUnaPalabra("Texto")
contarCantidadDeVecesQueSeRepiteUnaPalabra("Hola mundo mundo mundo veinte munto", "mundo")