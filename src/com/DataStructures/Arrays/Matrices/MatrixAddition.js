/*
A = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
B = [[9, 8, 7], [6, 5, 4], [3, 2, 1]]
sum = A + B = [[10, 10, 10], [10, 10, 10], [10, 10, 10]]
*/

const matrixAddition = (A, B) => {
    let sum = [];
    for (let i=0; i<A.length; i++) {
        let row = [];
        for (let j=0; j<B.length; j++) {
            row.push(A[i][j] + B[i][j]);
        }
        sum.push(row);
    }
    return sum;
};

console.log(matrixAddition([[1, 2, 3], [4, 5, 6], [7, 8, 9]], [[9, 8, 7], [6, 5, 4], [3, 2, 1]]));