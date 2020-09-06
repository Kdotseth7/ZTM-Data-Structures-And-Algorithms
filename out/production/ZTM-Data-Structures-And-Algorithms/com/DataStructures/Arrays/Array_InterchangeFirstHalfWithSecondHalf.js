/*
Example-1:
Input: [10, 20, 30, 40, 50, 60]
Output: [40, 50, 60, 10, 20, 30]

Example-2:
Input: [10, 20, 30, 40, 50, 60, 70]
Output: [40, 50, 60, 70, 20, 30, 10]
*/

// 2 ptr method
const interchange = arr => {
    const length = arr.length;
    let j = Math.floor(length/2);
    for (let i=0; i<Math.floor(length/2); i++) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
        j++
    }
    // If length of array is odd
    if (length % 2 !== 0) {
        let last = arr[length-1];
        for (let i=length-1; i>= Math.floor(length/2); i--) {
            arr[i] = arr[i-1];
        }
        arr[Math.floor(length/2)] = last;
    }
    return arr;
}
//TC: O(n)
//SC: O(1)

console.log(interchange([10, 20, 30, 40, 50, 60]));
console.log(interchange([10, 20, 30, 40, 50, 60, 70]));
