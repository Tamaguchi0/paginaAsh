const mensajes = [
    "Me alegra muchisimo tenerte a mi lado",
    "Te adoro",
    "Ola como tai?",
    "Te amooo",
    "Pase lo que pase espero siempre estar contigo",
    "Aunque no estes a mi lado siempre estas en mi corazoncito",
    "Miramar no existe",
    "Eres la niña mas bonita del universo",
    "Me podria perder por horas en tus ojitos",
    "Amo cada parte de ti",
    "Realmente no necesitas de alguien para que te complete, solo necesitas de alguien que te acepte completamente",
    "Cuando te miro sonrio, debes saberlo, sucede con demasiada frecuencia y no lo considero una coincidencia",
    "You are the only exception",
    "Enserio me haces muy feliz",
    "Aunque se que no siempre estoy presente espero que sepas que pase lo que pase te amo muchisimo",
    "Diviertete, o te golpeo con mi guitarra",
    "`You make everything alright´",
    "Como cuesta hacer que esto  sirva para telefono",
    "Me encanta oirte cantar",
    "Tengo vino y un melon",
    "Tranky fanky woopty woop",
    "Soy moreno, soy de chocolate",
    "Amo mucho que seas mi novia y mi mejor amiga",
    "Ojala algun dia seamos mas que novios",
    "네가 있어 난 다시 웃어",
    "14",
    "42",
    "- . / .- -- ---",
    "Perdon por no siempre ser la persona que mereces a tu lado",
    "Lucho por poder tener una vida bonita juntos",
    "Si ves esto te debo unos numggets",
    "Quiero ser siempre tu novio con vibes de golden o gato naranjoso",
    "Tengamos muchos manimalitos juntos",
    "Te mereces todo lo lindo de este mundo",
    "Te comas tus vegetales",
    "Te ama cada dia y cada segundo mas",
    "Que su dia favorito es el 25 de octubre",
    "Picha se mama",
    "Tengamos un mundo de minecraft juntos",
    "Los pinguinos son lindos, COMO TU :D",
    "Deberias llamarte bonita, por que eres muy bonita",
    "Esterno cleido mastoideo",
    "No es el mejor regalo pero me esforce jaja",
    "Omae wa mou",
    "Quien le ordeno al mundo girar",
    "Podria estar mejorando esta pagina en vez de estar escribiendo cosas aca",
    "'Mi sueño no estaría completo sin ti'",
    "'Cada final feliz es un nuevo y gran comienzo' y espero que siempre sean contigo",
    "Me haces sentir capaz de todo",
    "Estoy muy orgullozo de ti",
    "Wolaaaaa",
    "Como estas, a parte de bien guapa?",
    "jijijijij",
    "Eres arte nena",
    "Siempre seras mi niña hermosa",
    "¿Ya es hoy :O?",
    "La vida me regalo un instante a tu lado, mi corazón decidió que ese instante fuera eterno",
    "‘Prefiero morir mañana que vivir cien años sin conocerte’",
    "Definitivamente no eres el poste que menos mean",
    "Tus ojos son magicos, los abriste",
    "Estoy al lado tuya mientras escribo este mensaje jijiji"




];

// Obtener referencia a la imagen
const miOso = document.getElementById("smilePinkie");

// Asignar manejador de click
miOso.addEventListener("click", () => {

    // Obtener un indice aleatorio
    const indiceAleatorio = Math.floor(Math.random() * mensajes.length);

    const textoConEstilo = `<span style="font-size: 30px;">${mensajes[indiceAleatorio]}</span>`;

    Swal.fire({
        title: 'Dice maricio que: ',
        html: textoConEstilo,
    });

});