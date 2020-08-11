const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

//TC --> Best Case = Worst Case = O(n log n)
/*SC --> Auxiliary Array Space -> n + Call Stack space (as its recursion) -> log n
        = O(n)
 */
//Link: https://www.youtube.com/watch?v=mB5HXBb_HY8
/*
1. Uses divide and conquer technique, i.e., com.GayleLaakmannMcDowell_Problems.Recursion
2. If your'e not worried about Space Complexity, merge sort is best as it has same best and worst case for Time Complexity
3. Merge Sort is a stable algorithm: https://stackoverflow.com/questions/1517793/what-is-stability-in-sorting-algorithms-and-why-is-it-important
*/
/*
Pros:
1. Suitable for large size list
2. Suitable for Linked Lists
3. Stable
4. High efficiency with External Sorting

Cons:
1. Extra Space used: auxiliary array
2. Works slowly for smaller problems(like for elements <=15). Rather use Insertion sort in those cases.
3. Recursive algorithm so uses call stack
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