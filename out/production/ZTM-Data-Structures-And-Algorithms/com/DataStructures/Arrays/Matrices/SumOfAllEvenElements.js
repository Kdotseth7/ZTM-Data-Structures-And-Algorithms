/*
A = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
sum = 20
*/

const sumEvenElements = matrix => {
    let sum = 0;
    for (let i=0; i<matrix.length; i++) {
        for (let j=0; j<matrix.length; j++) {
            if (matrix[i][j] % 2 === 0)
                sum += matrix[i][j];
        }
    }
    return sum;
};

console.log(sumEvenElements([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));