/*
Google Question:
Given an Array = [2, 5, 1, 2, 3, 5, 1, 2, 4]
It should return 2

Given an Array = [2, 1, 1, 2, 3, 5, 1, 2, 4]
It should return 1

Given an Array = [2, 3, 4, 5]
It should return undefined
*/

const firstRecurringChar2 = input => {
    let map = {};
    for (let i=0; i<input.length; i++) {
        if (map[input[i]] !== undefined)
            return input[i];
        else
            map[input[i]] = i;
        console.log(map);
    }
    return undefined;
};
//Space Complexity: O(n)
//Time Complexity: O(n)

console.log(firstRecurringChar2([2, 5, 1, 2, 3, 5, 1, 2, 4]));
console.log(firstRecurringChar2([2, 1, 1, 2, 3, 5, 1, 2, 4]));
console.log(firstRecurringChar2([2, 3, 4, 5]));
