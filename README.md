# First N Primes Multiplication Table

Prints a multiplication table of the first n prime numbers

### Installation

Run `npm install` to install dependencies.

_ Uses lodash for utils and table-text to generate a formatted table from a matrix_  

### How to use

To print a multiplication table of the first n numbers:

`npm run print-prime-table n`

#### Example:
```
npm run print-prime-table

First 10 Primes Multiplication Table:

P   2   3   5    7    11   13   17   19   23   29
2   4   6   10   14   22   26   34   38   46   58
3   6   9   15   21   33   39   51   57   69   87
5   10  15  25   35   55   65   85   95   115  145
7   14  21  35   49   77   91   119  133  161  203
11  22  33  55   77   121  143  187  209  253  319
13  26  39  65   91   143  169  221  247  299  377
17  34  51  85   119  187  221  289  323  391  493
19  38  57  95   133  209  247  323  361  437  551
23  46  69  115  161  253  299  391  437  529  667
29  58  87  145  203  319  377  493  551  667  841
```
### Tests

`npm run tests`

### Time Complexity

Generating the list of prime numbers is the bottleneck of the program. The time complexity of the implemented algorithm:  
```
n = number of prime numbers you are generating
k = value of nth prime number
O(k^2)
```
There are more efficient algorithms for finding prime numbers that would be more suitable for problems of scale. Such as sieves of Eratosthenes, Euler, Atkin and Sundaram
