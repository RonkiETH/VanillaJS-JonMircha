// let texto = "Hola soy Juan Ignacio";

//         const hablar = (texto) => speechSynthesis.
//         speak(new SpeechSynthesisUtterance(texto));

//         hablar(texto);

// console.log("Elementos del Documento");
// console.log(window.document);
// console.log(document);
// console.log(document.head);
// console.log(document.body);
// console.log(document.documentElement);
// console.log(document.doctype);
// console.log(document.characterSet);
// console.log(document.title);
// console.log(document.links);
// console.log(document.images);
// console.log(document.forms);
// console.log(document.styleSheets);
// console.log(document.scripts);
// setTimeout(() => {
//     console.log(document.getSelection().toString());
// }, 3000);
// document.write("<h2>Hola mundo desde el DOM</h2>")

//Clase 62 DOM

// console.log(document.getElementsByTagName("li"));
// console.log(document.getElementsByClassName("card"));
// console.log(document.getElementsByName("nombre"));
// console.log(document.getElementById("menu"));
// console.log(document.querySelector("#menu"));
// console.log(document.querySelector("a"));
// console.log(document.querySelectorAll("a"));
// console.log(document.querySelectorAll("a").length);
// document.querySelectorAll("a").forEach((link) => console.log(link));
// console.log(document.querySelector(".card"));
// console.log(document.querySelectorAll(".card"));
// console.log(document.querySelectorAll(".card")[2]);
// console.log(document.querySelectorAll("#menu li"));
// console.log(document.querySelector("#menu li"));

//Clase 63 DOM

// console.log(document.documentElement.lang);
// console.log(document.documentElement.getAttribute("lang"));
// console.log(document.querySelector(".link-dom").href);
// console.log(document.querySelector(".link-dom").getAttribute("href"));

// document.documentElement.lang = "en";
// console.log(document.documentElement.lang);
// document.documentElement.setAttribute("lang", "es-MX");

// // Cuando una variable es un elemento del dom, declararla con $ adelante, es una buena práctica.
// const $linkDOM = document.querySelector(".link-dom");

// $linkDOM.setAttribute("target", "_blank");
// $linkDOM.setAttribute("rel", "noopener");
// $linkDOM.setAttribute("href", "https://youtube.com/jonmircha");
// console.log($linkDOM.hasAttribute("rel"));
// $linkDOM.removeAttribute("rel");
// console.log($linkDOM.hasAttribute("rel"));

//Data-Attributes
// console.log($linkDOM.getAttribute("data-description"));
// console.log($linkDOM.dataset);
// console.log($linkDOM.dataset.description);
// $linkDOM.setAttribute("data-description", "Modelo de Objeto del Documento");
// console.log($linkDOM.dataset.description);
// $linkDOM.dataset.description = "Suscríbete a mi canal y comparte";
// console.log($linkDOM.dataset.description);
// console.log($linkDOM.hasAttribute("data-id"));
// $linkDOM.removeAttribute("data-id");
// console.log($linkDOM.hasAttribute("data-id"));

// Clase 64 Estilos y Variables CSS
// const $linkDOM = document.querySelector(".link-dom");

// console.log($linkDOM.style);
// console.log($linkDOM.getAttribute("style"));
// console.log($linkDOM.style.backgroundColor);
// console.log($linkDOM.style.color);
// console.log(window.getComputedStyle($linkDOM));
// console.log(getComputedStyle($linkDOM).getPropertyValue("color"));

// $linkDOM.style.setProperty("text-decoration", "none");
// $linkDOM.style.setProperty("display", "block");
// $linkDOM.style.width = "50%";
// $linkDOM.style.textAlign = "center";
// $linkDOM.style.marginLeft = "auto";
// $linkDOM.style.marginRight = "auto";
// $linkDOM.style.padding = "1rem";
// $linkDOM.style.borderRadius = ".5rem";
// console.log($linkDOM.getAttribute("style"));
// console.log(getComputedStyle($linkDOM));

 //Variables CSS - Custom Properties CSS;
// const $html = document.documentElement,
//     $body = document.body;

// let varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color"),
//     varYellowColor = getComputedStyle($html).getPropertyValue("--yellow-color");

// console.log(varDarkColor, varYellowColor);

// $body.style.backgroundColor = varDarkColor;
// $body.style.color = varYellowColor;

// $html.style.setProperty("--dark-color", "#000");
// varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color");
// $body.style.setProperty("background-color", varDarkColor);
// const $card = document.querySelector(".card");

// console.log($card);
// console.log($card.className);
// console.log($card.classList);
// console.log($card.classList.contains("rotate-45"));
// $card.classList.add("rotate-45");
// console.log($card.classList.contains("rotate-45"));
// console.log($card.className);
// console.log($card.classList);
// $card.classList.remove("rotate-45");
// console.log($card.classList.contains("rotate-45"));
// $card.classList.toggle("rotate-45");
// console.log($card.classList.contains("rotate-45"));
// $card.classList.toggle("rotate-45");
// console.log($card.classList.contains("rotate-45"));
// $card.classList.toggle("rotate-45");
// $card.classList.replace("rotate-45", "rotate-135");
// $card.classList.add("opacity-80", "sepia");
// $card.classList.remove("opacity-80", "sepia");
// $card.classList.toggle("opacity-80", "sepia");

