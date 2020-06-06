const boxes1 = [1, 2, 3, 4, 5];
const boxes2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const logBoxes = () => {
    boxes1.forEach(box1 => { //O(m)
        boxes2.forEach(box2 => { //O(n)
            console.log(box1 + ", " + box2);
        })
    });
};

logBoxes(); //O(m * n)