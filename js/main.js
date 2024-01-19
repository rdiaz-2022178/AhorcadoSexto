let palabras = ["SOL", "ARBOL", "COLEGA"];
let palabraSecreta = "";


function iniciarJuego(){
    borrarAhorcado();
    seleccionarPalabra();
    baseAhorcado();
    baseLetras();

}

function seleccionarPalabra(){
    let pal = palabras[Math.floor(Math.random()*palabras.length)];
    palabraSecreta = pal;
}

function obtenerLetra(letra){
    let btnSeleccionado = document.getElementById("tecla"+letra);
}