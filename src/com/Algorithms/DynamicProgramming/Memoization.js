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

console.log("Uncached: ", addTo80(5));
console.log("Cached: ", addTo80(5));

/*
But Cache should be part of function so we use closure in JS so
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

console.log("Memoized Uncached: ", memoized(5));
console.log("Memoized Cached: ", memoized(5));