/*
A = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
diagonal = [[1, _, 3], [_, 5, _], [7, _, 9]]

Logic:
Approach-1: (i+j) % 2 === 0
Approach-2: i === j OR (i+j) === length - 1
*/

const diagonal_Way1 = matrix => {
    let length = matrix.length;
    let diagonalArray = [];
    for (let i=0; i<length; i++) {
        let row = [];
        for (let j=0; j<length; j++) {
            if ((i + j) % 2 === 0)
                row.push(matrix[i][j]);
            else
                row.push('_');
        }
        diagonalArray.push(row);
    }
    return diagonalArray;
};

console.log(diagonal_Way1([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));

const diagonal_Way2 = matrix => {
    let length = matrix.length;
    let diagElements = [];
    let nonDiagElements = [];
    for (let i=0; i<length; i++) {
        for (let j=0; j<length; j++) {
            if ((i + j) % 2 === 0)
                diagElements.push(matrix[i][j]);
            else
                nonDiagElements.push(matrix[i][j]);
        }
    }
    return {
        "DiagonalElements": diagElements,
        "NonDiagonalElements": nonDiagElements
    };
};

console.log(diagonal_Way2([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));