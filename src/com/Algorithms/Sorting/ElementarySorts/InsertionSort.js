const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

//TC --> O(n^2)
//SC --> O(1)
//Video link: https://www.youtube.com/watch?v=nKzEJWbkPbQ
/*
1. Works best when list is almost sorted or small dataset's
2. Best case TC of almost O(n)
3. Approach --> Consider array is divided into 2 parts: Sorted and Unsorted parts
4. Similar to the way you arrange a deck of cards
*/
const insertionSort = array => {
    for (let i=1; i<array.length; i++) {
        let currentElement = array[i];
        //Shift all elements of sorted part > current element to the right
        let j = i-1;
        while (j>=0 && array[j] > currentElement) {
            array[j+1] = array[j];
            j--;
        }
        array[j+1] = currentElement;
    }
    return array;
};

console.log("Insertion Sort: ", insertionSort(numbers));