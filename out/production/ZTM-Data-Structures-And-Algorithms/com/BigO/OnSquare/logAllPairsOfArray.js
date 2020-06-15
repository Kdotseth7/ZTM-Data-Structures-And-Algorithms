// Log all pairs of array
const boxes = [1, 2, 3, 4, 5];

const logAllPairsOfArray = (boxes) => {
    boxes.forEach(firstEl => { //O(n)
        boxes.forEach(secondEl => { //O(n)
            console.log("(" + firstEl + ", " + secondEl + ")");
        })
    });
};

logAllPairsOfArray(boxes); //O(n^2) --> Quadratic Time