// A partire da un array di stringhe, crea un secondo array formattando le stringhe del primo array in minuscolo e con l'iniziale maiuscola.
// Es: ['pippo', 'PLUTO', 'Paperino'] => ['Pippo', 'Pluto', 'Paperino']

const randomStr = [`ROMA`, `PARIGI`, `MADRID`, `LISBON`, `LONDON`, `BERLIN`]

console.log(randomStr);

const formatStr = []

randomStr.forEach(word => {

    const lowerWord = word.toLowerCase();
    const formatWord = lowerWord.charAt(0).toUpperCase() + lowerWord.slice(1); //prendo il primo carattere della stringa lo metto in mauscolo POI con slice indico di aggiungere i restanti caratteri solo da quello in posizione 1 in poi

formatStr.push(formatWord)

})

console.log(formatStr)