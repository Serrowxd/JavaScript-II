// Complete the following functions.

const nFibonacci = (n) => {
  // fibonacci sequence: 1 1 2 3 5 8 13 ...
  // return the nth number in the sequence
  if (n <= 1) return 1;
  return nFibonacci(n - 1) + nFibonacci(n - 2);
};

console.log(nFibonacci(8));
// note that finding the 35th+ number in the sequence takes a very long time, while looping is much faster.

const nFactorial = (n) => {
  // factorial example: !5 = 5 * 4 * 3 * 2 * 1
  // return the factorial of `n`
  if (n === 0) {
    return 1;
  // When you get to 0, the factorial is 1 and the recursion ends.
  } else {
    return (n * nFactorial(n - 1));
  }
};
let result = nFactorial(8);
console.log(result);
// note that the solution is almost instantaneous with the if/else statement.

/* Extra Credit */
const checkMatchingLeaves = (obj) => {
  // return true if every property on `obj` is the same
  // otherwise return false
};

/* eslint-enable no-unused-vars */

module.exports = {
  nFibonacci,
  nFactorial,
  checkMatchingLeaves,
};
