/*
Input: "Hello How Are You"
Output: "hELLO hOW aRE yOU"
*/

//toLowerCase() and toUpperCase() methods don't alter original string but return a new a string

const toggleCase = input => {
    let str = "";
    for (let i=0; i<input.length; i++) {
        if (input.charAt(i) === input.charAt(i).toLowerCase())
            str += input.charAt(i).toUpperCase();
        else
            str += input.charAt(i).toLowerCase();
    }
    return str;
};

console.log(toggleCase("Hello How Are You"));