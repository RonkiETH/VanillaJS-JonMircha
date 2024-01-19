import hamburgerMenu from "./menu_hamburgesa.js";
import { digitalClock, alarm } from "./reloj.js";
import { shortcuts, moveBall } from "./teclado.js";
import countdown from "./cuenta_regresiva.js";
import scrollTopButton from "./boton_scroll.js";
import darkTheme from "./tema_oscuro.js";
import responsiveMedia from "./objeto_responsive.js";
import contactFormValidations from "./validaciones_formulario.js";

document.addEventListener("DOMContentLoaded", (e) => {
    hamburgerMenu(".panel-btn", ".panel", ".menu a");
    digitalClock("#reloj", "#activar-reloj", "#desactivar-reloj");
    alarm("assets/alarma.mp3", "#activar-alarma", "#desactivar-alarma");
    countdown("countdown", "Oct 10, 2024 00:00:00", "Feliz cumpleaños Ronki");
    scrollTopButton(".scroll-top-btn");
    responsiveMedia(
        "youtube", 
        "(min-width: 1024px)", 
        `<a href="https://www.youtube.com/watch?v=6IwUl-4pAzc&list=PLMlJ6ugsh2LlZ-xsbYj9rQyCQ1Onu3L6r&index=66&ab_channel=jonmircha" target="_blank" rel="noopener">Ver video</a>`, 
        `<iframe width="560" height="315" src="https://www.youtube.com/embed/6IwUl-4pAzc?si=J5xFy1fTu-yngnqQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`);

    responsiveMedia(
        "gmaps", 
        "(min-width: 1024px)", 
        `<a href="https://maps.app.goo.gl/WQuhHgHxvwiFYdJ98" target="_blank" rel="noopener">Ver mapa</a>`, 
        `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52521.10854449382!2d-58.596710465917546!3d-34.64032328970931!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcc93a3ba895ab%3A0xf7aedd3fb3853a84!2sMcDonald&#39;s!5e0!3m2!1ses-419!2sar!4v1704237485165!5m2!1ses-419!2sar" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`);

    contactFormValidations();  
        
})

document.addEventListener("keydown", (e) => {
    shortcuts(e);
    moveBall(e, ".ball", ".stage")
})

darkTheme(".dark-theme-btn", "dark-mode")

// document.addEventListener("keyup", (e) => {
//     shortcuts(e);
// })

// document.addEventListener("keypress", (e) => {
//     shortcuts(e);
// })

