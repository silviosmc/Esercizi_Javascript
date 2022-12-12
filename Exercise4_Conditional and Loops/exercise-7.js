function sumUntil(maxValue) {
  
  let counter = 0;
  
  for (let i = 0; i <= maxValue; i++) {
    counter += i;
  }
  return counter
}

console.log(sumUntil(5));
