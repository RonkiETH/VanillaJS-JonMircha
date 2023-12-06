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