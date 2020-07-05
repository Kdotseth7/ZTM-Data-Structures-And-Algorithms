class Node {

    constructor(value) {
        this.value = value;
        this.next = null;
    }

}

class Queue {

    constructor() {
        this.front = null;
        this.rear = null;
        this.length = 0;
    }

    peek() {
        return this.front;
    }

    enqueue(value) {
        const newNode = new Node(value);
        if (this.rear === null) {
            this.front = newNode;
            this.rear = this.front;
        } else {
            this.rear.next = newNode;
            this.rear = newNode;
        }
        this.length++;
        return this;
    }

    dequeue() {
        if (!this.front)
            return null;
        if (this.length === 1)
            this.rear = null;
        const holdingPointer = this.front;
        this.front = this.front.next;
        this.length--;
        return holdingPointer;
    }

    printQueue() {
        let array = [];
        let currentNode = this.front;
        while (currentNode !== null) {
            array.push(currentNode.value);
            currentNode = currentNode.next;
        }
        return array;
    }

}

const myQueue = new Queue();
console.log(myQueue.dequeue());
console.log(myQueue.peek());
myQueue.enqueue(10);
myQueue.enqueue(5);
myQueue.enqueue(2);
console.log(myQueue.enqueue(1));
console.log(myQueue.printQueue());
console.log(myQueue.peek());
myQueue.dequeue();
myQueue.dequeue();
console.log(myQueue.printQueue());
myQueue.dequeue();
console.log(myQueue.dequeue());
