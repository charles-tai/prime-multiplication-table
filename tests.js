var _ = require('lodash');
var util = require('./utility.js');
// Testing

function runTests() {
  var tests = generateTestCases();
  console.log('\n'+ 'Running tests:' + '\n');
  var allPassed = true;
  var allFailedTests = [];
  _.forEach(tests, function(func) {
    var passed = true;
    var failedTests = [];
    console.log('----' + func.name + '----' + '\n' );
    _.forEach(func.tests, function(test,index) {
      if (_.isEqual(test.output,test.expected)) {
        console.log(index+':', test.name, ': Pass');
      } else {
        passed = false;
        allPassed = false;
        failedTests.push({index: index, name: test.name});
        allFailedTests.push({index: index, name: test.name, funcName: func.name});
        console.log(index+':', test.name, ': Fail');
      }
      console.log('output: ', test.output)
      console.log('expected: ', test.expected)
      console.log('\n');
    })
    if (passed) {
      console.log(func.name + ' tests passed')
    } else {
      console.log(func.name + ' failed tests:')
      _.forEach(failedTests, function(test) {
        console.log(test.index + ' : ' + test.name);
      })
    }
    console.log('\n');
  })
  if (allPassed) {
    console.log('All tests passed')
  } else {
    console.log('Failed tests:' + '\n');
    _.forEach(allFailedTests, function(test) {
      console.log(test.funcName, ':' + '\n', test.index + ': ' + test.name);
    })
  }
}

function generateTestCases() {
  var tests = [
    {
      name: 'generateListOfPrimes',
      tests: [
        {
          name: 'should return empty array if n is less than 2',
          output: util.generateListOfPrimes(0),
          expected: []
        },
        {
          name: 'should generate list of primes',
          output: util.generateListOfPrimes(10),
          expected: [ 2, 3, 5, 7, 11, 13, 17, 19, 23, 29 ]
        }
      ]
    },
    {
      name: 'generateMultiplyTable',
      tests: [
        {
          name: 'should return null if passed empty array',
          output: util.generateMultiplyTable([]),
          expected: null
        },
        {
          name: 'should generate multiply table',
          output: util.generateMultiplyTable([1,2,3,4,5]),
          expected: [
            [ null, 1, 2, 3, 4, 5 ],
            [ 1, 1, 2, 3, 4, 5 ],
            [ 2, 2, 4, 6, 8, 10 ],
            [ 3, 3, 6, 9, 12, 15 ],
            [ 4, 4, 8, 12, 16, 20 ],
            [ 5, 5, 10, 15, 20, 25 ]
          ]
        }
      ]
    },
    {
      name: 'generatePrimeMultiplyTable',
      tests: [
        {
          name: 'should return null if n is less than 1',
          output: util.generatePrimeMultiplyTable(0),
          expected: null
        },
        {
          name: 'should generate multiply table of 10 prime numbers',
          output: util.generatePrimeMultiplyTable(10),
          expected: [
            [ null, 2, 3, 5, 7, 11, 13, 17, 19, 23, 29 ],
            [ 2, 4, 6, 10, 14, 22, 26, 34, 38, 46, 58 ],
            [ 3, 6, 9, 15, 21, 33, 39, 51, 57, 69, 87 ],
            [ 5, 10, 15, 25, 35, 55, 65, 85, 95, 115, 145 ],
            [ 7, 14, 21, 35, 49, 77, 91, 119, 133, 161, 203 ],
            [ 11, 22, 33, 55, 77, 121, 143, 187, 209, 253, 319 ],
            [ 13, 26, 39, 65, 91, 143, 169, 221, 247, 299, 377 ],
            [ 17, 34, 51, 85, 119, 187, 221, 289, 323, 391, 493 ],
            [ 19, 38, 57, 95, 133, 209, 247, 323, 361, 437, 551 ],
            [ 23, 46, 69, 115, 161, 253, 299, 391, 437, 529, 667 ],
            [ 29, 58, 87, 145, 203, 319, 377, 493, 551, 667, 841 ]
          ]
        }
      ]
    }
  ]
  return tests;
}



runTests();
