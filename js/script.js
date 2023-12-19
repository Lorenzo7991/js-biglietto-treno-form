console.log('JS OK')

/* 
//Recupero dell'elemento di "stampa" nel DOM
document.getElementById('userMessage');
console.log(userMessage);

//Variabili di imput da parte dell'utente
let userKm = parseInt(prompt("Inserisci il numero di chilometri:", 800));
let userAge = parseInt(prompt("Inserisci la tua età a numero:", 26));
console.log("kilometri utente: " + userKm,"Età utente: " + userAge);

//Controllo per l'inserimento numero valido KM
if (isNaN(userKm) || userKm <= 0) {
    userKm = parseInt(prompt("Inserisci un numero di chilometri valido (deve essere un NUMERO e MAGGIORE di ZERO(0)):"));
}

// Controllo per l'inserimento numero valido per l'età
if (isNaN(userAge) || userAge <= 0) {
    userAge = parseInt(prompt("Inserisci un'età valida (deve essere un NUMERO e MAGGIORE di ZERO(0)):"));
}

//Variabile contenete il prezzo standard per km
const ticketStandardPrice = 0.21;

//calcolo del prezzo standard per km senza applicare sconti
let totPrice = userKm * ticketStandardPrice;


if(userAge < 18){
    const minors = 0.2;
    totPrice = totPrice - (totPrice * minors);
} else if(userAge >= 65){
    const over = 0.4;
    totPrice = totPrice - (totPrice * over);
}
//Stampa del prezzo finale in cosole e in pagina
console.log("Prezzo finale: " + totPrice.toFixed(2));
userMessage.innerHTML = `<strong>Il prezzo finale della tua tratta è:</strong> ${totPrice.toFixed(2)} euro`
*/

//Recupero elementi nel DOM e li inizializzo in una variabile
const firstNameInput = document.getElementById('user-firstname');
const lastNameInput = document.getElementById('user-lastname');
const kmsInput = document.getElementById('user-kms');
const ageInput = document.getElementById('user-age');
const calcBtn = document.getElementById('calc-btn');
const delBtn = document.getElementById('del-btn');

//Inizializzazione e assegnazione della variabile contenente il prezzo standard a km del biglietto
const ticketStandardPrice = 0.21;

//EventListener sul btn 
calcBtn.addEventListener('click', function(){
    let firstName = firstNameInput.value;
    let lastName = lastNameInput.value;
    let kms = parseInt(kmsInput.value);
    if (isNaN(kms) || kms <= 0) {
        alert("Inserisci un valore NUMERICO e diverso da ZERO(0) per i chilometri.");
        return;
    }
    let age = parseInt(ageInput.value);
    if (isNaN(age) || age <= 0) {
        alert("Inserisci un valore NUMERICO e diverso da ZERO(0) per l'età.");
        return;
    }
    let ticketPrice = kms * ticketStandardPrice;

    console.log(firstName, lastName, kms, age,"Prezzo standard: " + "€ " + ticketPrice);

    if (age < 18) {
        ticketPrice *= 0.8;  // Sconto del 20% per gli under 18
    } else if (age >= 65) {
        ticketPrice *= 0.6;  // Sconto del 40% per gli over 65
    }

    console.log("Prezzo del biglietto scontato: " + "€ " + ticketPrice)

});

delBtn.addEventListener('click', function () {
    firstNameInput.value = '';
    lastNameInput.value = '';
    kmsInput.value = '';
    ageInput.value = '';
});