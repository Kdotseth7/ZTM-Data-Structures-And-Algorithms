const stringReverse = str => {
    //Check Input
    if ( !str || str.length < 2 || typeof str !== 'string')
        return "Invalid Input";

    //Reverse String
    const strLength = str.length - 1;
    let reversedString = [];
    for (let i=strLength; i>=0; i--) {
        reversedString.push(str[i]) 
    }
    return reversedString.join('');
};
console.log(stringReverse("My name is John Doe!"));
//TC: O(n)
//SC: O(n)

// Using 2 pointer method
const stringReverse_InPlace = str => {
    str = str.split('');
    const length = str.length;
    let j = length - 1;
    for (let i=0; i<length/2; i++) {
        let temp = str[i];
        str[i] = str[j];
        str[j] = temp;
        j--;
    }
    return str.join('');
}
console.log(stringReverse_InPlace("Kushagra"));
//TC: O(n)
//SC: O(1)

// Using arrow functions and built-in reverse method
const reverse2 = str => str.split('').reverse().join('');
console.log(reverse2("Return of the Mac"));

// Using ES6 spread operator
const reverse3 = str => [...str].reverse().join('');
console.log(reverse3("Black Lives Matter"));