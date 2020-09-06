/*
The Hamming distance between two integers is the number of positions at which the
corresponding bits are different.
Given two integers x and y, calculate the Hamming distance.
Note:
0 ≤ x, y < 231.

Example:
Input: x = 1, y = 4
Output: 2
Explanation:
1   (0 0 0 1)
4   (0 1 0 0)
       ↑   ↑
The above arrows point to positions where the corresponding bits are different.
*/

// /**
//  * @param {number} x
//  * @param {number} y
//  * @return {number}
//  */
const hammingDistance = function (x, y) {
    // Convert Integers into their binary representation
    x = parseInt(x).toString(2);
    y = parseInt(y).toString(2);
    let distance = 0;
    let diff = Math.abs(x.length - y.length);
    if (x.length > y.length) y = addZeroes(diff) + y;
    else x = addZeroes(diff) + x;
    for (let i=0; i<x.length; i++) {
        if (x[i] !== y[i]) distance++;
    }
    return distance;
};

function addZeroes(diff) {
    let str = "";
    for (let i=0; i<diff; i++) {
        str += "0";
    }
    return str;
}
//TC: O(n)
//SC: O(1)

console.log(hammingDistance(1, 4));