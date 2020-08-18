class QueueUsing2Stacks {

    constructor() {
        this.pushStack = [];
        this.popStack = [];
    }

    enqueue(value) {
        this.pushStack.push(value);
        return this;
    }

    dequeue() {
        if (this.popStack.length === 0 && this.pushStack.length === 0)
            return undefined;
        if (this.popStack.length === 0) {
            while(this.pushStack.length !== 0) {
                this.popStack.push(this.pushStack.pop());
            }
            this.popStack.pop();
        } else {
            this.popStack.pop();
        }
        return this;
    }

    peek() {
        return this.pushStack[this.pushStack.length - 1];
    }

    isEmpty() {
        return (!this.pushStack.length) && (!this.pushStack.length);
    }

}

const queue = new QueueUsing2Stacks();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
console.log(queue.enqueue(5));
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.enqueue(6));
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());