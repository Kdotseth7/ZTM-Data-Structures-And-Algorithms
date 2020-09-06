/*
Link: https://leetcode.com/problems/pascals-triangle/
Given a non-negative integer numRows, generate the first numRows of Pascal's triangle.
In Pascal's triangle, each number is the sum of the two numbers directly above it.

Example:
Input: 5
Output:
[
     [1],
    [1,1],
   [1,2,1],
  [1,3,3,1],
 [1,4,6,4,1]
]
*/

/**
 * @param {number} numRows
 * @return {number[][]}
 */
const generatePascalsTriangle = function(numRows) {
    if (!numRows) return [];
    let pascalsTriangle = [[1]];
    for (let i=1; i<numRows; i++) {
        let row = [];
        for (let j=0; j<i+1; j++) {
            if (j===0 || j===i) row.push(1);
            else row.push(pascalsTriangle[i-1][j-1] + pascalsTriangle[i-1][j]);
        }
        pascalsTriangle.push(row);
    }
    return pascalsTriangle;
};

console.log(generatePascalsTriangle(5));