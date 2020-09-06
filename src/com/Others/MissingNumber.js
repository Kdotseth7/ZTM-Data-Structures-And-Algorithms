/*
Given an array containing n distinct numbers taken from 0, 1, 2, ..., n, find the one
that is missing from the array.

Example 1:
Input: [3,0,1]
Output: 2

Example 2:
Input: [9,6,4,2,3,5,7,0,1]
Output: 8

Note:
Your algorithm should run in linear runtime complexity. Could you implement it using
only constant extra space complexity?
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
const missingNumber = function(nums) {
    const length = nums.length;
    for (let i=1; i<length; i++) {
        let currentElement = nums[i];
        //Shift all elements of sorted part > current element to the right
        let j = i-1;
        while (j>=0 && nums[j] > currentElement) {
            nums[j+1] = nums[j];
            j--;
        }
        nums[j+1] = currentElement;
    }
    for (let i=0; i<length; i++) {
        if (i !== nums[i]) return i;
    }
    return length;
};
//TC: O(n^2)
//SC: O(1)

console.log(missingNumber([3,0,1]));
console.log(missingNumber([9,6,4,2,3,5,7,0,1]));

// Bit Manipulation
const missingNumber_O1Time = function(nums) {
    const length = nums.length;
    let missing = length;
    for (let i=0; i<length; i++) {
        missing ^= i ^ nums[i];
    }
    return missing;
}
//TC: O(n)
//SC: O(1)

console.log(missingNumber_O1Time([3,0,1]));
console.log(missingNumber_O1Time([9,6,4,2,3,5,7,0,1]));