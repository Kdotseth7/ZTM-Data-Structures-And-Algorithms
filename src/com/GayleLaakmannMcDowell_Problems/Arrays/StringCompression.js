// String Compression / Run Length Encoding

const stringCompression = str => {
    let compressedStr = "";
    let prevChar = str[0];
    let counter = 1;
    // If length of string is 1
    if (str.length === 1)
        compressedStr = str + counter;
    for (let i=1; i<str.length; i++) {
        if (str[i] === prevChar) {
            counter++;
        } else {
            compressedStr += prevChar + counter;
            counter = 1;
            prevChar = str[i];
        }
        if(i === str.length - 1)
            compressedStr += prevChar + counter;
    }
    // If length of compressedString > originalString
    if (str.length < compressedStr.length)
        return str;
    else
        return compressedStr;
}
//TC-> O(n)
//SC-> O(n)

/*
Note: This algorithm does not run in linear time, it actually has a quadratic runtime complexity.
Since Strings in Java/JS are immutable, concatenation using the + operator takes linear time because it
has to copy the whole string.
A more efficient solution using JAVA would be using the StringBuilder class to
build the output. Appending to a StringBuilder has an amortized runtime of O(1), thus achieving an
overall linear complexity.
JS -> using Array.push() then Array.join() as there is no String Builder concept in JS
*/

console.log("SC: O(n)")
console.log(stringCompression("a"));
console.log(stringCompression("aabcd"));
console.log(stringCompression("vvvVVVVbaagggGhhhjda"));