// Link: https://www.youtube.com/watch?v=Wg8IiY1LbII&t=782s
// Uses 2 stacks implemented using arrays

class Queue_Using_Stack {

    constructor() {
        this.pushStack = [];
        this.popStack = [];
    }

    peek() {
        if (this.popStack.length === 0)
            return this.pushStack[0];
        else
            return this.popStack[this.popStack.length - 1];
    }

    enqueue(value) {
        this.pushStack.push(value);
        return this;
    }

    dequeue() {
        if (this.popStack.length === 0 && this.pushStack.length === 0)
            return undefined;
        if (this.popStack.length === 0) {
            const pushStackLength = this.pushStack.length;
            for (let i=0; i<pushStackLength; i++)
                this.popStack.push(this.pushStack.pop());
            this.popStack.pop();
        } else {
            this.popStack.pop();
        }
        return this;
    }

    isEmpty() {
        return (!this.pushStack.length) && (!this.pushStack.length);
    }

}

/*
Peek => O(1)
Enqueue => O(1)
Dequeue => 0(n) => O(1) as per Amortized Analysis
*/

const myQueue = new Queue_Using_Stack();
console.log(myQueue.peek());
console.log(myQueue.isEmpty());
console.log(myQueue.enqueue(7));
console.log(myQueue.enqueue(2));
console.log(myQueue.enqueue(29));
console.log(myQueue.enqueue(4));
console.log(myQueue.enqueue(11));
console.log(myQueue.enqueue(3));
console.log(myQueue.isEmpty());
console.log(myQueue.peek());
console.log(myQueue.dequeue());
console.log(myQueue.dequeue());
console.log(myQueue.dequeue());
console.log(myQueue.peek());
console.log(myQueue.enqueue(1));
console.log(myQueue.enqueue(99));
console.log(myQueue.peek());
console.log(myQueue.dequeue());
console.log(myQueue.dequeue());
console.log(myQueue.dequeue());
console.log(myQueue.dequeue());
console.log(myQueue.dequeue());
console.log(myQueue.dequeue());
console.log(myQueue.isEmpty());