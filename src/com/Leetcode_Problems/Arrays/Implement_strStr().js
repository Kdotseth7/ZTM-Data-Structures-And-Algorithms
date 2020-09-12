/*
Implement strStr().
Return the index of the first occurrence of needle in haystack, or -1 if needle is not
part of haystack.

Example 1:
Input: haystack = "hello", needle = "ll"
Output: 2

Example 2:
Input: haystack = "aaaaa", needle = "bba"
Output: -1

Clarification:
What should we return when needle is an empty string? This is a great question to ask during
an interview.
For the purpose of this problem, we will return 0 when needle is an empty string. This is
consistent to C's strstr() and Java's indexOf().

Constraints: haystack and needle consist only of lowercase English characters.
*/

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */

const strStr = function(haystack, needle) {
    const m = haystack.length;
    const n = needle.length;
    if (!n) return 0;
    if (m < n) return -1;
    /*
    Optimization --> Searching only till m-n length of haystack as after that needle would be
    larger in length than remaining length of haystack
    */
    for (let i=0; i<=m-n; i++) {
        let j;
        for (j=0; j<n; j++) {
            if (haystack.charAt(i + j) !== needle.charAt(j))
                break;
        }
        if (j === n)
            return i;
    }
    return -1;
};
//TC: O(n)
//SC: O(1)

console.log(strStr("hello", "ll"));
console.log(strStr("blocker", "ker"));
console.log(strStr("aaaaa", "bba"));
console.log(strStr("mississippi", "issip"));
console.log(strStr("hello", ""));