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

