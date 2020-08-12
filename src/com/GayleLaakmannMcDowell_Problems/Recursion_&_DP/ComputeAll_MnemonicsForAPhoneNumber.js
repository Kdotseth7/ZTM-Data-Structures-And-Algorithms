/*
Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent.
A mapping of digit to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.

Example:
Input: "23"
Output: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].
Note:

Although the above answer is in lexicographical order, your answer could be in any order you want.
*/

/**
 * @param {string} digits
 * @return {string[]}
 */
const letterCombinations = function(digits) {
    const numberToLetterMappings = [
        '0',
        '1',
        'abc',
        'def',
        'ghi',
        'jkl',
        'mno',
        'pqrs',
        'tuv',
        'wxyz'
    ];
    return returnCombinations(digits, 0, numberToLetterMappings, "", []);
};

function returnCombinations(digits, digit, mappings, combination, list) {
    // Our Goal (Base Case)
    if (digits.length === digit)
        list.push(combination);
    //Our Choices
    else {
        for (let i=0; i<mappings[digits.charAt(digit)].length; i++) {
            returnCombinations(digits, digit + 1, mappings,combination + mappings[digits.charAt(digit)].charAt(i), list);
        }
    }
    return list;
}

console.log(letterCombinations("23"));