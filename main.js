// Crea un array composto da 10 automobili.
// Ogni oggetto automobile avrà le seguenti proprietà: marca, modello e alimentazione (benzina, diesel, gpl, elettrico, metano).
// Dividi le automobili in 3 array separati: nel primo array solo le auto a benzina, nel secondo solo le auto a diesel, nel terzo il resto delle auto.
// Infine stampa separatamente i 3 array.

const carsData = {
    brands: ['Opel', 'Fiat', 'Toyota', 'Tesla', 'Bmw', 'Ford'],
    models: [
        ['Mokka', 'Corsa', 'Agila', 'Astra', 'Vectra'],   // Modelli Opel
        ['Punto', 'Bravo', 'Panda', '500'],               // Modelli Fiat
        ['Yaris', 'Aygo', 'Rav', 'Corolla'],              // Modelli Toyota
        ['X', 'X1', 'S1', 'S2'],                          // Modelli Tesla
        ['Series 1', 'M3'],                               // Modelli BMW
        ['Puma', 'Fiesta', 'Mustang']                     // Modelli Ford
    ],
    fuels: ['Gasoline', 'Diesel', 'Gpl', 'Electric', 'Metano']
};

// Array per contenere le 10 automobili casuali
const cars = [];

for (let i = 0; i < 10; i++) {
    // Scegli una marca casuale
    const randomBrandIndex = Math.floor(Math.random() * carsData.brands.length);
    const brand = carsData.brands[randomBrandIndex];

    // Scegli un modello casuale dalla marca scelta
    const modelsForBrand = carsData.models[randomBrandIndex];
    const model = modelsForBrand[Math.floor(Math.random() * modelsForBrand.length)];

    // Scegli un tipo di alimentazione casuale
    const fuel = carsData.fuels[Math.floor(Math.random() * carsData.fuels.length)];

    // Crea l'oggetto automobile
    const car = {
        marca: brand,
        modello: model,
        alimentazione: fuel
    };

    // Aggiungi l'automobile all'array
    cars.push(car);
}

console.log(cars);

const carsGasoline = [];
const carsDiesel = [];
const carsOthers = [];
