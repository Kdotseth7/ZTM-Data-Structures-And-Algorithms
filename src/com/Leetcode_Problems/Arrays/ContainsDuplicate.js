/*Given an array of integers, find if the array contains any duplicates.
Your function should return true if any value appears at least twice in the array, and it should return false if every element is distinct.

Example 1:
Input: [1,2,3,1]
Output: true

Example 2:
Input: [1,2,3,4]
Output: false

Example 3:
Input: [1,1,1,3,3,4,3,2,4,2]
Output: true
*/

const containsDuplicate = nums => {
    for (let i=0; i<nums.length-1; i++) {
        for (let j=i+1; j<nums.length; j++) {
            console.log(nums[i], nums[j]);
            if (nums[i] === nums[j])
                return true;
        }
    }
    return false;
};

console.log(containsDuplicate([1,1,1,3,3,4,3,2,4,2]));