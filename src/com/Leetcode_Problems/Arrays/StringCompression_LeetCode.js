/*
Given an array of characters, compress it in-place.
The length after compression must always be smaller than or equal to the original array.
Every element of the array should be a character (not int) of length 1.
After you are done modifying the input array in-place, return the new length of the array.
Follow up:
Could you solve it using only O(1) extra space?

Example 1:
Input:
["a","a","b","b","c","c","c"]
Output:
Return 6, and the first 6 characters of the input array should be: ["a","2","b","2","c","3"]
Explanation:
"aa" is replaced by "a2". "bb" is replaced by "b2". "ccc" is replaced by "c3".

Example 2:
Input:
["a"]
Output:
Return 1, and the first 1 characters of the input array should be: ["a"]
Explanation:
Nothing is replaced.

Example 3:
Input:
["a","b","b","b","b","b","b","b","b","b","b","b","b"]
Output:
Return 4, and the first 4 characters of the input array should be: ["a","b","1","2"].
Explanation:
Since the character "a" does not repeat, it is not compressed. "bbbbbbbbbbbb" is replaced by "b12".
Notice each digit has it's own entry in the array.

Note:
All characters have an ASCII value in [35, 126].
1 <= len(chars) <= 1000.
*/

/**
 * @param {string[]} chars
 * @return {number}
 */
const compress = function(chars) {
    let length = chars.length;
    let index = 0;
    let i = 0;
    while (i < length) {
        let j = i;
        while (j < length && chars[j] === chars[i]) {
            j++;
        }
        chars[index++] = chars[i];
        if (j - i > 1) {
            let count = (j - i).toString();
            for (let char of count) {
                chars[index++] = char;
            }
        }
        i = j;
    }
    for (let i=index; i<length; i++) {
        chars.pop();
    }
    console.log(chars);
    return index;
};
//TC: O(n^2)
//SC: O(1)

console.log(compress(["a","a","b","b","c","c","c"]));
console.log(compress(["a","b","b","b","b","b","b","b","b","b","b","b","b"]));
console.log(compress(["a","b","b","b","b","b","b","b","b","b","b","b","b", "c", "c", "c"]));