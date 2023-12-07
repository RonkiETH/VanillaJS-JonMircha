// 15) Programa una función para convertir números de base binaria a decimal y viceversa, pe. miFuncion(100,2) devolverá 4 base 10.
const convertirBinarioDecimal = (num = undefined, base = undefined) => {
    if(num === undefined) return console.warn("Ingresa un valor válido numérico");

    if(typeof num !== "number") return console.error("El valor ingresado no es un número");

    if(base === undefined) return console.warn("Ingresa un valor válido numérico para la base");

    if(typeof base !== "number") return console.error("El valor ingresado no es un numero");

    if(Math.sign(base) === -1 || Math.sign(num) === -1 ) return console.warn("Ni el número ni la base pueden ser negativos");

    if(base === 2) {
        return console.info(`${num} base ${base} = ${parseInt(num, base)} base 10`)
    } else if (base === 10) {
        return console.info(`${num} base ${base} = ${num.toString(base)} base 2`)
    } else {
        return console.error(`El tipo de base a convertir NO es válido`)
    }
}

convertirBinarioDecimal(); // Ingresa un valor válido numérico
convertirBinarioDecimal("100"); // El valor ingresado no es un número
convertirBinarioDecimal(100); // Ingresa un valor válido numérico para la base
convertirBinarioDecimal(100, ""); // El valor ingresado no es un numero
convertirBinarioDecimal(-100, 2) // Ni el número ni la base pueden ser negativos
convertirBinarioDecimal(100, -2) // Ni el número ni la base pueden ser negativos
convertirBinarioDecimal(100, 2) // Válido, de binario a decimal
convertirBinarioDecimal(4, 10) // Válido, de decimal a binario
convertirBinarioDecimal(4, 3) // El tipo de base a convertir no es válido

// 16) Programa una función que devuelva el monto final después de aplicar un descuento a una cantidad dada, pe. miFuncion(1000, 20) devolverá 800.
const aplicarDescuento = (monto = undefined, descuento = 0) => {
    if(monto === undefined) return console.warn("Ingresa un valor válido numérico para el monto");

    if(typeof monto !== "number") return console.error("El valor ingresado para el rpecio no es un número");

    if(monto === 0) return console.warn("El monto no puede ser 0");

    if(Math.sign(monto) === -1) return console.warn("El monto no puede ser negativo");

    if(typeof descuento !== "number") return console.error("El valor ingresado para el descuento no es un número");

    if(Math.sign(descuento) === -1) return console.warn("El descuento no puede ser negativo");

    return console.info(`$${monto} - ${descuento}% = $${monto - (monto * descuento) / 100}`);
}

aplicarDescuento() // Ingresa un valor válido numérico para el monto
aplicarDescuento("1000") // El valor ingresado para el monto no es un número
aplicarDescuento(0) // El monto no puede ser 0
aplicarDescuento(-1000) // El monto no puede ser negativo
aplicarDescuento(1000) // No hay descuento
aplicarDescuento(1000, "") // El valor ingresado para el descuento no es un número
aplicarDescuento(1000, -20) // El descuento no puede ser negativo
aplicarDescuento(1000, 20) //Válido, 800;

// 17) Programa una función que dada una fecha válida determine cuantos años han pasado hasta el día de hoy, pe. miFuncion(new Date(1984,4,23)) devolverá 35 años (en 2020).
const calcularAnios = (fecha = undefined) => {
    if(fecha === undefined) return console.warn("No ingresaste una fecha");

    if(!(fecha instanceof Date)) return console.warn("El valor que ingresaste no es una fecha válida");

    let hoyMenosFecha = new Date().getTime() - fecha.getTime(),
        aniosEnMS = 1000 * 60 * 60 * 24 * 365
        aniosHumanos = Math.floor(hoyMenosFecha / aniosEnMS);

    return (Math.sign(aniosHumanos) === -1)
        ? console.info(`Faltan ${Math.abs(aniosHumanos)} años para el ${fecha.getFullYear()}`)
        : (Math.sign(aniosHumanos) === 1)
            ? console.info(`Pasaron ${aniosHumanos} años desde el ${fecha.getFullYear()}`)
            : console.info(`Estamos en el año actual ${fecha.getFullYear()}`)
}

calcularAnios(); // No ingresaste una fecha
calcularAnios("fecha") // El valor que ingresaste no es una fecha válida
calcularAnios(new Date()) // Estamos en el año actual
calcularAnios(new Date(2002,9,10)) // Estamos en el año actual
calcularAnios(new Date(2025,9,10)) // Estamos en el año actual

