/*
Link: https://www.youtube.com/watch?v=NFJ3m9a1oJQ&list=PLiQ766zSC5jM2OKVr8sooOuGgZkvnOCTI&index=8
You are climbing a stair case. It takes n steps to reach to the top.

Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

Example 1:
Input: 2
Output: 2
Explanation: There are two ways to climb to the top.
1. 1 step + 1 step
2. 2 steps

Example 2:
Input: 3
Output: 3
Explanation: There are three ways to climb to the top.
1. 1 step + 1 step + 1 step
2. 1 step + 2 steps
3. 2 steps + 1 step

Constraints:
1 <= n <= 45
*/

/**
 * @param {number} n
 * @return {number}
 */

//com.GayleLaakmannMcDowell_Problems.Recursion - TC = O(2^n)
const climbStairs = n => {
    if (n < 0)
        return 0;
    if (n === 0)
        return 1;
    return (climbStairs(n - 2) + climbStairs(n - 1));
};

console.log(climbStairs(6));

//DP -> Top Down
const climbStairsTD = () => {
    let cache = {};
    return function climbTd(n) {
        if (n in cache)
            return cache[n];
        else {
            if (n < 0)
                return 0;
            if (n === 0)
                return 1;
            cache[n] = climbTd(n - 2) + climbTd(n - 1);
            return cache[n];
        }
    }
};
const topDownClimb = climbStairsTD();
console.log(topDownClimb(6));

//DP -> Bottom Up
const climbStairsBU = n => {
    let array = [1, 1];
    for (let i=2; i<n+1; i++) {
        array.push(array[i-2] + array[i-1]);
    }
    return array.pop();
};

console.log(climbStairsBU(6));

/*
TC = O(n), SC = O(n)
*/
