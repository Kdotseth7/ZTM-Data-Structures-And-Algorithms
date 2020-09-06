/*
Check Permutation/Anagram: Anagram is a word formed by rearranging letter of a certain word
Given 2 strings, write a method to decide if one is a permutation of the other.
*/

const checkPermutation = (str1, str2) => {
    if (str1.length !== str2.length)
        return false;
    str1 = str1.split('').sort();
    str2 = str2.split('').sort();
    return str1.join('') === str2.join('');
}
//TC: Worst Case-O(n^2), Best Case-O(n log n)
//SC: O(1)

console.log(checkPermutation("test", "ttse"));
console.log(checkPermutation("test", "taat"));
console.log(checkPermutation("test", "tset"));
console.log(checkPermutation("test", "batt"));

const checkPermutation_HashMap = (str1, str2) => {
    let isPermutation = true;
    let hashMap = new Map();
    for (let i=0; i<str1.length; i++) {
        if (hashMap.has(str1[i]))
            hashMap.set(str1[i], hashMap.get(str1[i]) + 1);
        else
            hashMap.set(str1[i], 1);
    }
    for (let i=0; i<str2.length; i++) {
        if (hashMap.has(str2[i]))
            hashMap.set(str2[i], hashMap.get(str2[i]) - 1);
    }
    const keys = hashMap.keys();
    for (let key of keys) {
        if (hashMap.get(key) !== 0) {
            isPermutation = false;
            break;
        }
    }
    return isPermutation;
}
//TC: O(n)
//SC: O(n)

console.log(checkPermutation_HashMap("test", "ttse"));
console.log(checkPermutation_HashMap("test", "taat"));
console.log(checkPermutation("test", "tset"));
console.log(checkPermutation("test", "batt"));