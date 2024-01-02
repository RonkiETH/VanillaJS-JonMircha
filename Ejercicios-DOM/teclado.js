export function shortcuts (e) {
    console.log(e.type);
    console.log(e);
    console.log(e.key);
    console.log(e.keyCode);
    console.log(`ctrl: ${e.ctrlKey}`);
    console.log(`alt: ${e.altKey}`);
    console.log(`shift: ${e.shiftKey}`);

    if(e.key === "a" && e.altKey) {
        alert("Lanzaste una alerta con el teclado")
    }

    if(e.key === "c" && e.altKey) {
        confirm("Lanzaste una confirmación con el teclado")
    }

    if(e.key === "p" && e.altKey) {
        prompt("Lanzaste un aviso con el teclado")
    }
}