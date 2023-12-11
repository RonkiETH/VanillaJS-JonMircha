// 21) Programa una función que dado un array numérico devuelve otro array con los números elevados al cuadrado, pe. mi_funcion([1, 4, 5]) devolverá [1, 16, 25].
const arrayNumericoAlCuadrado = (array = undefined) => {
    if (array === undefined) return console.error("No ingresaste un array de números");

    if (!(array instanceof Array)) return console.error("Debes ingresar un array como tipo de dato");

    if(array.length === 0) return console.warn("No puedes ingresar un arreglo vácio");

    for (const numero of array) {
        if (typeof numero !== "number") {
            return console.error(`Ingresaste un elemento que no es un número (${numero})`);
        }
    }

    const newArray = array.map((numero) => numero * numero);

    return console.info(`Array original: ${array}\nArray elevado al cuadrado: ${newArray}`);
}

arrayNumericoAlCuadrado(); // No ingresaste un array de números
arrayNumericoAlCuadrado(true); // Debes ingresar un array como tipo de dato
arrayNumericoAlCuadrado({}); // Debes ingresar un array como tipo de dato
arrayNumericoAlCuadrado([]) // No puedes ingresar un arreglo vácio
arrayNumericoAlCuadrado([1, "2", 3]) // Ingresaste un elemento que no es un número
arrayNumericoAlCuadrado([1,2,3,4,5]) // Válido



// 22) Programa una función que dado un array devuelva el número mas alto y el más bajo de dicho array, pe. miFuncion([1, 4, 5, 99, -60]) devolverá [99, -60].
const devolverMinMax = (array = undefined) => {
    if (array === undefined) return console.error("No ingresaste un array de números");

    if (!(array instanceof Array)) return console.error("Debes ingresar un array como tipo de dato");

    if(array.length === 0) return console.warn("No puedes ingresar un arreglo vácio");

    for (const numero of array) {
        if (typeof numero !== "number") {
            return console.error(`Ingresaste un elemento que no es un número (${numero})`);
        }
    }

    return console.info(`Arreglo original: ${array}\nValor mayor: ${Math.max(...array)}\nValor menor: ${Math.min(...array)}`)
}

devolverMinMax(); // No ingresaste un array de números
devolverMinMax(false) // Debes ingresar un array como tipo de dato
devolverMinMax([]) // No puedes ingresar un arreglo vácio
devolverMinMax([-1,0,1,2,3,4,5,6,7,8,9,10])

// 23) Programa una función que dado un array de números devuelva un objeto con 2 arreglos en el primero almacena los números pares y en el segundo los impares, pe. miFuncion([1,2,3,4,5,6,7,8,9,0]) devolverá {pares: [2,4,6,8,0], impares: [1,3,5,7,9]}.
const separarParesImpares = (array = undefined) => {
    if (array === undefined) return console.error("No ingresaste un array de números");

    if (!(array instanceof Array)) return console.error("Debes ingresar un array como tipo de dato");

    if(array.length === 0) return console.warn("No puedes ingresar un arreglo vácio");

    for (const numero of array) {
        if (typeof numero !== "number") {
            return console.error(`Ingresaste un elemento que no es un número (${numero})`);
        }
    }

    return console.info({
        pares: array.filter((numero) => numero % 2 === 0),
        impares: array.filter((numero) => numero % 2 === 1),
    });
}

separarParesImpares(); // No ingresaste un array de números
separarParesImpares(false) // Debes ingresar un array como tipo de dato
separarParesImpares([]) // No puedes ingresar un arreglo vácio
separarParesImpares([-1,0,1,2,3,4,5,6,7,8,9,10])