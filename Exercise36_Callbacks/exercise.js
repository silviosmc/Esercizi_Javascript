function repeatHello(callback) {
   const print = setInterval(callback, 1000);
   setTimeout(() => clearInterval(print), 5000);
}

repeatHello(() => console.log("Hello"));
