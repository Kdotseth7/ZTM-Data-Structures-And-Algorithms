const findFactorialRecursive = number => {
    // 5! = 5 X 4!
    // 4! = 4 X 3!
    // 3! = 3 X 2!
    // 2! = 2 X 1!

    //Base Case

    //Recursive Case
};

console.log("Factorial Recursive: " + findFactorialRecursive(5));

const findFactorialIterative = number => {
    // 5! = 1 X 2 X 3 X 4 X 5
    let factorial = 1;
    let i = 1;
    while (i <= number) {
        factorial = factorial * i;
        i++;
    }
    return factorial;
};

console.log("Factorial Iterative: "  + findFactorialIterative(5));