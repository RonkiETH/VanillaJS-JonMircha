// 24) Programa una función que dado un arreglo de números devuelva un objeto con dos arreglos, el primero tendrá los numeros ordenados en forma ascendente y el segundo de forma descendiente, pe. miFuncion([7, 5,7,8,6]) devolverá { asc: [5,6,7,7,8], desc: [8,7,7,6,5] }.
const ordenarAscendetesYDescendentes = (array = undefined) => {
    if (array === undefined) return console.error("No ingresaste un array de números");

    if (!(array instanceof Array)) return console.error("Debes ingresar un array como tipo de dato");

    if(array.length === 0) return console.warn("No puedes ingresar un arreglo vácio");

    for (const numero of array) {
        if (typeof numero !== "number") {
            return console.error(`Ingresaste un elemento que no es un número (${numero})`);
        }
    }

    return console.info({
        ascendentes: array.map((numero) => numero).sort((a,b) => a-b),
        descendentes: array.map((numero) => numero).sort((a,b) => b-a),
    });
}

ordenarAscendetesYDescendentes(); // No ingresaste un array de números
ordenarAscendetesYDescendentes(false) // Debes ingresar un array como tipo de dato
ordenarAscendetesYDescendentes([]) // No puedes ingresar un arreglo vácio
ordenarAscendetesYDescendentes([-1,0,1,2,3,4,5,6,7,8,9,10, 91, 25])

// 25) Programa una función que dado un arreglo de elementos, elimine los duplicados, pe. miFuncion(["x", 10, "x", 2, "10", 10, true, true]) devolverá ["x", 10, 2, "10", true].
const eliminarDuplicados = (array = undefined) => {
    if (array === undefined) return console.error("No ingresaste un array");

    if (!(array instanceof Array)) return console.error("Debes ingresar un array como tipo de dato");

    if(array.length === 0) return console.warn("No puedes ingresar un arreglo vácio");

    if(array.length === 1) return console.warn("El arreglo debe tener al menos 2 elementos");

    // return console.info({
    //     original: array,
    //     sinDuplicados: array.filter((value, index, self) => self.indexOf(value) === index)
    // })

    return console.info({
        original: array,
        sinDuplicados: [... new Set(array)]
    })

}

eliminarDuplicados(); // No ingresaste un array de números
eliminarDuplicados(false) // Debes ingresar un array como tipo de dato
eliminarDuplicados([]) // No puedes ingresar un arreglo vácio
eliminarDuplicados([1]) // El arreglo debe tener al menos 2 elementos
eliminarDuplicados(["x", 10, "x", 2, "10", 10, true, true])

// 26) Programa una función que dado un arreglo de números obtenga el promedio, pe. promedio([9,8,7,6,5,4,3,2,1,0]) devolverá 4.5.
const obtenerPromedio = (array = undefined) => {
    if (array === undefined) return console.error("No ingresaste un array de números");

    if (!(array instanceof Array)) return console.error("Debes ingresar un array como tipo de dato");

    if(array.length === 0) return console.warn("No puedes ingresar un arreglo vácio");

    for (const numero of array) {
        if (typeof numero !== "number") {
            return console.error(`Ingresaste un elemento que no es un número (${numero})`);
        }
    }

    // let total = 0;
    // let promedio = 0;
    // for (let i = 0; i < array.length; i++) {
    //     total += array[i];
    //     promedio = total / array.length;
    // }

    // return console.info(`El promedio es de: ${promedio}`)

    return console.info(
        array.reduce((total, num, index, array) => {
            total += num;
            if (index === array.length -1) {
                return `El promedio de ${array.join(" + ")} es ${total / array.length}}`
            }
            else {
                return total;
            }
        })
    )
}

obtenerPromedio(); // No ingresaste un array de números
obtenerPromedio(false) // Debes ingresar un array como tipo de dato
obtenerPromedio([]) // No puedes ingresar un arreglo vácio
obtenerPromedio([1,2,3,4,5,6,7,8,9,10]) // Valor esperado 5