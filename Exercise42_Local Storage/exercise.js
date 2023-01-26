const user = {
  id: 1,
  name: "John",
  age: 25,
};

function storageUserData(myUser) {
  localStorage.setItem("userData", JSON.stringify(myUser));
}

storageUserData(user);

function printUserData(key) {
  console.log(localStorage.getItem(key));
}

printUserData(userData);

// Non capisco perchè nel terminale mi da come errore: "localStorage is not defined"