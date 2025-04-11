/**
 * genera numeri casuali e inserirli in un array x
 * aggiungi numeri in ul#numbers-list x
 * fai partire il countdown x
 * a fine countdown nascondi ul@numbers-list
 */


// function : ciclo numeri casuali e array numeri casuali

function generaNumeriCasuali() {
    const numeriCasuali = [];
    for (let i = 0; i < 5; i++) {
      numeriCasuali.push(Math.floor(Math.random() * 50) + 1); // numeri tra 1 e 50
    }
    return numeriCasuali;
  }
  //   console.log(generaNumeriCasuali());

const numeriRandom = generaNumeriCasuali();
// console.log(numeriRandom)

// function : inserisco i numeri all'interno della lista

function elementiInseriti(numeriCasuali){
    const ul = document.getElementById("numbers-list");
    ul.innerHTML = "";

    for (let i = 0; i < numeriCasuali.length; i++) {
        const li = document.createElement("li");
        li.textContent = numeriCasuali[i];
        ul.appendChild(li);
    }
}
elementiInseriti(numeriRandom);

// Function : Creo un timer di 30 secondi

function startCountdown(seconds) {
    const countdownElement = document.getElementById("countdown");
    let timeLeft = seconds;
    countdownElement.textContent = `${timeLeft} secondi rimanenti`;

    const timer = setInterval(function () {
      timeLeft--; // Diminuisce il tempo rimasto
      countdownElement.textContent = `${timeLeft} secondi rimanenti`;

      // Quando il timer finisce
      if (timeLeft <= 0) {
        clearInterval(timer);
        countdownElement.textContent = "Tempo scaduto!";

        // Nasconde i numeri dopo 30 secondi
        document.getElementById("numbers-list").classList.add("d-none");
        //Nasconde la lista di numeri
        document.getElementById("answers-form").classList.remove("d-none");

      }
    }, 1000); // Aggiorna ogni secondo (1000 millisecondi)
  }

  startCountdown(3);

