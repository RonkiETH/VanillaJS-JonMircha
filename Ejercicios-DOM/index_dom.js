import hamburgerMenu from "./menu_hamburgesa.js";
import { digitalClock, alarm } from "./reloj.js";
import { shortcuts, moveBall } from "./teclado.js";

document.addEventListener("DOMContentLoaded", (e) => {
    hamburgerMenu(".panel-btn", ".panel", ".menu a");
    digitalClock("#reloj", "#activar-reloj", "#desactivar-reloj");
    alarm("assets/alarma.mp3", "#activar-alarma", "#desactivar-alarma")
})

document.addEventListener("keydown", (e) => {
    shortcuts(e);
    moveBall(e, ".ball", ".stage")
})

// document.addEventListener("keyup", (e) => {
//     shortcuts(e);
// })

// document.addEventListener("keypress", (e) => {
//     shortcuts(e);
// })

