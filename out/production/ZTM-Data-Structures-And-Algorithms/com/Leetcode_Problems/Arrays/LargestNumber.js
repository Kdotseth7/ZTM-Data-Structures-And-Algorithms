/*
Given a list of non negative integers, arrange them such that they form the largest number.

Example 1:
Input: [10,2]
Output: "210"

Example 2:
Input: [3,30,34,5,9]
Output: "9534330"

Note: The result may be very large, so you need to return a string instead of an integer.
*/

/**
 * @param {number[]} nums
 * @return {string}
 */

const largestNumber = function(nums) {
    /*Intuition:
    * Sort the array by comparing ab and ba
    * Remove leading 0s
    * */
    if (nums.length === 0)
        return "";
    /*
    * Sorts an array.
     * @param compareFn Function used to determine the order of the elements. It is expected to return
     * a negative value if first argument is less than second argument, zero if they're equal and a positive
     * value otherwise. If omitted, the elements are sorted in ascending, ASCII character order.
     * ```ts
     * [11,2,22,1].sort((a, b) => a - b)
     * ```
     */
    return nums.sort((a, b) => {
        return ("" + b + a) - ("" + a + b);
    }).join('').replace(/^0*/g, "")||'0';
};

console.log(largestNumber([3,30,34,5,9]));
console.log(largestNumber([0, 0, 0, 0]));

const largestNumber_UsingIndividualDigits = function(nums) {
    let joinedNums = nums.join('');
    joinedNums = joinedNums.split('');
    for (let i=1; i<joinedNums.length; i++) {
        let currentElement = joinedNums[i];
        //Shift all elements of sorted part > current element to the right
        let j = i-1;
        while (j>=0 && joinedNums[j] > currentElement) {
            joinedNums[j+1] = joinedNums[j];
            j--;
        }
        joinedNums[j+1] = currentElement;
    }
    return joinedNums.reverse().join('');
};

console.log(largestNumber_UsingIndividualDigits([3,30,34,5,9]));