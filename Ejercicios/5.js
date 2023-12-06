// 12) Programa una función que determine si un número es primo (aquel que solo es divisible por sí mismo y 1) o no, pe. miFuncion(7) devolverá true.
const numeroPrimo = (num = undefined) => {
    if(num === undefined) return console.warn("Ingresa un valor válido");

    if(typeof num !== "number") return console.error("El valor ingresado no es un número");

    if(num === 0) return console.error("El número ingresado no puede ser 0");

    if(num === 1) return console.error("El número ingresado no puede ser 1");

    if(Math.sign(num) === -1) return console.error("El número no puede ser negativo");

    let divisible = false;

    for(let i=2; i < num; i++){
        if ((num % i) === 0) {
            divisible = true;
            break;
        }
    }

    return (divisible)
        ? console.info(`El número ${num} NO es primo`)
        : console.info(`El número ${num} SÍ es primo`)
}

numeroPrimo() // Ingresa un valor válido
numeroPrimo("7") // El valor ingresado no es un número
numeroPrimo(0) // El número ingresado no puede ser 0
numeroPrimo(1) // El número ingresado no puede ser 1
numeroPrimo(-7) // El número ingresado no puede ser negativo
numeroPrimo(7) // Es primo
numeroPrimo(4) // NO es primo

// 13) Programa una función que determine si un número es par o impar, pe. miFuncion(29) devolverá Impar.
const parOYmpar = (num = undefined) => {
    if(num === undefined) return console.warn("Ingresa un valor válido");

    if(typeof num !== "number") return console.error("El valor ingresado no es un número");

    return(num % 2 === 0)
    ? console.info(`${num} es par`)
    : console.info(`${num} es un número impar`);
}
parOYmpar(); // Ingresa un valor válido
parOYmpar("4") // El valor ingresado no es un número

parOYmpar(20); // Es un número par
parOYmpar(3); // Es un número impar

// 14) Programa una función para convertir grados Celsius a Fahrenheit y viceversa, pe. miFuncion(0,"C") devolverá 32°F.
const convertirGrados = (grados = 0, unidad = "") => {
    if(grados === undefined) return console.warn("Ingresa un valor válido numérico para los grados");

    if(typeof grados !== "number") return console.error("El valor ingresado no es un número");

    if(unidad === undefined) return console.warn("No ingresaste el tipo de grados a convertir");

    if(typeof unidad !== "string") return console.error("El valor ingresado no es un string");

    if(unidad.length !== 1 || !/(C|F)/.test(unidad)) return console.warn("El valor de los grados no es válido, debe ser F para Farenheit o C para Celsius");



    if(unidad === "C") {
        return console.info(`${grados}°C = ${Math.round((grados * (9 / 5)) + 32)}°F`)
    } else if (unidad === "F") {
        return console.info(`${grados}°F = ${Math.round((grados - 32) * 5 / 9)}°C`)
    }
}

convertirGrados(); // Ingresa un valor válido numérico para los grados
convertirGrados("2"); // El valor ingresado no es un número
convertirGrados(2); // No ingresaste el tipo de grados a convertir
convertirGrados(2, true); // El valor ingresado no es un string
convertirGrados(0, "C") // Válido
convertirGrados(100, "C") // Válido
convertirGrados(32, "F") // Válido
convertirGrados(212, "F") // Válido