var _ = require('lodash');

function generateMultiplyTable (array) {
  if (array.length < 1) return [];
  var matrix = [['P'].concat(array)];
  for (var i = 0; i < array.length; i++) {
    matrix.push([]);
    matrix[i+1][0] = array[i];
    for (var j = 0; j < array.length; j++) {
      matrix[i+1][j+1] = array[i] * array[j];
    }
  }
  return matrix;
}

function isPrime (num) {
  var factor = 2;
  if (num == 2) return true;
  var squareRootOfNum = Math.sqrt(num);
  // If num isn't a prime, one of it's factors
  // must be less than or equal to the square root of num.
  // Check if there are any factors less than the square root of num:
  while (factor <= squareRootOfNum) {
    if (num % factor === 0) {
      return false;
    }
    factor++;
  }
  return true;
}

function generateNPrimes (n) {
  var primes = [];
  if (n < 1) return primes;
  if (n === 1) return [2];
  var num = 2;
  // Check if numbers, 2 and above are primes
  // until we generate a list of n primes.
  while (primes.length < n) {
    if (isPrime(num)) primes.push(num);
    num++;
  }
  return primes;
}

function generatePrimeMultiplyTable(n) {
  var list = generateNPrimes(n);
  var matrix = generateMultiplyTable(list);
  return matrix || [];
}

return module.exports = {
  generateMultiplyTable,
  generatePrimeMultiplyTable,
  generateNPrimes
}
