/*
LeetCode: https://leetcode.com/problems/rotate-image/
You are given an n x n 2D matrix representing an image.
Rotate the image by 90 degrees (clockwise).
Note:
You have to rotate the image in-place, which means you have to modify the input 2D matrix directly. DO NOT allocate another 2D matrix and do the rotation.

Example 1:
Given input matrix =
[
  [1,2,3],
  [4,5,6],
  [7,8,9]
],
rotate the input matrix in-place such that it becomes:
[
  [7,4,1],
  [8,5,2],
  [9,6,3]
]

Example 2:
Given input matrix =
[
  [ 5, 1, 9,11],
  [ 2, 4, 8,10],
  [13, 3, 6, 7],
  [15,14,12,16]
],
rotate the input matrix in-place such that it becomes:
[
  [15,13, 2, 5],
  [14, 3, 4, 1],
  [12, 6, 8, 9],
  [16, 7,10,11]
]
*/

const rotate_AuxMatrix = function(matrix) {
    const length = matrix.length;
    let rotatedMatrix = [];
    for (let i=0; i<length; i++) {
        let row = [];
        for (let j=length-1; j>=0; j--) {
            row.push(matrix[j][i]);
        }
        rotatedMatrix.push(row);
    }
    return rotatedMatrix;
};

//console.log(rotate_AuxMatrix([[1,2,3], [4,5,6], [7,8,9]]));

const rotate_InPlace = function(matrix) {
    const length = matrix.length;
    for (let i=length-1; i>0; i++) {
        for (let j=0; j<length; j++) {
            matrix[j].push(matrix[i][j]);
            matrix[j].shift();
        }
    }
    return matrix;
};

console.log(rotate_InPlace([[1,2,3], [4,5,6], [7,8,9]]));