let isPrime = (number) => {
  for (i = 2; i < number; i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}

function sumOfNPrimes (n) {
  let sum = 0;
  let countPrimes = 0;
  let i = 2;

  while (countPrimes < n) {
    if (isPrime(i)) {
      sum += i;
      countPrimes++;
    }
    i++;
  }

  return sum;
}


console.log(sumOfNPrimes(0));
console.log(sumOfNPrimes(1));
console.log(sumOfNPrimes(4));
