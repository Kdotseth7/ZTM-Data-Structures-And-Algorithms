// Given a number N return the index value of the Fibonacci sequence, where the sequence is:

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144 ...
// the pattern of the sequence is that each value is the sum of the 2 previous values, that means that for N=5 → 2+3

//For example: fibonacciRecursive(6) should return 8

function fibonacciIterative(number){
    let i = 2;
    let a = 0;
    let b = 1;
    let c = a + b;
    if (number < 2)
        return number;
    else {
        while (i !== number) {
            a = b;
            b = c;
            c = a + b;
            i++;
        }
        return c;
    }
}
console.log("Fibonacci Iterative: "  + fibonacciIterative(6));

function fibonacciRecursive(number) {
    //Base Case
    if (number < 2)
        return number;
    //Recursive Case
    return fibonacciRecursive(number - 1)  + fibonacciRecursive(number - 2);
}

console.log("Fibonacci Recursive: " + fibonacciRecursive(6));
