const person1 = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
};

// const person2 = person1; 

/* In questo modo assegnamo person1 per riferimento e non per valore, 
facendo così, ogni volta che modifichiamo una proprietà di person2 modificheremo
anche la proprietà di person1 */


// Modify the property `firstName` of the `person2` in "Simon".


// Possiamo utilizzare il ciclo "for in":

let person2 = {};

for (let key in person1) {
  person2[key] = person1[key];
}

/* Oppure usiamo il metodo "Object.assign", 
passando come parametri un oggetto vuoto e l'oggetto da copiare: */

let person3 = Object.assign({}, person1); 

console.log(person1);
console.log(person2);
console.log(person3);
