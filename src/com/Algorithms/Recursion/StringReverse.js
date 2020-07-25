//Implement a function that reverses a string using iteration...and then recursion!

const reverseStringIteration = str => { //O(n)
    let array = [];
    for (let i=str.length; i>=0; i--) {
        array.push(str[i]);
    }
    return array.join('');
};

console.log("String Reverse Iteration: " + reverseStringIteration('Object'));
//should return: 'yretsam oyoy'

const reverseStringRecursive = str => {
    debugger;
    //Base Case
    if (str === "")
        return "";
    //Recursive Case
    return reverseStringRecursive(str.substr(1)) + str.charAt(0);
};

console.log("String Reverse Recursive: " + reverseStringRecursive('Object'));

/* Object -->
bject + O = tcejbO --> Bottom of Stack
(ject + b) + O = tcejb
((ect + j) + b) + O = tcej
(((ct + e) + j) + b) + O = tce
((((t + c) + e) + j) + b) + O = tc
(((((" " + t) + c) + e) + j) + b) + O = t
((((((" ") + t) + c) + e) + j) + b) + O = " " --> Top of Stack
*/