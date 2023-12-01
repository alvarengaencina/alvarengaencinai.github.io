let INTENTO = 6;

let diccionario = [
    "APPLE",
    "HURLS",
    "WINGS",
    "HOUSE",
    "YOUTH",
    "HELLO",
];

let palabra = obtenerPalabra(diccionario);

const button = document.getElementById("guess-button");

let verde = "#79b851";
let amarillo = "#f3c237";
let gris = "#a4aec4";

function obtenerPalabra(diccionario) {
    let max = diccionario.length - 1;
    let min = 0;
    let i = Math.floor(Math.random() * (max - min + 1)) + min;
    let palabraAlareatoria = diccionario[i];
    return palabraAlareatoria;
}

button.addEventListener("click", intentar);
const input = document.getElementById("guess-input");

function intentar() {
    const valor = input.value.toUpperCase();

    if (valor === palabra) {
        terminar("<h1>GANASTE!</h1>");
        return;
    }

    const GRID = document.getElementById("grid");
    const ROW = document.createElement("div");
    ROW.className = "row";

    for (let i = 0; i < palabra.length; i++) {
        const span = document.createElement("span");
        span.className = "letter";
        span.innerHTML = valor[i] || ""; // Utiliza valor[i] si existe, de lo contrario, cadena vacía
        let color = gris; // color predeterminado

        if (valor[i] === palabra[i]) {
            console.log(valor[i], "VERDE");
            color = verde;
        } else if (palabra.includes(valor[i])) {
            console.log(valor[i], "AMARILLO");
            color = amarillo;
        } else {
            console.log(valor[i], "GRIS");
        }

        span.style.backgroundColor = color;
        ROW.appendChild(span);
    }

    INTENTO--;
    if (INTENTO === 0) {
        terminar("<h1>PERDISTE!</h1>");
    }

    GRID.appendChild(ROW);
}

function terminar(mensaje) {
    const INPUT = document.getElementById("guess-input");
    input.disabled = true;
    button.disabled = true;
    let contenedor = document.getElementById('guesses');
    contenedor.innerHTML = mensaje;
}
