const isLogged = true;

function isLoggedIn(isLogged) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        let rand = Math.random();
        if (isLogged == true) {
          resolve(rand);
        } else {
          reject(new Error("User is not logged in!"))
        }
      }, 1000)
    })
  }

  function getUserData(rand) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (rand > 0.5) {
          resolve({name: "John", age: 24});
        } else {
          reject(new Error("User does not exist!"))
        }
      }, 1000)
    })
  }

  isLoggedIn(isLogged)
    .then(getUserData)
    .then((data) => console.log(data))
    .catch((err) => console.log(err))