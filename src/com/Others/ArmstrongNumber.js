/*
Input: 153, Output: true, Explanation: (1^3 + 5^3 + 3^3) = 153
*/

const armstrongNumber = num => {
    num = num.toString();
    let sum = 0;
    for (let i=0; i<num.length; i++) {
        sum += Math.pow(parseInt(num[i]), 3);
    }
    return sum === parseInt(num);
}
//TC: O(n)
//SC: O(1)

console.log(armstrongNumber(153));
console.log(armstrongNumber(24));