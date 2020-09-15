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
        return this.printList();
    }

    prepend(value) {
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
        return this.printList();
    }

    insert(index, value) {
        //Check if index is 0
        if (index === 0)
            return this.prepend(value);
        //Check if index is greater than length of Linked List
        if (index > this.length)
            return this.append(value);
        const newNode = new Node(value);
        const preNode = this.traverseToIndex(index - 1);
        const postNode = preNode.next;
        preNode.next = newNode;
        newNode.next = postNode;
        this.length++;
        return this.printList();
    }

    remove(index) {
        //Check if index is greater than length of Linked List
        if (index > this.length)
            return false;
        let unwantedNode;
        //If first node has to be removed than update head
        if (index === 0) {
            unwantedNode = this.head;
            this.head = unwantedNode.next;
        } else {
            const preNode = this.traverseToIndex(index - 1);
            unwantedNode = preNode.next;
            //If last node has to be removed than update tail
            if (index === this.length - 1) {
                preNode.next = null;
                this.tail = preNode;
            } else {
                preNode.next = unwantedNode.next;
            }
        }
        this.length--;
        return unwantedNode;
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
    /*1 -> 10 -> 88 -> 16 -> 4*/
    reverse() {
        if (!this.head.next)
            return this.head;
        let first = this.head;
        let second = first.next;
        while (second) {
            const temp = second.next;
            second.next = first;
            first = second;
            second = temp;
        }
        this.head.next = null;
        this.tail = this.head;
        this.head = first;
        return this.printList;
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
//Append 5
console.log(myLinkedList.append(5));
//Append 16
console.log(myLinkedList.append(16));
//Prepend 1
console.log(myLinkedList.prepend(1));
//Insert 99 at index 200
console.log(myLinkedList.insert(200, 99));
//Insert 21 at index 2
console.log(myLinkedList.insert(2, 21));
//Remove index 3
console.log(myLinkedList.remove(3));
//Remove index 0
console.log(myLinkedList.remove(0));
//Print List
console.log(myLinkedList.printList());
//Reverse and print LL
myLinkedList.reverse();
console.log(myLinkedList.printList());
