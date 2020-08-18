let cache = {};

const addTo80 = n => {
    if (n in cache) {
        return cache[n];
    } else {
        console.log("Long Time!!!");
        cache[n] = n + 80;
        return cache[n];
    }
};

console.log("5-> Uncached: ", addTo80(5));
console.log("10-> Uncached: ", addTo80(10));
console.log("5-> Cached: ", addTo80(5));

/*
But Cache should be part of function so we use CLOSURES in JS so
even if cache is declared inside a function it has a global scope
*/

const memoizedAddTo80 = () => {
    let cache = {};
    return function(n) {
        if (n in cache) {
            return cache[n];
        } else {
            console.log("Long Time!!!");
            cache[n] = n + 80;
            return cache[n];
        }
    }
};

const memoized = memoizedAddTo80();

console.log("5-> Memoized Uncached: ", memoized(5));
console.log("10-> Memoized Uncached: ", memoized(10));
console.log("5-> Memoized Cached: ", memoized(5));