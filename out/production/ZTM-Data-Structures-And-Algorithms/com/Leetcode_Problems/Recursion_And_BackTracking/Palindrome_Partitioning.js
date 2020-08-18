/*
Link: https://www.youtube.com/watch?v=4ykBXGbonlA&list=PLiQ766zSC5jM2OKVr8sooOuGgZkvnOCTI&index=17
Given a string s, partition s such that every substring of the partition is a palindrome.
Return all possible palindrome partitioning of string s (or in other words generate All Palindromic Decompositions of a string s)

Example:
Input: "aab"
Output:
[
  ["aa","b"],
  ["a","a","b"]
]
*/

/**
 * @param {string} s
 * @return {string[][]}
 */
const partition = function(s) {
    return palindromicDecompositions(s, 0, [], []);
};

function palindromicDecompositions(s, buildPtr, partialDecomposition, allDecompositions) {
    // Our Goal(Base Case)
    if (buildPtr === s.length) {
        allDecompositions.push(Array.from(partialDecomposition));
    }
    else {
        // Our Choice
        for (let i=buildPtr; i<s.length; i++) {
            if (isPalindrome(buildPtr, i, s)) {
                let palindromicSnippet = s.substr(buildPtr, i + 1);
                partialDecomposition.push(palindromicSnippet);
                palindromicDecompositions(i + 1, s, partialDecomposition, allDecompositions);
                partialDecomposition.pop();
            }
        }
    }
    return allDecompositions;
}

function isPalindrome(left, right, s) {
    while (left < right) {
        if (s.charAt(left) !== s.charAt(right))
            return false;
        left++;
        right--;
    }
    return true;
}

console.log(partition("aab"));