/*
Example-1:
Input: [10, 20, 30, 40, 50, 60]
Output: [20, 10, 40, 30, 60, 50]

Example-2:
Input: [10, 20, 30, 40, 50, 60, 70]
Output: [20, 10, 40, 30, 60, 50, 70]
*/

const interchange_EvenWithOdd = arr => {
    let length = arr.length;
    for (let i=0; i<length; i+=2) {
        if (i !== arr.length - 1) {
            let temp = arr[i];
            arr[i] = arr[i+1];
            arr[i+1] = temp;
        }
    }
    return arr;
}
//TC: O(n)
//SC: O(1)

console.log(interchange_EvenWithOdd([10, 20, 30, 40, 50, 60]));
console.log(interchange_EvenWithOdd([10, 20, 30, 40, 50, 60, 70]));