// Clase 66 DOM: Texto y HTML
// const $whatIsDOM = document.getElementById("que-es");

// let text = `
//     <p>
//     El Modelo de Objetos del Documento (<b><i>DOM - Document Object Model</i></b>) es un API para documentos HTML y XML.
//     </p>
//     <p>
//     Éste proveé una representación estructural del documento, permitiendo modificar su contenido y presentación visual mediante código JS.
//     </p>
//     <p>
//     <mark>El DOM no es parte de la especificación de JavaScript, es una API para los navegadores.</mark>
//     </p>
// `;

//$whatIsDOM.innerText = text;
// $whatIsDOM.textContent = text;
// $whatIsDOM.innerHTML = text;
// $whatIsDOM.outerHTML = text;

// const $cards = document.querySelector(".cards");

// console.log($cards);
// console.log($cards.children);
// console.log($cards.childNodes);
// console.log($cards.children[2]);
// console.log($cards.parentElement);
// console.log($cards.parentNode);
// console.log($cards.firstChild);
// console.log($cards.firstElementChild);
// console.log($cards.lastChild);
// console.log($cards.lastElementChild);
// console.log($cards.previousSibling);
// console.log($cards.previousElementSibling);
// console.log($cards.nextSibling);
// console.log($cards.nextElementSibling);
// console.log($cards.closest("div"));
// console.log($cards.children[3].closest("section"));

//Clase 68 DOM: Fragmentos y Elementos

// const $figure = document.createElement("figure"),
//     $img = document.createElement("img"),
//     $figcaption = document.createElement("figcaption"),
//     $figcaptionText = document.createTextNode("Animals"),
//     $cards = document.querySelector(".cards"),
//     $figure2 = document.createElement("figure");

// $img.setAttribute("src","https://picsum.photos/seed/animals/200/200/");
// $img.setAttribute("alt","Animals");
// $figure.classList.add("card");

// $figcaption.appendChild($figcaptionText);
// $figure.appendChild($img);
// $figure.appendChild($figcaption);
// $cards.appendChild($figure);

// $figure2.innerHTML = `
//     <img src="https://picsum.photos/seed/people/200/200/" alt="People">
//     <figcaption>People</figcaption>
// `;

// $figure2.classList.add("card");
// $cards.appendChild($figure2);

// const estaciones = ["Primavera", "Verano", "Otoño", "Invierno"],
//     $ul = document.createElement("ul");

// document.write("<h3>Estaciones del Año</h3>");
// document.body.appendChild($ul);
// estaciones.forEach(estacion => {
//     const $li = document.createElement("li");
//     $li.textContent = estacion;
//     $ul.appendChild($li);
// });

// const continentes = ["África", "América", "Asia", "Europa", "Oceanía"],
//     $ul2 = document.createElement("ul");

// document.write("<h3>Continentes del Mundo</h3>");
// document.body.appendChild($ul2);
// $ul2.innerHTML = "";
// continentes.forEach((continente) => $ul2.innerHTML += `<li>${continente}</li>`);


// //Manera más óptima para insertar elementos en el DOM
// const meses = [
//     "Enero",
//     "Febrero",
//     "Marzo",
//     "Abril",
//     "Mayo",
//     "Junio",
//     "Julio",
//     "Agosto",
//     "Septiembre",
//     "Octubre",
//     "Noviembre",
//     "Diciembre"
// ],
//     $ul3 = document.createElement("ul"),
//     $fragment = document.createDocumentFragment();

//     meses.forEach(mes => {
//         const $li = document.createElement("li");
//         $li.textContent = mes;
//         $fragment.appendChild($li);
//     })

//     document.write("<h3>Meses del Año</h3>")
//     $ul3.appendChild($fragment);
//     document.body.appendChild($ul);

// Clase 69: DOM - Templates HTML

// const $cards = document.querySelector(".cards"),
//     $template = document.getElementById("template-card").content,
//     $fragment = document.createDocumentFragment(),
//     cardContent = [
//         {
//             title: "Tecnología",
//             img: "https://picsum.photos/seed/tech/200/200/"
//         },
//         {
//             title: "Animales",
//             img: "https://picsum.photos/seed/animals/200/200/"
//         },
//         {
//             title: "Gente",
//             img: "https://picsum.photos/seed/people/200/200/"
//         },
//         {
//             title: "Arquitectura",
//             img: "https://picsum.photos/seed/arch/200/200/"
//         },
//         {
//             title: "Naturaleza",
//             img: "https://picsum.photos/seed/nature/200/200/"
//         }
//     ]

