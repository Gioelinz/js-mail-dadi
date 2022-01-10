// # Mail
// Crea un array di email;
// Chiedi all’utente la sua email.
// controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato in console sull’esito del controllo.

const mails = ['fizzbuzz@gmail.com', 'fizz@gmail.com', 'buzz@gmail.com'];

let mailAnswer = prompt('Inserisci la tua mail', 'fizz@gmail.com');

for (let i = 0; i < mails.length; i++) {
    if (mailAnswer == mails) {
        console.log('Controllo Ok, Puoi accedere!')
    } else {
        console.log('La mail non è stata trovata nella lista, riprova!')
    }
}