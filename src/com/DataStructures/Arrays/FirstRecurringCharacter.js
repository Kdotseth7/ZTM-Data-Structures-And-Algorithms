/*
Google Question:
Given an Array = [2, 5, 1, 2, 3, 5, 1, 2, 4]
It should return 2

Given an Array = [2, 1, 1, 2, 3, 5, 1, 2, 4]
It should return 1

Given a String = "geeksforgeeks
It should return e

Given an Array = [2, 3, 4, 5]
It should return undefined
*/

const firstRecurringChar = input => {
    const arrayLength = input.length;
    let hashMap = {};
    for (let i=0; i<arrayLength; i++) {
        if (hashMap[input[i]])
            hashMap[input[i]] = hashMap[input[i]] + 1;
        else
            hashMap[input[i]] = 1;
        if (hashMap[input[i]] > 1)
            return input[i];
    }
    return undefined;
};

//Space Complexity: O(n)
//Time Complexity: O(n)

console.log(firstRecurringChar([2, 5, 1, 2, 3, 5, 1, 2, 4]));
console.log(firstRecurringChar("geeksforgeeks"));
console.log(firstRecurringChar([2, 4, 4, 7, 3, 5, 4, 2, 4]));
console.log(firstRecurringChar([2, 3, 4, 5]));
