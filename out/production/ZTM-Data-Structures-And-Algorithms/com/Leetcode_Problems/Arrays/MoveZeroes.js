/*
Link: https://leetcode.com/problems/move-zeroes/description/
Given an array nums, write a function to move all 0's to the end of it while maintaining
 the relative order of the non-zero elements.
Example:

Input: [0,1,0,3,12]
Output: [1,3,12,0,0]
Note:
You must do this in-place without making a copy of the array.
Minimize the total number of operations.*/

const moveZeroes_UsingAuxArray = nums => {
    let counter = 0;
    let trailingZeroArray = [];
    for (let i=0; i<nums.length; i++) {
        if (nums[i] !== 0) {
            trailingZeroArray.push(nums[i]);
        } else
            counter++;
    }
    for (let i=0; i<counter; i++)
        trailingZeroArray.push(0);
    return trailingZeroArray;
};

console.log(moveZeroes_UsingAuxArray([0,1,0,3,12]));
console.log(moveZeroes_UsingAuxArray([0, 1, 0, 3, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 7, 0, 0, 0]));
//TC: O(n)
//SC: O(n)

const moveZeroes_InPlace = nums => {
    //two pointers
    let pos = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            nums[pos++] = nums[i];
        }
    }
    for (let j = pos; j < nums.length; j++) {
        nums[j] = 0;
    }
    return nums;
};

console.log(moveZeroes_InPlace([0, 1, 0, 3, 12, 0, 8, 0, 7, 0]));
console.log(moveZeroes_InPlace([1, 0, 0, 3, 12, 0, 0, 0, 0, 8, 0, 7, 0, 0]));
//TC: O(n)
//SC: O(1)