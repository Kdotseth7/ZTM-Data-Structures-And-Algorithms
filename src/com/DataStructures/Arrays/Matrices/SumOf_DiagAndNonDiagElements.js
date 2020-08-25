/*
A = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
{ DiagSum: 25, NonDiagSum: 20 }
*/

const sum_DiagAndNonDiag = matrix => {
    let length = matrix.length;
    let diagSum = 0;
    let nonDiagSum = 0;
    for (let i=0; i<length; i++) {
        for (let j=0; j<length; j++) {
            if ((i + j) % 2 === 0)
                diagSum += matrix[i][j];
            else
                nonDiagSum += matrix[i][j];
        }
    }
    return {
        "DiagSum": diagSum,
        "NonDiagSum": nonDiagSum
    };
};

console.log(sum_DiagAndNonDiag([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));