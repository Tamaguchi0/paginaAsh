const yesBtn = document.querySelector('#yesBtn');

yesBtn.addEventListener('click',function () { //que va a pasar si se pulsa el boton si
    let html =`
        <div id="swal-image">
            <img src='resources/fluffy.gif' style="width: 200px; height: 150px">
            <h1>YEIIII</h1>
            <h2>Yo sabia que ibas a tomar la desición correcta :)</h2>
           
        </div>`;

    Swal.fire({
        html: html,
        timer: 5000,
        showConfirmButton: false
    }).then(()=>{
        window.location.href = 'carta.html';
    })
});

const noBtn = document.querySelector('#noBtn');
let contador = 0;

function escapar() {

    // Obtener contenedor
    const contenedor = document.querySelector(".contenedor");

    // Obtener dimensiones
    const maxX = contenedor.clientWidth - noBtn.clientWidth;
    const maxY = contenedor.clientHeight - noBtn.clientHeight;

    // Coordenadas aleatorias limitadas
    const x = Math.random() * maxX ;
    const y = Math.random() * maxY;

    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";


    noBtn.style.position = "absolute";


    // Quitar transformadas
    noBtn.style.transform = "none";

    // Contador y alerta
    contador++;
    if(contador === 10) {
        mostrarAlertaCont();
        contador = 0;
    }

}

// Llamar función al hacer hover o tocar
noBtn.addEventListener("mouseover", escapar);
noBtn.addEventListener("touchstart", escapar);
//Pruebas----------------------------------------------


function mostrarAlertaCont() {
    let html =`
        <div id="swal-image">
            <img src='resources/triztesaTotalYabsoluta.gif' style="width: 200px; height: 150px">
            <h1>>:(</h1>
            <h2>PONER LIS DE MENSAJES</h2>
     
           
        </div>`;

    Swal.fire({
        html: html,
        confirmButtonText: 'Si,soy un amor',
    })

}