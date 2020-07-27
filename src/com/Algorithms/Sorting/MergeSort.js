const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

//TC --> O(n log n)
//SC --> O(n)
//Link: https://www.youtube.com/watch?v=mB5HXBb_HY8
/*
1. Uses divide and conquer technique, i.e., Recursion
2. Merge Sort is a stable algorithm: https://stackoverflow.com/questions/1517793/what-is-stability-in-sorting-algorithms-and-why-is-it-important
*/

const mergeSort = array => {
    if (array.length === 1) {
        return array;
    }
    // Split Array in into left and right
    let length = array.length;
    let middle = Math.floor(length/2);
    let left = array.slice(0, middle);
    let right = array.slice(middle, length);

    return merge(
        mergeSort(left),
        mergeSort(right)
    );
};

const merge = (left, right) => {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++;
        } else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }
    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
};

console.log("Merge Sort: ", mergeSort(numbers));