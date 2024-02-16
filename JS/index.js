const yesBtn = document.querySelector('#yesBtn');
const mensaje = [
    "Ah graciosita",
    "Como que no????",
    "A ver hija de su rpm",
    "Era el otro boton",
    "Que este boton no",
    "Ah necedad",
    "Tristeza total y absoluta",
    "Cuando alguien me amaba, me sentia tan feliz",
    "Ah chinga",
    "Graciosita",
    "Me rio?",
    "Si esta bonito perseguie el boton, pero es el otro",
    "jiji que graciosa",
    "Ya no me amas",
    "pipipipipi",
    "Satanas es playo",
    "ja ja ja ja ja, es el otro boton",
    "Malvada",
    "Diablas todas",
    "Se va a llorar*",
    "Por que me odias?",
    "Cual fue el mal que yo hice?",
    "P-pero"

];


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
    const indiceAleatorio = Math.floor(Math.random() * mensaje.length);
    const imageUrl = "resources/triztesaTotalYabsoluta.gif";

    Swal.fire({
        imageUrl: imageUrl,
        title: ":(",
        text: mensaje[indiceAleatorio],
        confirmButtonText: "Si, soy un amor"
    })


}
