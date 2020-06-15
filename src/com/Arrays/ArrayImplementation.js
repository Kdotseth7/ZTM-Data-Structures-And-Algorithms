class MyArray {

    constructor() {
        this.length = 0;
        this.data = {};
    }

    get(index) { //O(1)
        return this.data[index];
    }

    push(item) { //O(1)
        this.data[this.length] = item;
        this.length++;
        return this.length;
    }

    pop() { //O(1)
        let lastItem = this.data[this.length-1];
        delete this.data[this.length-1];
        this.length--;
        return lastItem;
    }

    delete(index) { //O(n)
        let deleteItem = this.data[index];
        delete this.data[index];
        this.shiftItems(index);
        return deleteItem;
    }

    shiftItems(index) {
        for (let i=index; i< this.length-1; i++) {
            this.data[i] = this.data[i+1];
        }
        delete this.data[this.length-1];
        this.length--;
    }

}

const myArray = new MyArray();
myArray.push("h1");
myArray.push("h2");
myArray.push("h3");
console.log(myArray.get(1));
myArray.pop();
console.log(myArray);
myArray.push("h4");
myArray.push("h5");
myArray.delete(1);
console.log(myArray);