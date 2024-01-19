let palabras = ["SOL", "ARBOL", "SENSACION"];
let palabraSecreta = "";





function iniciarJuego(){
    seleccionarPalabra();
    baseAhorcado();
    baseLetras();
    borrarAhorcado();

}

function seleccionarPalabra(){
    let pal = palabras[Math.floor(Math.random()*palabras.length)];
    palabraSecreta = pal;
}