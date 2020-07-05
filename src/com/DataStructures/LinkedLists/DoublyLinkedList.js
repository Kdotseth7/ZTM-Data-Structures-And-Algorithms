class Node {

    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }

}

class DoublyLinkedList {

    constructor(value) {
        this.head = new Node(value);
        this.tail = this.head;
        this.length = 1;
    }

    append(value) {
        const newNode = new Node(value);
        this.tail.next = newNode;
        newNode.prev = this.tail;
        this.tail = newNode;
        this.length++;
        return this.printList();
    }

    prepend(value) {
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head.prev = newNode;
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
        const leader = this.traverseToIndex(index - 1);
        const postNode = leader.next;
        leader.next = newNode;
        newNode.prev = leader;
        newNode.next = postNode;
        this.length++;
        return this.printList();
    }

    remove(index) {
        //Check if index is greater than length of Linked List
        if (index > this.length)
            return "Index out of bounds";
        const leader = this.traverseToIndex(index - 1);
        const unwantedNode = leader.next;
        const postNode = unwantedNode.next;
        leader.next = postNode;
        postNode.prev = leader;
        this.length--;
        return this.printList();
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

//Instantiate DLL with head as 10
const myLinkedList = new DoublyLinkedList(10);
//Append 8
console.log(myLinkedList.append(8));
//Prepend 4
console.log(myLinkedList.prepend(4));
//Insert 98 at index 200
console.log(myLinkedList.insert(200, 98));
//Insert 22 at index 1
console.log(myLinkedList.insert(1, 22));
//Remove index 2
console.log(myLinkedList.remove(2));
console.log(myLinkedList);
