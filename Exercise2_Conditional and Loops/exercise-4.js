function nicknameMap(person) {
  let register = [];
  for (let i = 0; i < person.length; i++) {
    register[i] = person[i].name + "-" + person[i].age;
  }
  return register;
}

const person = [
  { name: 'Paul', age: 16 },
  { name: 'George', age: 17 },
  { name: 'Lucas', age: 21 },
  { name: 'Marco', age: 32 },
  { name: 'Peter', age: 18 },
  { name: 'Carl', age: 13 },
  { name: 'Simon', age: 24 },
  { name: 'Mark', age: 15 },
  { name: 'Sandra', age: 34 },
  { name: 'Alice', age: 28 }
];

const nicknames = nicknameMap(person);
console.log(person);
console.log(nicknames);