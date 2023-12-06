// 9) Programa una función que obtenga un numero aleatorio entre 501 y 600.
const getRandomNumber = (max = undefined, min = undefined) => {
    if(max === undefined) return console.warn("No ingresaste un número máximo");
    
    if(min === undefined) return console.warn("No ingresaste un número mínimo");

    if(max < min) return console.warn("El número máximo no puede ser menor al número mínimo");

    let randomNumber = Math.round(Math.random() * (max - min) + min)
    console.log(randomNumber);
}

getRandomNumber(600,501); // Válida
getRandomNumber(undefined,401); // No ingresaste un número máximo
getRandomNumber(400,undefined); // No ingresaste un número mínimo
getRandomNumber(400,500); // El número máximo no puede ser menor al número mínimo

// 10) Programa una función que reciba un número y evalúe si es capicúa o no (que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true.
const esNumeroCapicua = (num = 0) => {
    if(!num) return console.warn("Debes ingresar un número válido");

    if(typeof num !== "number") return console.error("El valor ingresado no es un número");

    num = num.toString();
    let numAlReves = num.split("").reverse().join("");

    return (num === numAlReves)
        ? console.info(`Sí, es capicúa, Número original: ${num}, Número al revés: ${numAlReves}`)
        : console.info(`NO, es capicúa, Número original: ${num}, Número al revés: ${numAlReves}`)

}

esNumeroCapicua(); // No ingresaste un número
esNumeroCapicua("2002"); // Debes ingresar un número válido
esNumeroCapicua(2002); // Es capicúa
esNumeroCapicua(14); // No es capicúa

// 11) Programa una función que calcule el factorial de un número (El factorial de un entero positivo n, se define como el producto de todos los números enteros positivos desde 1 hasta n), pe. miFuncion(5) devolverá 120.
const calcularFactorial = (num = undefined) => {
    if(num === undefined) return console.warn("Ingresa un valor para el factorial");

    if(typeof num !== "number") return console.error("El valor ingresado no es un número");

    if(num === 0) return console.error("El número ingresado no puede ser 0");

    if(Math.sign(num) === -1) return console.error("El número no puede ser negativo");

    let factorial = 1;

    for (let i = num; i > 1; i--) {
        factorial *= i;
    }

    return console.info(`El factorial de ${num} es ${factorial}`);
}

calcularFactorial() // Ingresa un valor para el factorial
calcularFactorial("5") // El valor ingresado no es un número
calcularFactorial(0) // El número ingresado no puede ser 0

calcularFactorial(-5) // El número no puede ser negativ
calcularFactorial(5) // 120