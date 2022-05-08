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
    const result = [];

    // generate each element of array and then print out the last element
    // linear runtime (for increase in n by 1 requires calculation of 1 addition element)
    // also, simple for loop over 1 array -> linear runtime
    for (let i = 0; i <= n; i++) {
        if (i === 0 || i === 1) {
            result[i] = i;
        } else {
            result[i] = result[i - 1] + result[i - 2]
        }
    }
    return result[n];
}
module.exports = fib;
