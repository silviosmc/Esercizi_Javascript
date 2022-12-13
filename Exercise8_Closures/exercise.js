function multiplyByTwo(value) {
  let number = 2;
  let inner = () => {
    console.log(value * number)
  }
  inner();
}

multiplyByTwo(8);