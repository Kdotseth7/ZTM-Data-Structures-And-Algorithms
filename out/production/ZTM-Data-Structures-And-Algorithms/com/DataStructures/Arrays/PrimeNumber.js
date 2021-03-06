/*
Prime Number: Factors: 1 and number itself
*/

const prime = num => {
    let isPrime = true;
    for (let i=2; i<num-1; i++) {
        if (num % i === 0) {
            isPrime = false;
            break;
        }
    }
    return isPrime;
}
//TC: O(n)
//SC: O(1)

console.log(prime(7));
console.log(prime(2));
console.log(prime(13));
console.log(prime(20));
console.log(prime(18));
console.log(prime(23));