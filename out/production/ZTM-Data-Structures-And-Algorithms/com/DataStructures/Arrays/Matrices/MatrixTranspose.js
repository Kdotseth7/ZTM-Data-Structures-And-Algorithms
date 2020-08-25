/*
A = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
transpose = [[1, 4, 7], [2, 5, 8], [3, 6, 9]]
*/

const matrixTranspose = matrix => {
    let transpose = [];
    for (let i=0; i<matrix.length; i++) {
        let row = [];
        for (let j=0; j<matrix.length; j++) {
            row.push(matrix[j][i]);
        }
        transpose.push(row);
    }
    return transpose;
};

console.log(matrixTranspose([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));