const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

//TC --> Best Case: O(n log n), Worst Case: O(n^2)
//SC --> Best Case: O(log n) = height of the tree, Worst Case: O(n) if there is a function call for every element,i.e., n function calls in call stack
//Link: https://www.youtube.com/watch?v=7h1s2SojIRw, https://www.youtube.com/watch?v=-qOVVRIZzao
/*
1. Uses divide and conquer technique, i.e., com.GayleLaakmannMcDowell_Problems.Recursion
2. Most commonly used sorting algorithm
3. To ensure worst case TC does'nt occur always use middle element as pivot
*/

const quickSort = (array, left, right) => {
    debugger;
    let pivot = left;
    let partitionIndex;
    if (left < right) {
        partitionIndex = partition(array, pivot, left, right);
        //Sort Left and Right
        quickSort(array, left, partitionIndex);
        quickSort(array, partitionIndex + 1, right);
    }
    return array;
};

const partition = (array, pivot, left, right) => {
    while (left < right) {
        while (array[pivot] >= array[left]) {
            left++;
        }
        while (array[pivot] < array[right]) {
            right--;
        }
        if (left < right)
            swap(array, left, right);
    }
    swap(array, pivot, right);
    return right;
};

const swap = (array, firstIndex, secondIndex) => {
    let temp = array[firstIndex];
    array[firstIndex] = array[secondIndex];
    array[secondIndex] = temp;
};

console.log("Quick Sort: ", quickSort(numbers, 0, numbers.length - 1));