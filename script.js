//==============================
// BOTONES
//==============================

const continueBtn = document.getElementById("continueBtn");
const letterBtn = document.getElementById("letterBtn");

const welcome = document.getElementById("welcome");
const mainPage = document.getElementById("mainPage");
const letterSection = document.getElementById("letterSection");

const music = document.getElementById("music");

continueBtn.addEventListener("click", () => {

    welcome.classList.add("fadeOut");

    setTimeout(()=>{

        welcome.style.display="none";

        mainPage.style.display="flex";

        mainPage.classList.add("fadeIn");

        music.play().catch(()=>{});

    },600);

});


letterBtn.addEventListener("click",()=>{

    mainPage.classList.add("fadeOut");

    setTimeout(()=>{

        mainPage.style.display="none";

        letterSection.style.display="flex";

        letterSection.classList.add("fadeIn");

        escribirCarta();

    },600);

});


//==============================
// CARTA
//==============================

const carta = `

Querida Ema:
No sé si existan las palabras suficientes para expresar todo lo que siento en este momento, pero quiero intentarlo, porque eres una de las personas más importantes de mi vida y no quiero seguir cargando con este dolor.
Lo primero que quiero decirte es perdón. Perdón por las palabras tan hirientes que te dije. No importa cuánto enojo sintiera en ese momento, nada justifica que te haya faltado al respeto, que te haya insultado o que te hiciera sentir mal. Hoy, al recordar ese momento, siento mucha vergüenza y mucho arrepentimiento. Soy una FRACASA por haberte tratado así. 
Quiero que sepas que la verdadera fracasada no eres tú, la que se equivocó fui yo. Fui yo quien permitió que el enojo hablara por encima del amor que siento por ti, y eso es algo que me duele profundamente.
También necesito abrirte mi corazón y contarte algo que llevo guardando desde hace muchos años. Desde que era muy pequeña, muchas veces sentí que había una diferencia entre Max y Zoe. Sentía que a ellos les dabas un cariño o una atención que yo no lograba sentir igual. Tal vez nunca fue tu intención, pero así fue como yo lo vivo. Desde los seis años empecé a guardar esa tristeza en silencio, intentando convencerme de que algún día dejaría de doler. Con el tiempo aprendí a vivir con ese sentimiento, aunque nunca desapareció por completo.
No te cuento esto para hacerte sentir culpable ni para reclamarte. Te lo cuento porque quiero que entiendas de dónde nació el dolor que explotó aquel día en específico. Cuando sentí nuevamente ese rechazo, fue como si todas esas heridas que había intentado esconder durante tantos años se abrieran de golpe. Y reaccioné de la peor manera posible.
Nada de eso justifica lo que dije. Sé que mis palabras te lastimaron y me duele haber sido yo quien provocara ese dolor.
Mamá, sin ti me he sentido completamente rota. Estos días he entendido cuánto significas para mí. Extraño nuestras conversaciones, nuestras risas, esa conexión tan bonita que siempre sentí que teníamos a pesar de todo. Me duele pensar que fui yo quien rompió algo tan valioso.
Quiero pedirte algo desde el fondo de mi corazón. Así como yo he tratado de comprender muchas de las cosas que has vivido y las decisiones difíciles que has tenido que tomar, también te pido que intentes comprender lo que pasa dentro de mí. A veces mis emociones me sobrepasan y reacciono de maneras que después detesto. No estoy orgullosa de eso y estoy trabajando para cambiarlo, porque no quiero volver a lastimarte nunca más.
No quiero perderte. No quiero que este error sea más grande que todo el amor que siento por ti. Eres mi mamá, la persona que me dio la vida, y la que mas amo  y aunque a veces nuestras heridas nos hayan separado, nunca has dejado de ser alguien indispensable para mí.
No espero que olvides lo que pasó de un día para otro. Solo espero que algún día puedas perdonarme y darme la oportunidad de demostrarte, con hechos y no solo con palabras, que puedo ser una mejor iga.
Te amo muchísimo, Ema.
Y siempre lo haré.
Con todo mi corazón,
Tu Iga. 🤍


🤍

`;

let i = 0;

function escribirCarta(){

    const texto = document.getElementById("typedText");

    texto.innerHTML = "";

    i = 0;

    const intervalo = setInterval(()=>{

        texto.innerHTML += carta.charAt(i);

        i++;

        if(i >= carta.length){

            clearInterval(intervalo);

        }

    },40);

}

//==============================
// PÉTALOS
//==============================

function crearPetalo() {

    const petalo = document.createElement("div");
    petalo.classList.add("petal");

    // posición inicial
    petalo.style.left = Math.random() * 100 + "vw";
    petalo.style.top = "-40px";

    // tamaño variado
    const size = 8 + Math.random() * 10;
    petalo.style.width = size + "px";
    petalo.style.height = size + "px";

    // duración y movimiento
    petalo.style.animationDuration = 6 + Math.random() * 6 + "s";

    document.getElementById("petals").appendChild(petalo);

    setTimeout(() => {
        petalo.remove();
    }, 12000);
}

setInterval(crearPetalo, 250);

//===================================
// DESTELLOS
//===================================

function crearDestello(){

    const sparkle = document.createElement("div");

    sparkle.className = "sparkle";

    sparkle.style.left = Math.random()*100+"vw";
    sparkle.style.top = Math.random()*100+"vh";

    document.body.appendChild(sparkle);

    setTimeout(()=>{

        sparkle.remove();

    },3000);

}

setInterval(crearDestello,350);