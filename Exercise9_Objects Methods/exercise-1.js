const person = {
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25
}

// Print values of person using Object.keys

// Se voglio stampare solo le chiavi di person utilizzo Object.keys()
console.log(Object.keys(person));

// Se voglio stampare solo i valori di person utilizzo Object.values()
console.log(Object.values(person));

/* Se, invece, come scritto nella consegna (Print its key/value pair in the console), 
devo stampare la coppia chiave/valore utilizzo Object.entries() */
console.log(Object.entries(person));