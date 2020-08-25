/*
A = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
colSum = [12, 15, 18]
*/

const colSum = matrix => {
    let colSumArray = [];
    for (let i=0; i<matrix.length; i++) {
        let colSum = 0;
        for (let j=0; j<matrix.length; j++) {
            colSum += matrix[j][i];
        }
        colSumArray.push(colSum);
    }
    return colSumArray;
};

console.log(colSum([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));