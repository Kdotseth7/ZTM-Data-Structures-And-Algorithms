/*
Link: https://www.interviewbit.com/problems/add-one-to-number/
Given a non-negative number represented as an array of digits,
add 1 to the number ( increment the number represented by the digits ).
The digits are stored such that the most significant digit is at the head of the list.

Example:
If the vector has [1, 2, 3]
the returned vector should be [1, 2, 4]
as 123 + 1 = 124.
*/

const addOneToNumber = vector => {
    let representedNum = "";
    for (let i=0; i<vector.length; i++) {
        representedNum = representedNum + vector[i];
    }
    return Number.parseInt(representedNum) + 1;
};

console.log(addOneToNumber([1, 2, 3]));
console.log(addOneToNumber([0, 0, 1, 2, 3]));