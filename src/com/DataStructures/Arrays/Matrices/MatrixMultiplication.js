/*
A = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
B = [[9, 8, 7], [6, 5, 4], [3, 2, 1]]
product = A * B = [[30, 24, 18], [84, 69, 54], [138, 114, 90]]
*/

const matrixMultiplication = (A, B) => {
    const length = A.length;
    let product = [];
    for (let i=0; i<length; i++) {
        let row = [];
        for (let j=0; j<length; j++) {
            let rowElement = 0;
            for (let k=0; k<length; k++) {
                rowElement += A[i][k] * B[k][j];
            }
            row.push(rowElement);
        }
        product.push(row);
    }
    return product;
};
//TC: O(n^3)
//SC: (n^2)

console.log(matrixMultiplication([[1, 2, 3], [4, 5, 6], [7, 8, 9]], [[9, 8, 7], [6, 5, 4], [3, 2, 1]]));