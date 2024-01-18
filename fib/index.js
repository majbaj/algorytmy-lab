// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

function fib(n) {

    if (n <= 0) {
        return 'Please enter a valid positive integer for n';
      } else if (n === 1) {
        return 0;
      } else if (n === 2) {
        return 1;
      } else {
        let fibSequence = [0, 1];
        for (let i = 2; i < n; i++) {
          fibSequence[i] = fibSequence[i - 1] + fibSequence[i - 2];
        }
        return fibSequence[n - 1];
      }
    
}

module.exports = fib;
