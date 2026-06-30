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
});

//==============================
// CARTA
//==============================

const carta = `

Aquí escribiremos la carta para mamá.

Por ahora esto es solamente una prueba.

Después escribiremos algo muy bonito,
con todo tu corazón.

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