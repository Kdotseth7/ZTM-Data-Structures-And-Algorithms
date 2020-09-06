function decimalToBinary(number){
    let binary = "";
    let temp = number;
    while(temp > 0){
        // MSB -------> LSB
        if(temp % 2 === 0) binary = "0" + binary;
        else binary = "1" + binary;
        temp = Math.floor(temp / 2);
    }
    return binary;
}

console.log(decimalToBinary(4));