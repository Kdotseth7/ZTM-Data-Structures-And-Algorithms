const lowerLeft = matrix => {
    const length = matrix.length;
    let lowerLeft = [];
    for (let i=0; i<length; i++) {
        let row = [];
        for (let j=0; j<length; j++) {
            if (j <= i)
                row.push(matrix[i][j]);
            else
                row.push('_');
        }
        lowerLeft.push(row);
    }
    return lowerLeft;
};

const lowerRight = matrix => {

};

const upperLeft = matrix => {

};

const upperRight = matrix => {

};

const squareMatrix = [[1, 2, 3, 4, 5], [6, 7, 8, 9, 10], [11, 12, 13, 14, 15], [16, 17, 18, 19, 20], [21, 22, 23, 24, 25]];

console.log("lowerLeft: ", lowerLeft(squareMatrix));
console.log("lowerRight: ", lowerRight(squareMatrix));
console.log("upperLeft: ", upperLeft(squareMatrix));
console.log("upperRight: ", upperRight(squareMatrix));