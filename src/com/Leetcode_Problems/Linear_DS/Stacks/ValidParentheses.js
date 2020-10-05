/*
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine
if the input string is valid.

An input string is valid if:
Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.

Example 1:
Input: s = "()"
Output: true

Example 2:
Input: s = "()[]{}"
Output: true

Example 3:
Input: s = "(]"
Output: false

Example 4:
Input: s = "([)]"
Output: false

Example 5:
Input: s = "{[]}"
Output: true

Constraints:
1 <= s.length <= 104
s consists of parentheses only '()[]{}'.
*/

/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = function(s) {
    const evaluationStack = [];
    for (let bracket of s) {
        if (bracket === "(" || bracket === "[" || bracket === "{")
            evaluationStack.push(bracket);
        else {
            let top = evaluationStack[evaluationStack.length - 1];
            if (!evaluationStack.length)
                return false;
            else if (
                (top === "(" && bracket === ")")
                ||
                (top === "[" && bracket === "]")
                ||
                (top === "{" && bracket === "}"))
                evaluationStack.pop();
            else
                break;
        }
    }
    return !evaluationStack.length;
};

console.log(isValid("()"));
console.log(isValid("()[]{}"));
console.log(isValid("(]"));
console.log(isValid("([)]"));
console.log(isValid("{[]}"));
console.log(isValid("(])"));