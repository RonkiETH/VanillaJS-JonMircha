import hamburgerMenu from "./menu_hamburgesa.js";
import { digitalClock, alarm } from "./reloj.js";

document.addEventListener("DOMContentLoaded", (e) => {
    hamburgerMenu(".panel-btn", ".panel", ".menu a");
    digitalClock("#reloj", "#activar-reloj", "#desactivar-reloj");
    alarm("assets/alarma.mp3", "#activar-alarma", "#desactivar-alarma")
})