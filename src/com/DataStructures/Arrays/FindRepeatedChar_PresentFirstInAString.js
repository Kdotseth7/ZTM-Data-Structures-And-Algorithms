/*
Input  : geeksforgeeks
Output : g
(mind that it will be g, not e.)

Input  : geek
Output : e

Input  : raptors
Output : undefined
*/

const repeatedChar_PresentFirst = input => {
    const arrayLength = input.length;
    for (let i=0; i<arrayLength; i++) {
        for (let j=i+1; j<arrayLength; j++) {
            if (input[i] === input[j])
                return input[i];
        }
    }
    return undefined;
};
//Space Complexity: O(1)
//Time Complexity: O(n^2)

console.log(repeatedChar_PresentFirst("geeksforgeeks"));
console.log(repeatedChar_PresentFirst("geeks"));
console.log(repeatedChar_PresentFirst("bucks"));