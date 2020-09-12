/*
Count the number of prime numbers less than a non-negative number, n.

Example:
Input: 10
Output: 4
Explanation: There are 4 prime numbers less than 10, they are 2, 3, 5, 7.
*/

/**
 * @param {number} n
 * @return {number}
 */
const countPrimes = function(n) {
    let primeCount = 0;
    for (let i=2; i<n; i++) {
        let isPrime = true;
        for (let j=2; j<=i/2; j++) {
            if (i % j === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) primeCount++;
    }
    return primeCount;
};
//TC: O(n^2)
//SC: O(1)

console.log(countPrimes(21));