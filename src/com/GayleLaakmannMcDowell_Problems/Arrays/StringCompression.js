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

console.log(stringCompression("aabcd"));
console.log(stringCompression("vvvVVVVbaagggGhhhjda"));