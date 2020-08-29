/*
Given an m x n matrix. If an element is 0, set its entire row and column to 0. Do it in-place.
Follow up:
A straight forward solution using O(mn) space is probably a bad idea.
A simple improvement uses O(m + n) space, but still not the best solution.
Could you devise a constant space solution?

Example 1:
Input: matrix = [[1,1,1],[1,0,1],[1,1,1]]
Output: [[1,0,1],[0,0,0],[1,0,1]]

Example 2:
Input: matrix = [[0,1,2,0],[3,4,5,2],[1,3,1,5]]
Output: [[0,0,0,0],[0,4,5,0],[0,3,1,0]]
*/

const setZeroes_OMPlusN = function(matrix) {
    const rowLength = matrix.length;
    const colLength = matrix[0].length;
    let row_Zero = new Set();
    let col_Zero = new Set();
    for (let i=0; i<rowLength; i++) {
        for (let j=0; j<colLength; j++) {
            if (matrix[i][j] === 0) {
                row_Zero.add(i);
                col_Zero.add(j);
            }
        }
    }
    for (let i=0; i<rowLength; i++) {
        for (let j=0; j<colLength; j++) {
            if (row_Zero.has(i) || col_Zero.has(j))
                matrix[i][j] = 0;
        }
    }
    return matrix;
};
//TC: O(n^2)
//SC: O(m+n)

console.log("SC -> O(M+N):");
console.log(setZeroes_OMPlusN([[1,1,1],[1,0,1],[1,1,1]]));
console.log(setZeroes_OMPlusN([[0,1,2,0],[3,4,5,2],[1,3,1,5]]));

const setZeroes_ON = function(matrix) {
    const rowLength = matrix.length;
    const colLength = matrix[0].length;
    const col_Zero = new Set();
    for (let i=0; i<rowLength; i++) {
        for (let j=0; j<colLength; j++) {
            if (matrix[i][j] === 0)
                col_Zero.add(j);
        }
    }
    for(let i=0; i<rowLength; i++) {
        let rowContainsZero = false;
        for (let j=0; j< colLength; j++) {
            if (matrix[i][j] === 0) {
                rowContainsZero =  true;
                break;
            }
        }
        for (let j=0; j<colLength; j++) {
            if (rowContainsZero || col_Zero.has(j))
                matrix[i][j] = 0;
        }
    }
    return matrix;
}
//TC: O(n^2)
//SC: O(n)

console.log("SC -> O(N):");
console.log(setZeroes_ON([[1,1,1],[1,0,1],[1,1,1]]));
console.log(setZeroes_ON([[0,1,2,0],[3,4,5,2],[1,3,1,5]]));

const setZeroes_O1 = function(matrix) {
    const rowLength = matrix.length;
    const colLength = matrix[0].length;
    let firstRowZero = false;
    for (let j=0; j<colLength; j++) {
        if (matrix[0][j] === 0)
            firstRowZero = true;
    }
    for (let i=0; i<rowLength; i++) {
        for (let j=0; j<colLength; j++) {
            if (matrix[i][j] === 0)
                matrix[0][j] = 0; // Denotes every element in that COL is 0
        }
    }
    for (let i=1; i<rowLength; i++) {
        let rowContainsZero = false; // Denotes every element in that ROW is 0
        for (let j=0; j<colLength; j++) {
            if (matrix[i][j] === 0) {
                rowContainsZero = true;
                break;
            }
        }
        for (let j=0; j<colLength; j++) {
            if (rowContainsZero || matrix[0][j] === 0)
                matrix[i][j] = 0;
        }
    }
    if (firstRowZero) {
        for (let j=0; j<colLength; j++) {
            matrix[0][j] = 0;
        }
    }
    return matrix;
}
//TC: O(n^2)
//SC: O(1)

console.log("SC -> O(1):");
console.log(setZeroes_O1([[1,1,1],[1,0,1],[1,1,1]]));
console.log(setZeroes_O1([[0,1,2,0],[3,4,5,2],[1,3,1,5]]));