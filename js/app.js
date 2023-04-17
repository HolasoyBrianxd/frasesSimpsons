import { frasesSimpsons } from "./frases.js";

let frase = document.querySelector('#frases');
let personajes = document.querySelector('#personaje');
let boton = document.querySelector('#nueva-frase');

// CUANDO HACE CLICK EN EL BOTON CAMBIA LA FRASE
boton.addEventListener('click', () => {
    let random = Math.floor(Math.random() * frasesSimpsons.length);

    // CAMBIA LA FRASE DEL HTML SELECCIONANDO ALEATORIAMENTE DE frase.js
    frase.innerText = frasesSimpsons[random].frase;
    personajes.innerText = frasesSimpsons[random].personajes;
});
