// 1) Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10.
const contarCaracteres = (String = "") => 
    ((typeof(String) == "string")) 
        ? console.log(String.length) 
        : console.warn("El parametro debe ser un string");

contarCaracteres("Hola")
contarCaracteres(1);


// 2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".
const textoRecortadoSegunNumeroDeCaracteresIndicados = (String = "", longitud = undefined) =>
    (typeof(String) != "string")
        ? console.warn("El parametro debe ser un string") 
        : (longitud === undefined)
            ? console.warn("No ingresaste ningún número") 
            : console.log(String.slice(0,longitud))

textoRecortadoSegunNumeroDeCaracteresIndicados("Luisito comunica", 4)

// 3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].
const arrayDeTextos = (String = "", separador = undefined) =>
    (typeof(String) != "string")
        ? console.warn("El parametro debe ser un string")
        : (separador === undefined)
            ? console.warn("No ingresaste ningún separador")
            : console.log(String.split(separador));

arrayDeTextos("Hola perritos malévolos", " ")


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


// 7) Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.
const validarSiEsPalindromo = (palabra = "") => {
    if (typeof palabra !== "string") {
        return console.warn("El parámetro debe ser un string");
    }

    if (!palabra) {
        return console.warn("La cadena no puede estar vacía");
    }

    palabra = palabra.toLowerCase();
    let alReves = palabra.split("").reverse().join("");

    return palabra === alReves
        ? console.info(`Son Palíndromos: 
            Palabra Original: ${palabra} | 
            Palabra al revés: ${alReves}`)
        : console.warn(`No son Palíndromos: 
            Palabra Original: ${palabra} | 
            Palabra al revés: ${alReves}`);
}

validarSiEsPalindromo("Hola gente como estan");
validarSiEsPalindromo();
validarSiEsPalindromo(1);
validarSiEsPalindromo("neuquen");

// 8) Programa una función que elimine cierto patrón de caracteres de un texto dado, pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5.
const eliminarPatron = (texto = "", patron = "") => {
    (!texto)
        ? console.warn("No ingresaste un texto")
        : (!patron)
            ? console.warn("No ingresaste un patrón a eliminar")
            : console.info(texto.replace(new RegExp(patron, "ig"), ""));
}

eliminarPatron();
eliminarPatron("hola1", "hola2", "hola3", "hola4");
eliminarPatron("hola1, hola2, hola3, hola4", "hola");

// 9) Programa una función que obtenga un numero aleatorio entre 501 y 600.
const getRandomNumber = () => {
    let randomNumber = Math.random + 501
    console.log(randomNumber);
}



// 10) Programa una función que reciba un número y evalúe si es capicúa o no (que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true.

// 11) Programa una función que calcule el factorial de un número (El factorial de un entero positivo n, se define como el producto de todos los números enteros positivos desde 1 hasta n), pe. miFuncion(5) devolverá 120.