// cardContent.forEach(el => {
//     $template.querySelector("img").setAttribute("src", el.img);
//     $template.querySelector("img").setAttribute("alt", el.title);
//     $template.querySelector("figcaption").textContent = el.title;

//     let $clone = document.importNode($template, true);
//         $fragment.appendChild($clone);
// });

// $cards.appendChild($fragment);

// Clase 70 DOM Modificación de Elementos OLD

// const $cards = document.querySelector(".cards"),
//     $newCard = document.createElement("figure"),
//     $cloneCards = $cards.cloneNode(true);

// $newCard.innerHTML = `
//     <img src="https://picsum.photos/seed/tech/200/200/" alt="Lucas">
//     <figcaption>Lucas</figcaption>
// `;

// $newCard.classList.add("card");
 // $cards.replaceChild($newCard, $cards.children[2]);
 // $cards.insertBefore($newCard, $cards.firstElementChild);
// $cards.removeChild($cards.lastElementChild);
// document.body.appendChild($cloneCards);

/* **********     Curso JavaScript: 71. DOM: Modificando Elementos (Cool Style) - #jonmircha     ********** */
/*
.insertAdjacent...
  .insertAdjacentElement(position, el)
  .insertAdjacentHTML(position, html)
  .insertAdjacentText(position, text)

Posiciones:
  beforebegin(hermano anterior)
  afterbegin(primer hijo)
  beforeend(ultimo hijo)
  afterend(hermano siguiente)
*/

// const $cards = document.querySelector(".cards"),
//     $newCard = document.createElement("figure");

// let $contentCard = `
//     <img src="https://picsum.photos/seed/tech/200/200/" alt="Lucas">
//     <figcaption></figcaption>
// `;

// $newCard.classList.add("card");

 // $cards.insertAdjacentHTML("beforebegin", $newCard);
// $newCard.insertAdjacentHTML("beforeend", $contentCard);
// $newCard.querySelector("figcaption").insertAdjacentText("afterbegin", "Lucas");

// $cards.insertAdjacentHTML("afterbegin", $newCard);

// $cards.prepend($newCard);

// $cards.insertAdjacentHTML("beforeend", $newCard);
// $cards.insertAdjacentHTML("afterend", $newCard);

// Clase 73 DOM
function holaMundo() {
  alert("Hola Mundo");
  console.log(event);
}

function saludar(nombre = "Desconocido") {
alert(`Hola ${nombre}`)
console.log(event);
}

const $eventoSemantico = document.getElementById("evento-semantico"),
  $eventoMultiple = document.getElementById("evento-multiple"),
  $eventoRemover = document.getElementById("evento-remover");

$eventoSemantico.onclick = holaMundo;

$eventoSemantico.onclick = function(e) {
  alert("Hola Mundo Manejador de Eventos Semántico");
  console.log(e);
  console.log(event);
}

$eventoMultiple.addEventListener("click", holaMundo);
$eventoMultiple.addEventListener("click", (e) => {
  alert("Hola Mundo Manejador de Eventos Múltiple");
  console.log(e);
  console.log(e.type);
  console.log(e.target);
  console.log(event);
});

$eventoMultiple.addEventListener("click", () => {
  saludar();
  saludar("Ronki");
});

const removerDobleClick = (e) => {
  alert(`Removiendo el evento de tipo: ${e.type}`);
  console.log(e);
  $eventoRemover.removeEventListener("dblclick",removerDobleClick);
  $eventoRemover.disabled = true;
}

$eventoRemover.addEventListener("dblclick", removerDobleClick);



// Clase 74 DOM

const $divsEventos = document.querySelectorAll(".eventos-flujo div"),
  $linkEventos = document.querySelector(".eventos-flujo a");

function flujoEventos(e) {
  console.log(`Hola te saluda ${this.className}, el click lo originó ${e.target.className}`);
  // e.stopPropagation();
}

// console.log($divsEventos);

$divsEventos.forEach(div => {
  // Fase de burbuja, sin especificar o con un false
  // div.addEventListener("click", flujoEventos)
  // div.addEventListener("click", flujoEventos, false)

  // Fase de captura
  // div.addEventListener("click", flujoEventos, true)
  // div.addEventListener("click", flujoEventos, {
  //   capture: false,
  //   once: true
  // })
})

// Clase 75 - STOP PROPAGATION Y PREVENT DEFAULT
// $linkEventos.addEventListener("click", (e) => {
//   alert("Hola");
//   e.preventDefault();
//   e.stopPropagation();
// })

// Clase 76 DELEGACIÓN DE EVENTOS
document.addEventListener("click", (e) => {
  console.log("Click en", e.target);

  if(e.target.matches(".eventos-flujo div")) {
    flujoEventos(e);
  }

  if(e.target.matches(".eventos-flujo a")) {
    alert("Hola");
    e.preventDefault();
  }
})