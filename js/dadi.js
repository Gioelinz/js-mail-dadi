// # Gioco dei dadi
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.
// Stampare in console i tiri di dado e il risultato.

let user
let pc

for (let i = 0; i < 1; i++) {
    user = Math.floor(Math.random() * 6) + 1;
    pc = Math.floor(Math.random() * 6) + 1;
    console.log(`Tuo punteggio: ${user} Punteggio avversario: ${pc}`)

    if (user > pc) {
        console.log("Hai vinto!")
    } else if (user < pc) {
        console.log("Hai perso!")
    } else {
        console.log("Pareggio!")
    }
}

