function boo(n) {
    for (let i=0; i<n.length; i++) {
        console.log("Booooooo!");
    }
}

boo([1, 2, 3, 4, 5]); //O(1)

const arrayOfHiNTimes = n => {
    let hiArray = [];
    for(let i=0; i<n; i++) { //O(1)
        hiArray[i] = "hi"; //O(n)
    }
    return hiArray;
};

console.log(arrayOfHiNTimes(6)); //O( 1 + n) --> O(n)