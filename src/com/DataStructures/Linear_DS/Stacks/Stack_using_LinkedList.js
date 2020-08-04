/*
top = 4, top.next = 2
bottom = 1
4
|
2
|
5
|
1
*/

class Node {

    constructor(value) {
        this.value = value;
        this.next = null;
    }

}

class Stack {

    constructor() {
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }

    peek() {
        return this.top;
    }

    push(value) {
        const newNode = new Node(value);
        if(this.length === 0) {
            this.bottom = newNode;
            this.top = this.bottom;
        } else {
            newNode.next = this.top;
            this.top = newNode;
        }
        this.length++;
        return this.printStack();
    }

    pop() {
        if (!this.top)
            return null;
        if (this.bottom === this.top)
            this.bottom = null;
        const holdingPointer = this.top;
        this.top = this.top.next;
        this.length--;
        return holdingPointer;
    }

    isEmpty() {
        return !this.top;

    }

    printStack() {
        let array = [];
        let currentNode = this.top;
        while (currentNode !== null) {
            array.push(currentNode.value);
            currentNode = currentNode.next;
        }
        return array.reverse();
    }

}

const myStack = new Stack();
console.log(myStack.isEmpty());
myStack.push(10);
myStack.push(18);
console.log(myStack.push(9));
console.log(myStack.peek());
console.log(myStack.pop());
console.log(myStack.pop());
console.log(myStack.pop());
console.log(myStack.isEmpty());
console.log(myStack);