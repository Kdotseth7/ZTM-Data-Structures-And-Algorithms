/*
Write a method to replace all the spaces in a string with ‘%20’. You may assume that the string
has sufficient space at the end to hold the additional characters, and that you are given the
“true” length of the string.

Examples:
Input : "Mr John Smith", 13
Output : Mr%20John%20Smith

Input : "Mr John Smith   ", 13
Output : Mr%20John%20Smith
*/

const URLify = (url, trueLength) => {
    let auxString = "";
    for (let i=0; i<trueLength; i++) {
        if (url[i] === " ")
            auxString = auxString +  "%20";
        else
            auxString = auxString + url[i];
    }
    return auxString;
};

console.log(URLify("Mr John Smith", 13));
console.log(URLify("Mr John Smith   ", 13));

//TC: O(n)
//SC: O(1)