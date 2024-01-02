import hamburgerMenu from "./menu_hamburgesa.js";
import { digitalClock, alarm } from "./reloj.js";
import { shortcuts, moveBall } from "./teclado.js";
import countdown from "./cuenta_regresiva.js";
import scrollTopButton from "./boton_scroll.js";

document.addEventListener("DOMContentLoaded", (e) => {
    hamburgerMenu(".panel-btn", ".panel", ".menu a");
    digitalClock("#reloj", "#activar-reloj", "#desactivar-reloj");
    alarm("assets/alarma.mp3", "#activar-alarma", "#desactivar-alarma");
    countdown("countdown", "Oct 10, 2024 00:00:00", "Feliz cumpleaños Ronki");
    scrollTopButton(".scroll-top-btn")
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

