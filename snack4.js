// Crea un array di oggetti che rappresentano delle persone.
// Ogni persona ha un nome, un cognome e un'età.
// Partendo da questo, crea quindi un nuovo array inserendo, per ogni persona, una frase (stringa) con il nome e cognome e l'indicazione se può guidare, in base all'età.

const drivers = [
    { nome: 'Davide', cognome: 'Monte', età: 32 },
    { nome: 'Sofia', cognome: 'Massu', età: 28 },
    { nome: 'Pepe', cognome: 'Cacioni', età: 8 },
]

console.log(drivers)

const checkDrivers = []
drivers.forEach((driver, driverIndex) => {
    const driverCopy = { ...driver };
    if (driver.età >= 18) {
        driverCopy.license = `${driver.nome} ${driver.cognome} è ok per guidare`
    } else {
        driverCopy.license = `${driver.nome} ${driver.cognome} NON può guidare ancora`
    }
    checkDrivers.push(driverCopy)
})
console.log(checkDrivers)