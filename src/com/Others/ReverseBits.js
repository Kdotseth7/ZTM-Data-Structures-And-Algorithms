/*
Reverse bits of a given 32 bits unsigned integer.

Example 1:
Input: 00000010100101000001111010011100
Output: 00111001011110000010100101000000
Explanation: The input binary string 00000010100101000001111010011100 represents
the unsigned integer 43261596, so return 964176192 which its binary representation
is 00111001011110000010100101000000.

Example 2:
Input: 11111111111111111111111111111101
Output: 10111111111111111111111111111111
Explanation: The input binary string 11111111111111111111111111111101 represents
the unsigned integer 4294967293, so return 3221225471 which its binary representation
is 10111111111111111111111111111111.

Note:
Note that in some languages such as Java, there is no unsigned integer type. 
In this case, both input and output will be given as signed integer type and should not affect 
your implementation, as the internal binary representation of the integer is the same whether 
it is signed or unsigned.
In Java, the compiler represents the signed integers using 2's complement notation. 
Therefore, in Example 2 above the input represents the signed integer -3 and the output 
represents the signed integer -1073741825.

Follow up:
If this function is called many times, how would you optimize it?

Constraints:
The input must be a binary string of length = 32
*/

/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */

const reverseBits = function(n) {
    let binary = n.toString(2);
    const diff = 32 - binary.length;
    binary = addZeroes(diff) + binary;
    binary = binary.split('');
    let length = binary.length;
    let j = length - 1;
    for (let i=0; i<length/2; i++) {
        let temp = binary[i];
        binary[i] = binary[j];
        binary[j] = temp;
        j--;
    }
    // Return binary value converted to decimal
    return parseInt(binary.join(''), 2);
};

function addZeroes(diff) {
    let str = "";
    for (let i=0; i<diff; i++) {
        str += "0";
    }
    return str;
}
//TC: O(n)
//SC: O(n)

console.log(reverseBits(43261596));