/*
A = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
rowSum = [6, 15, 24]
*/

const rowSum = matrix => {
    let rowSumArray = [];
    for (let i=0; i<matrix.length; i++) {
        let rowSum = 0;
        for (let j=0; j<matrix.length; j++) {
            rowSum += matrix[i][j];
        }
        rowSumArray.push(rowSum);
    }
    return rowSumArray;
};

console.log(rowSum([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));