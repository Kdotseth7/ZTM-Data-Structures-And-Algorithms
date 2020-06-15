/*
10 ---> 5 --> 16
1 --> 10 ---> 5 --> 16
1 --> 10 ---> 99 --> 5 --> 16


let linkedList = {
    head: {
        value: 10,
        next: {
            value: 5,
            next: {
                value: 16,
                next: null
            }
        }
    }
};
*/

class Node {

    constructor(value) {
        this.value = value;
        this.next = null;
    }

}

class LinkedList {

    constructor(value) {
        this.head = new Node(value);
        this.tail = this.head;
        this.length = 1;
    }

    append(value) {
        const newNode = new Node(value);
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
    }

    prepend(value) {
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
    }

    insert(index, value) {
        //Check if index is greater than length of Linked List
        if (index > this.length)
            return this.append(value);
        const newNode = new Node(value);
        const preNode = this.traverseToIndex(index - 1);
        const postNode = preNode.next;
        preNode.next = newNode;
        newNode.next = postNode;
        this.length++;
    }

    remove(index) {
        //Check if index is greater than length of Linked List
        if (index > this.length)
            return "Index out of bounds";
        const preNode = this.traverseToIndex(index - 1);
        const unwantedNode = preNode.next;
        preNode.next = unwantedNode.next;
        this.length--;
    }

    traverseToIndex(index) {
        let counter = 0;
        let currentNode = this.head;
        while (counter !== index) {
            currentNode = currentNode.next;
            counter++;
        }
        return currentNode;
    }

    printList() {
        let array = [];
        let currentNode = this.head;
        while (currentNode !== null) {
            array.push(currentNode.value);
            currentNode = currentNode.next;
        }
        return array;
    }

}

//Instantiate LL with head as 10
const myLinkedList = new LinkedList(10);
console.log(myLinkedList);
//Append 5
myLinkedList.append(5);
console.log(myLinkedList);
//Append 16
myLinkedList.append(16);
console.log(myLinkedList);
//Prepend 1
myLinkedList.prepend(1);
console.log(myLinkedList);
//Insert 99 at index 200
myLinkedList.insert(200, 99);
console.log(myLinkedList);
//Insert 21 at index 2
myLinkedList.insert(2, 21);
console.log(myLinkedList);
//Print List
console.log("Linked List: " + myLinkedList.printList());
//Remove index 3
myLinkedList.remove(3);
console.log(myLinkedList);
//Print List
console.log("Linked List: " + myLinkedList.printList());
