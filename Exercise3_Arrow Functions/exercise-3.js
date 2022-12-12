// const sum = function (a, b) {
//   return a + b;
// }

// const subtract = function (a, b) {
//   return a - b;
// }

// const multiply = function (a, b) {
//   return a * b;
// }

// const divide = function (a, b) {
//   return a / b;
// }

// const log = function (value) {
//   console.log(value);
// }

const sum = (a, b) => a + b;

const subtract = (a, b) => a - b;

const multiply = (a, b) => a * b;

const divide = (a, b) => a / b;

const log = function (val1,val2,val3,val4,val5,val6) {
  let summ1 = sum(val1,val2);
  let summ2 = sum(val3,val4);
  let mult = multiply(summ1,summ2);
  let sub = subtract(mult,val5);
  let result = divide(sub,val6);
 
  console.log(result);
}

log(2,4,5,2,2,5);
