let counter = 0;
const inception = () => {
    debugger;
    console.log(counter);
    //Base Case
    if (counter > 3)
        return "DONE!";
    //Recursive Case
    counter++;
    return inception();
};

console.log(inception());