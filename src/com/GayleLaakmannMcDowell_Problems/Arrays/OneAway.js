/*
There are three types of edits that can be performed on strings:
1. Insert a character
2. Remove a character
3. Replace a character
Given two strings, write a function to check if they are one edit (or zero edits) away.

Example:
pale, ple --> true
pales, pale --> true
pale, bale --> false
pale, bake --> false
*/

const oneAway = (str1, str2) => {
    const str1Length = str1.length;
    const str2Length = str2.length;
    if (Math.abs(str1Length - str2Length) > 1) return false;
    const hashMap = new Map();
    for (let i=0; i<str1.length; i++) {
        if (hashMap.has(str1[i])) hashMap.set(str1[i], hashMap.get(str1[i]) + 1);
        else hashMap.set(str1[i], 1);
    }
    for (let i=0; i<str2.length; i++) {
        if (hashMap.has(str2[i])) hashMap.set(str2[i], hashMap.get(str2[i]) - 1);
    }
    const keys = hashMap.keys();
    let editCount = 0;
    for (let key of keys) {
        editCount += hashMap.get(key);
    }
    return editCount < 2;
}
//TC: O(n)
//SC: O(n)

console.log("SC: O(n)-->");
console.log(oneAway("pale", "ple"));
console.log(oneAway("pales", "pale"));
console.log(oneAway("pale", "bale"));
console.log(oneAway("pale", "bake"));

const oneAway_O1 = (str1, str2) => {
    const str1Length = str1.length;
    const str2Length = str2.length;
    if (Math.abs(str1Length - str2Length) > 1) return false;
    let editCount = 0;
    let i = 0;
    let j = 0;
    while (i < str1Length && j < str2Length) {
        // If current characters don't match
        if (str1[i] !== str2[j]) {
            if (editCount === 1) return false;
            // If length of one string is more, then only possible edit is to remove/add a character
            if (str1Length > str2Length) i++;
            if (str1Length < str2Length) j++;
            editCount++;
        }
        i++;
        j++;
    }
    // If last character is extra in any string
    if (i < str1Length || j < str2Length) editCount++;
    return editCount < 2;
}
//TC: O(n)
//SC: O(1)

console.log("SC: O(1)-->");
console.log(oneAway_O1("pale", "ple"));
console.log(oneAway_O1("pales", "pale"));
console.log(oneAway_O1("pale", "bale"));
console.log(oneAway_O1("pale", "bake"));