
const mots = [
  "osculaire",
  "lichouserie",
  "metromanie",
  "lantiponner",
  "sommelier",
];

const chancesMax = 7;
let chancesRestantes = chancesMax;
let motMystere = "";
let motAffiche = "";
let lettresRestantes = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

document.getElementById("rejouer").addEventListener("click", initialiserJeu);

function initialiserJeu() {
  chancesRestantes = chancesMax;
  document.getElementById("chances").innerText = chancesRestantes;

  motMystere = mots[Math.floor(Math.random() * mots.length)].toUpperCase();
  motAffiche = "_".repeat(motMystere.length);
  document.getElementById("motMystere").innerText = motAffiche
    .split("")
    .join(" ");

  lettresRestantes = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  document.getElementById("lettresRestantes").innerText = lettresRestantes;

  document.addEventListener("keydown", gererTentative);
}

function gererTentative(event) {
  const lettre = event.key.toUpperCase();
  if (lettresRestantes.includes(lettre)) {
    lettresRestantes = lettresRestantes.replace(lettre, "");
    document.getElementById("lettresRestantes").innerText = lettresRestantes;

    if (motMystere.includes(lettre)) {
      let nouveauMotAffiche = "";
      for (let i = 0; i < motMystere.length; i++) {
        if (motMystere[i] === lettre) {
          nouveauMotAffiche += lettre;
        } else {
          nouveauMotAffiche += motAffiche[i];
        }
      }
      motAffiche = nouveauMotAffiche;
      document.getElementById("motMystere").innerText = motAffiche
        .split("")
        .join(" ");

      if (motAffiche === motMystere) {
        document.removeEventListener("keydown", gererTentative);
        alert("Gagné! Le mot était " + motMystere);

        let audio = new Audio("musique/applause.mp3");
        audio.play();
      }
    } else {
      chancesRestantes--;
      document.getElementById("chances").innerText = chancesRestantes;

      if (chancesRestantes === 0) {
        document.removeEventListener("keydown", gererTentative);
        alert("Perdu! Le mot était " + motMystere);

        let audio = new Audio("musique/sinus-bomb-137068.mp3");
        audio.play();
      }
    }
  }
}
initialiserJeu();

const keyboard = document.getElementById('keyboard');
  const display = document.getElementById('display');

  keyboard.addEventListener('click', event => {
    if (event.target.classList.contains('key')) {
      display.value += event.target.textContent;
    }
  });






  