/*
/* ESERCIZIO 1
    Dato il seguente array, scrivi del codice per stampare ogni elemento dell'array in console.
*/
const pets = ['dog', 'cat', 'hamster', 'redfish'];
for (let i = 0; i < pets.length; i++) {
  console.log(pets[i])
}

/* ESERCIZIO 2
    Scrivi del codice per ordinare alfabeticamente gli elementi dell'array "pets".
*/
const pets2 = ["dog", "cat", "hamster", "redfish"]  
console.log(pets2.sort())

/* ESERCIZIO 3
    Scrivi del codice per stampare nuovamente in console gli elementi dell'array "pets", questa volta in ordine invertito.
*/
const pets3 = ["dog", "cat", "hamster", "redfish"]; // Ho creato una copia per evitare modifiche all'array originale
console.log(pets3.reverse())

/* ESERCIZIO 4
    Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione.
*/
const pets4 = ['dog', 'cat', 'hamster', 'redfish']
let primoElemento = pets4.shift()
pets4.push(primoElemento)
console.log(pets4)

/* ESERCIZIO 5
    Dato il seguente array di oggetti, scrivi del codice per aggiungere ad ognuno di essi una proprietà "licensePlate" con valore a tua scelta.
*/
const cars = [
  {
    brand: 'Ford',
    model: 'Fiesta',
    color: 'red',
    trims: ['titanium', 'st', 'active'],
  },
  {
    brand: 'Peugeot',
    model: '208',
    color: 'blue',
    trims: ['allure', 'GT'],
  },
  {
    brand: 'Volkswagen',
    model: 'Polo',
    color: 'black',
    trims: ['life', 'style', 'r-line'],
  },
];
for (let i = 0; i < cars.length; i++) {
  cars[i].licensePlate = 'ABC1234'
}
console.log(cars)

/* ESERCIZIO 6
    Scrivi del codice per aggiungere un nuovo oggetto in ultima posizione nell'array "cars", rispettando la struttura degli altri elementi.
    Successivamente, rimuovi l'ultimo elemento della proprietà "trims" da ogni auto.
*/
const newCar = {
  brand: 'Ferrari',
  model: '655f',
  color: 'rosso',
  trims: ['confort', 'plus'],
}
cars.push(newCar)
for (let i = 0; i < cars.length; i++) {
  cars[i].trims.pop()
}
console.log(cars)

