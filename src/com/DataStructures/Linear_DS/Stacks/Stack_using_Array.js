class Stack {

    constructor() {
        this.array = [];
    }

    peek() {
        return this.array[this.array.length - 1];
    }

    push(value) {
        this.array.push(value);
        return this;
    }

    pop() {
        this.array.pop();
        return this;
    }

    isEmpty() {
        return !this.array.length;
    }

}

const myStack = new Stack();
console.log(myStack.peek());
console.log(myStack.isEmpty());
myStack.push(8);
myStack.push(4);
console.log(myStack.push(9));
console.log(myStack.pop());
console.log(myStack.peek());
console.log(myStack.isEmpty());
