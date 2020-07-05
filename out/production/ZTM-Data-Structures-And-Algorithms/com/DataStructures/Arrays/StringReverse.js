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

const reversedString = stringReverse("My name is John Doe!");
console.log(reversedString);

// Using arrow functions and built-in reverse method
const reverse2 = str => str.split('').reverse().join('');
console.log(reverse2("Return of the Mac"));

// Using ES6 spread operator
const reverse3 = str => [...str].reverse().join('');
console.log(reverse3("Black Lives Matter"));