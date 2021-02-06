// Adding ...

function add(a, b) {
  let result = a + b;
  return result;
}

// sum = 2 + 4;
sum = add(2, 4);
console.log(sum);

// Multiplying ...

function multipy(a, b) {
  let result = 0;
  let count = 0;
  while (count < b) {
    result = add(a, result);
    count = count + 1;
  }
  return result;
}

product = multipy(2, 4);
console.log(product);

// Finding the Power of ...

function power(x, n) {
  let result = 1;
  let count = 0;
  while (count < n) {
    result = multipy(x, result);
    count = count + 1;
  }
  return result;
}

ansPower = power(2, 8);
console.log(ansPower);

ansPower = power(3, 4);
console.log(ansPower);

// Finding the Factorial of ...

function factorial(c) {
  let result = 1;
  let count = 0;
  while (count < c) {
    result = power(c, result);
    count = count + 1;
  }
  return result;
}

ansFactorial = factorial(5);
console.log(ansFactorial);

ansFactorial = factorial(4);
console.log(ansFactorial);
