/*
Given a string of unique characters, return all possible permutations.

Example:
Input: "boat"
Output:
[
  'boat', 'bota', 'baot',
  'bato', 'btoa', 'btao',
  'obat', 'obta', 'oabt',
  'oatb', 'otba', 'otab',
  'abot', 'abto', 'aobt',
  'aotb', 'atbo', 'atob',
  'tboa', 'tbao', 'toba',
  'toab', 'tabo', 'taob'
]
*/

/**
 * @param {string} inputString
 * @return {string[][]}
 */

const permuteUnique = function(inputString) {
    return generateAllPermutations(inputString, [],[]);
};

function generateAllPermutations(inputString, runningChoices, allPermutations) {
    // Our Goal (Base Case)
    if (runningChoices.length === inputString.length)
        allPermutations.push(Array.from(runningChoices).join(''));
    else {
        for (let i=0; i<inputString.length; i++) {
            let choice = inputString[i];

            // Our Constraint, i.e., skip if element already exists
            if (runningChoices.includes(choice)) {
                continue;
            }

            // Our Choice
            runningChoices.push(choice);

            generateAllPermutations(inputString, runningChoices, allPermutations);

            // Eject our choice
            runningChoices.pop();
        }
    }
    return allPermutations;
}

console.log(permuteUnique("boat"));