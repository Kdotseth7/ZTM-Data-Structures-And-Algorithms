/*Given an array nums, write a function to move all 0's to the end of it while maintaining
 the relative order of the non-zero elements.
Example:

Input: [0,1,0,3,12]
Output: [1,3,12,0,0]
Note:
You must do this in-place without making a copy of the array.
Minimize the total number of operations.*/

const moveZeroes = nums => {
    let counter = 0;
    let trailingZeroArray = [];
    for (let i=0; i<=nums.length-1; i++) {
        if (nums[i] !== 0) {
            trailingZeroArray.push(nums[i]);
        } else
            counter++;
    }
    for (let i=0; i<counter; i++)
        trailingZeroArray.push(0);
    return trailingZeroArray;
};

console.log(moveZeroes([0, 1, 0, 3, 12, 0, 0, 0, 8, 0, 7, 0, 0, 0]));