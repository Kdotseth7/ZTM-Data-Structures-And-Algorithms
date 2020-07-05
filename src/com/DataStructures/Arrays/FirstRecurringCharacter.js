/*
Google Question:
Given an Array = [2, 5, 1, 2, 3, 5, 1, 2, 4]
It should return 2

Given an Array = [2, 1, 1, 2, 3, 5, 1, 2, 4]
It should return 1

Given an Array = [2, 3, 4, 5]
It should return undefined
*/

const firstRecurringChar = input => {
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

console.log(firstRecurringChar([2, 5, 1, 2, 3, 5, 1, 2, 4]));
console.log(firstRecurringChar([2, 1, 1, 2, 3, 5, 1, 2, 4]));
console.log(firstRecurringChar([2, 3, 4, 5]));