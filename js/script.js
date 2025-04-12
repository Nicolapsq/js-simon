/**
 * genera numeri casuali e inserirli in un array x
 * aggiungi numeri in ul#numbers-list x
 * fai partire il countdown x
 * a fine countdown nascondi ul@numbers-list  e visualizza form x 
 * indicare quali e quanti numeri sono stati indovinati
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
    
const numeriRandom = generaNumeriCasuali();
// console.log(numeriRandom);
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
        // Visualizza la lista di numeri
        document.getElementById("answers-form").classList.remove("d-none");

      }
    }, 1000); // Aggiorna ogni secondo (1000 millisecondi)
}

startCountdown(3);

// Al click del bottone .....

const inputElement = document.querySelectorAll(".form-control");
const bottone = document.getElementById("btn-conferma");
// const valoriInseritiUtente = [];

bottone.addEventListener("click", function() {
    console.log("click");
     // Raccolgo tutti i valori degli input in un array
  const valoriInseritiUtente = [];
  
  inputElement.forEach(input => {
    const valore = parseInt(input.value);
    if (!isNaN(valore)){
        valoriInseritiUtente.push(valore);
    }
    });
    
    // Controllo dei duplicati
    const valoriUnici = new Set(valoriInseritiUtente);
    
    if (valoriUnici.size !== valoriInseritiUtente.length) {
        alert("Inserisci numeri in tutte le caselle e che non siano uguali fra loro");
        return;
    }
    
});
// console.log(valoriInseritiUtente); // Aggiungi per debug


//Controllo quanti numeri sono stati indovinati
const numeriIndovinati = valoriInseritiUtente.filter(function(numero){
    return numeriRandom.includes(numero);
});

if (numeriIndovinati.length > 0) {
    alert(`hai indovinato ${numeriIndovinati.length} numeri ${numeriIndovinati.join(", ")}`)
}
else {
    alert("Nonh hai indovinato nessun numero")
}