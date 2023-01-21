const number = 15;

let myPromise = new Promise((resolve, reject) => {
    if (number > 10) {
        resolve(number);
    } else {
        reject(number);
    }
});

    myPromise
    .then((greater) => console.log(greater))
    .catch((err) => console.log(err))

    console.log(myPromise);