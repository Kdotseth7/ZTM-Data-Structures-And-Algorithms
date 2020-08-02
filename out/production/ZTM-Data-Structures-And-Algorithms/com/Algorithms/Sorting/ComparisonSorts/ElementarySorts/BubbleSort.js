const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

//TC --> O(n^2)
//SC --> O(1)
/*
1. No. of passes = n - 1
2. No. of comparisons in each pass = n - 1
3. Not used in industry, only for educational purposes
*/
const bubbleSort = array => {
    const arrayLength = array.length;
    for (let j=0; j<arrayLength; j++) {
        for (let i=0; i<arrayLength; i++) {;
            if (array[i] > array[i+1]) {
                //Swap Numbers
                let temp = array[i];
                array[i] = array[i+1];
                array[i+1] = temp;
            }
        }
    }
    return array;
};

console.log("Bubble Sort: ", bubbleSort(numbers));