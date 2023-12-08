
// 18) Programa una función que dada una cadena de texto cuente el número de vocales y consonantes, pe. miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5.
const contadorDeVocalesYConsonantes = (cadena = "") => {
    if(!cadena) return console.warn("Tenes que enviar una cadena de texto, no puede ser texto vacío");

    if(typeof cadena !== "string") return console.error("El tipo de dato que enviaste no es un string");

    let contadorVocales = 0;
    let contadorConsonantes = 0;

    cadena = cadena.toLocaleLowerCase();

    for (let letra of cadena) {
        if(/[aeiouáéíóúü]/.test(letra)) {
            contadorVocales++;
        }

        if (/[bcdfghjklmnñpqrstvwxyz]/.test(letra)) {
            contadorConsonantes++;
        }
    }

    return console.info({
        cadena,
        contadorVocales,
        contadorConsonantes
    })

}
contadorDeVocalesYConsonantes(); // Tenes que enviar una cadena de texto, no puede ser texto vacío
contadorDeVocalesYConsonantes(195); // El tipo de dato que enviaste no es un string
contadorDeVocalesYConsonantes("Hola mundo"); // Válido, 4 vocales, 5 consonante

// 19) Programa una función que valide que un texto sea un nombre válido, pe. miFuncion("Jonathan MirCha") devolverá verdadero.
const validarNombre = (nombre = "") => {
    if(!nombre) return console.error("Tenes que enviar una cadena de texto, no puede ser texto vacío");

    if(typeof nombre !== "string") return console.error("El tipo de dato que enviaste no es un string");

    let expReg = /^[A-Za-zNnÁáÉéÍíÓóÚúÜü\s]+$/g.test(nombre);

    return (expReg)
        ? console.info(`${nombre} es un nombre válido`)
        : console.info(`${nombre} NO es un nombre válido`)
    
}

validarNombre(); // Tenes que enviar una cadena de texto, no puede ser texto vacío
validarNombre(1234) // El tipo de dato que enviaste no es un string
validarNombre("Juan 1324") // Inválido
validarNombre("Juan") // Válido
validarNombre("Juan Ignacio Ronquillo") // Válido

// 20) Programa una función que valide que un texto sea un email válido, pe. miFuncion("jonmircha@gmail.com") devolverá verdadero.

const validarEmail = (email = "") => {
    if(!email) return console.error("Tenes que enviar una cadena de texto, no puede ser texto vacío");

    if(typeof email !== "string") return console.error("El tipo de dato que enviaste no es un string");

    let expReg = /[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/i.test(email);

    return (expReg)
        ? console.info(`${email} es un email válido`)
        : console.info(`${email} NO es un email válido`)
}

validarEmail(); // Tenes que enviar una cadena de texto, no puede ser texto vacío
validarEmail(112) // El tipo de dato que enviaste no es un string
validarEmail("juan,ignacio@gmail.com"); // Inválido
validarEmail("ronquillojuanignacio") // Inválido
validarEmail("ronquillojuanignacio@gmail.com"); // Válido

// Fusión 19 y 20
const validarPatron = (cadena = "", patron = undefined) => {
    if(!cadena) return console.error("Tenes que enviar una cadena de texto, no puede ser texto vacío");

    if(cadena !== "string") return console.error("El tipo de dato que enviaste no es un string");

    if(patron === undefined) return console.error("Tenes que enviar una cadena de texto, no puede ser texto vacío");

    if(!(patron instanceof RegExp)) return console.error("El tipo de dato que enviaste no es una expresión regular");

    let expReg = patron.test(cadena);

    return (expReg)
        ? console.info(`${cadena}, cumple con el patrón ingresado`)
        : console.info(`${cadena} NO cumple con el patrón ingresado`)
}

validarPatron("Juan Ignacio Ronquillo", "/^[A-Za-zNnÁáÉéÍíÓóÚúÜü\s]+$/g");
validarPatron("ronquillojuanignacio@gmail.com", "/[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/i");