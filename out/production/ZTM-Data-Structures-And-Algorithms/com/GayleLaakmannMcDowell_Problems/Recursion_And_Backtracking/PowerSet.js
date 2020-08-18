/*
Given a set of distinct integers, nums, return all possible subsets (the power set).
Note: The solution set must not contain duplicate subsets.

Example:
Input: nums = [1,2,3]
Output:
[
  [3],
  [1],
  [2],
  [1,2,3],
  [1,3],
  [2,3],
  [1,2],
  []
]
*/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */

const powerSet = function(nums) {
    return returnAllSubsets(nums, 0, [], []);
};

function returnAllSubsets(nums, startIndex, subset, list) {
    if (nums.length === startIndex)
        list.push(subset);
    else {
        returnAllSubsets(nums, startIndex + 1, subset.concat(nums[startIndex]), list);
        returnAllSubsets(nums, startIndex + 1, subset, list);
    }
    return list;
}

console.log(powerSet([1, 2, 3]));