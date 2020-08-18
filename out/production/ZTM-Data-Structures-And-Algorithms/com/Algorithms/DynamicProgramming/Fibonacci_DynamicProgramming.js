// Fibonacci Recursive
/*TC -> O(2^n)*/
let calc1 = 0;
const fibonacci_Recursive = (num) => {
    calc1++;
    if(num < 2)
        return num;
    return(fibonacci_Recursive(num - 1) + fibonacci_Recursive(num - 2));
};

const number = 10;
console.log(`Fibonacci Recursive -> Sum of first ${number} numbers: ${fibonacci_Recursive(number)}`);
console.log('Fibonacci Recursive Function Calls:', calc1);

// Fibonacci using Dynamic Programming -> Top-Down Approach
/*TC -> O(n)*/
let calc2 = 0;
const fibonacci_Memoized = () => {
    let cache = {};
    return function fib(num) {
        calc2++;
        if (num in cache)
            return cache[num];
        else {
            if(num < 2)
                return num;
            else {
                cache[num] = fib(num - 1) + fib(num - 2);
                return cache[num];
            }
        }
    }
};

const fasterFib = fibonacci_Memoized();
console.log(`Fibonacci Top-Down Memoized -> Sum of first ${number} numbers: ${fasterFib(number)}`);
console.log('Fibonacci Top-Down Memoized Function Calls:', calc2);

// Fibonacci using Dynamic Programming -> Bottom-Up Approach
/*TC -> O(n)*/
const fibonacciBottomUp = number => {
    let array = [0, 1];
    for (let i=2; i<number+1; i++) {
        array.push(array[i - 1] + array[i - 2]);
    }
    return array.pop();
};

console.log(`Fibonacci Bottom-Up -> Sum of first ${number} numbers: ${fibonacciBottomUp(number)}`);