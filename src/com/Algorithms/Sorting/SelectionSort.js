const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

//TC --> O(n^2)
//SC --> O(1)

const selectionSort = array => {
    const arrayLength = array.length;
    for (let i=0; i<arrayLength; i++) {
        let smallest = array[i];
        let loc = i;
        for (let j=i; j<arrayLength; j++) {
            if (array[j] < smallest) {
                smallest = array[j];
                loc = j;
            }
        }
        let temp = array[i];
        array[i] = smallest;
        array[loc] = temp;
    }
    return array;
};

console.log("Selection Sort: ", selectionSort(numbers));