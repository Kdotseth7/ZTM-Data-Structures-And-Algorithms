/*
Implement an algorithm to determine if a string has all unique characters without using additional
data structures.
*/

const isUnique = array => {
    const length = array.length;
    for (let i=0; i<length; i++) {
        for (let j=i+1; j<length; j++) {
            if (array[i] === array[j])
                return false;
        }
    }
    return true;
};

console.log(isUnique("geeks"));
console.log(isUnique("kush"));

//TC: O(n^2)
//SC: O(1)