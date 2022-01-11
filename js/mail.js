// # Mail
// Crea un array di email;
// Chiedi all’utente la sua email.
// controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato in console sull’esito del controllo.

const displayElement = document.getElementById("display");

const mails = ['fizzbuzz@gmail.com', 'fizz@gmail.com', 'buzz@gmail.com'];

let mailAnswer = prompt('Inserisci la tua mail', 'fizz@gmail.com');

for (let i = 0; i < mails.length; i++) {
    if (mailAnswer === mails[i]) {
        console.log('Trovato');
    } else {
        console.log("Non trovato");
    }
}

const isAllowed = mails.includes(mailAnswer);

const message = isAllowed === true ? `Benvenuto ${mailAnswer}` : 'Spiacente non sei autorizzato';

displayElement.innerText = message;