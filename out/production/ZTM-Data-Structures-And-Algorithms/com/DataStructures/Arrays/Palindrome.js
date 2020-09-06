/*
1. Input: "nittin", Output: true
2. Input: "12321", Output: true
3. Input: "tintin", Output: false
*/

const palindrome = str => {
    let reverse = "";
    for (let i=str.length-1; i>=0; i--) {
        reverse += str[i];
    }
    return str === reverse;
}
//TC: O(n^2) as strings are immutable and concatenation itself takes O(n) time
//SC: O(n)

console.log(palindrome("nittin"));
console.log(palindrome("12321"));
console.log(palindrome("tintin"));

// Using 2 pointer method
const palindrome_InPlace = str => {
    const length = str.length;
    let j = length - 1;
    let isPalindrome = true;
    for (let i=0; i<length/2; i++) {
        if (str[i] !== str[j]) {
            isPalindrome = false;
            break;
        }
        j--;
    }
    return isPalindrome;
}
//TC: O(n)
//SC: O(1)

console.log(palindrome_InPlace("nittin"));
console.log(palindrome_InPlace("12321"));
console.log(palindrome_InPlace("tintin"));