/*
Given an array arr[], find the maximum j – i such that arr[j] > arr[i]
Given an array arr[], find the maximum j – i such that arr[j] >= arr[i].
Examples :

  Input: {34, 8, 10, 3, 2, 80, 30, 33, 1}
  Output: 6  (j = 7, i = 1)

  Input: {9, 2, 3, 4, 5, 6, 7, 8, 18, 0}
  Output: 8 ( j = 8, i = 0)

  Input:  {1, 2, 3, 4, 5, 6}
  Output: 5  (j = 5, i = 0)

  Input:  {6, 5, 4, 3, 2, 1}
  Output: -1
*/

const maxDistance = nums => {
    let max = 0;
    for (let i=0; i< nums.length; i++) {
        for (let j=i+1; j< nums.length; j++) {
            if (j - i > max && nums[j] >= nums[i])
                max = j - i;
        }
    }
    return max;
};

//TC-> O(n^2)
//SC-> O(1)

console.log(maxDistance([34, 8, 10, 3, 2, 80, 30, 33, 1]));
console.log(maxDistance([9, 2, 3, 4, 5, 6, 7, 8, 18, 0]));
console.log(maxDistance([1, 2, 3, 4, 5, 6]));
console.log(maxDistance([6, 5, 4, 3, 2, 1]));