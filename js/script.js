/**
 * genera numeri casuali e inserirli in un array x
 * aggiungi numeri in ul#numbers-list x
 * fai partire il countdown
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
console.log(numeriRandom)

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


// const numeri = [12, 25, 37, 42, 8]; // il tuo array
// const ul = document.getElementById("lista");

// // Ciclo per aggiungere ogni numero come <li>
// numeri.forEach(function(numero) {
//   const li = document.createElement("li");
//   li.textContent = numero;
//   ul.appendChild(li);
// });
