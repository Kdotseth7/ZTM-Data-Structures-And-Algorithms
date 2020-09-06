/*
Given a non-empty array of integers, every element appears twice except for one. Find that
single one.
Note: Your algorithm should have a linear runtime complexity. Could you implement it without
using extra memory?

Example 1:
Input: [2,2,1]
Output: 1

Example 2:
Input: [4,1,2,1,2]
Output: 4
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
const singleNumber = function(nums) {
    let hashMap = new Map();
    const length = nums.length;
    for (let i=0; i<length; i++) {
        if (hashMap.has(nums[i])) hashMap.set(nums[i], hashMap.get(nums[i]) + 1);
        else hashMap.set(nums[i], 1);
    }
    const keys = hashMap.keys();
    for (let key of keys) {
        if (hashMap.get(key) === 1) return key;
    }
    return 0;
};
//TC: O(n)
//SC: O(n)

console.log(singleNumber([2,2,1]));
console.log(singleNumber([4,1,2,1,2]));
console.log(singleNumber([4,1,2,1,2,4]));

// Bit Manipulation
const singleNumber_O1 = function(nums) {
    const length = nums.length;
    let singleNumber = 0;
    for (let i=0; i<length; i++) {
        singleNumber ^= nums[i];
    }
    return singleNumber;
}
//TC: O(n)
//SC: O(1)

console.log(singleNumber_O1([2,2,1]));
console.log(singleNumber_O1([4,1,2,1,2]));
console.log(singleNumber_O1([4,1,2,1,2,4]));