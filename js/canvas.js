function baseAhorcado(){
    tablero.lineWidth =14;
    
    ctx.fillStyle = "rgba(255,255,255,0.1)";
    ctx.strokeStyle = "black" ;
    
    ctx.fillRect(0, 0, 700,400);
    ctx.beginPath();
    ctx.moveTo(250, 240);
    ctx.lineTo(470, 240);
    ctx.moveTo(270, 240);
    ctx.lineTo(270, 5);
    ctx.moveTo(270, 10);
    ctx.lineTo(375, 10);
    ctx.moveTo(370, 10);
    ctx.lineTo(370,30);
    ctx.stroke();
    ctx.closePath();
}

function borrarAhorcado(){
    ctx.clearReact(0,0,600,500);
}