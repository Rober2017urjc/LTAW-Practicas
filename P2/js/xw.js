function main() {

    // Obtenemos los audios
    var audioblaster = document.getElementById("audioblaster");
    var audioxiwing = document.getElementById("audioXWing");
    var audiocarrito = document.getElementById("audiocarrito");
    var audiocompra =document.getElementById("audiocompra");

    // Obtenemos los productos
    var blaster = document.getElementById("blaster");
    var xwing = document.getElementById("XWing");

    //Obtengo la caja de búsqueda y el display
    var caja = document.getElementById("caja_busqueda");
    var display = document.getElementById("display");

    blaster.onmouseover = () => {
        audioblaster.play();
    }

    xwing.onmouseover = () => {
        audioxiwing.play();
    }
}