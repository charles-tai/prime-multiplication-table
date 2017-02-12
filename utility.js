var _ = require('lodash');

function generateMultiplyTable (array) {
  if (array.length < 1) return null;
  var matrix = [[null].concat(array)];
  for (var i = 0; i < array.length; i++) {
    matrix.push([]);
    matrix[i+1][0] = array[i];
    for (var j = 0; j < array.length; j++) {
      matrix[i+1][j+1] = array[i] * array[j];
    }
  }
  return matrix;
}

function generateListOfPrimes (n) {
  var primes = [];
  if (n < 1) return primes;
  if (n === 1) {
    primes = [2];
  } else {
    primes = [2,3];
  }
  var i = 5;
  while (primes.length < n) {
    for (var j = 2; j <= i; j++) {
      if (j > i-1) {
        primes.push(i);
      }
      if (i%j == 0) {
        break;
      }
    }
    i++;
  }
  return primes;
}

// function generateListOfPrimes (n) {
//   var primes = [2,3];
//   var i = 5;
//   while (primes.length <= n) {
//     if (i % 2 !== 0 && i % 3 !==0 ) {
//       primes.push(i);
//     }
//     i++;
//   }
//   return primes;
// }

function generatePrimeMultiplyTable(n) {
  var list = generateListOfPrimes(n);
  var matrix = generateMultiplyTable(list);
  return matrix || null;
}

return module.exports = {
  generateMultiplyTable,
  generatePrimeMultiplyTable,
  generateListOfPrimes
}
