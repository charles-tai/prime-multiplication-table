var util = require('./utility.js');
var table = require('text-table');

var numOfPrimes = parseInt(process.argv[2] || "10", 10);
var matrixOfPrimes = util.generatePrimeMultiplyTable(numOfPrimes);

console.log('First ' + numOfPrimes +  ' Primes Multiplication Table: ' + '\n');
console.log(table(matrixOfPrimes));
