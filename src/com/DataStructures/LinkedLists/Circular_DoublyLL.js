class Node {

    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }

}

class Circular_DoublyLinkedList {

    constructor(value) {
        this.head = new Node(value);
        this.head.next = this.head;
        this.head.prev = this.head;
        this.tail = this.head;
        this.length = 1;
    }

    append(value) {
        const newNode = new Node(value);
        this.tail.next = newNode;
        newNode.prev = this.tail;
        this.tail = newNode;
        newNode.next = this.head;
        this.head.prev = this.tail;
        this.length++;
        return this.printList();
    }

    prepend(value) {
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head.prev = newNode;
        this.head = newNode;
        this.head.prev = this.tail;
        this.tail.next = this.head;
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
        const prevNode = this.traverseToIndex(index - 1);
        const postNode = prevNode.next;
        prevNode.next = newNode;
        newNode.prev = prevNode;
        newNode.next = postNode;
        postNode.prev = newNode;
        this.length++;
        return this.printList();
    }

    remove(index) {
        //Check if index is greater than length of Linked List
        if (index >= this.length)
            return false;
        let unwantedNode;
        //If first node has to be removed then update head
        if (index === 0) {
            unwantedNode = this.head;
            this.head = unwantedNode.next;
            this.head.prev = this.tail;
            this.tail.next = this.head;
        } else {
            const prevNode = this.traverseToIndex(index - 1);
            unwantedNode = prevNode.next;
            //If last node has to be removed then update tail
            if (index === this.length - 1) {
                prevNode.next = this.head;
                this.tail = prevNode;
                this.head.prev = this.tail;
            } else {
                const postNode = unwantedNode.next;
                prevNode.next = postNode;
                postNode.prev = prevNode;
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

    printList() {
        let array = [this.head.value];
        let currentNode = this.head.next;
        while (currentNode.value !== this.head.value) {
            array.push(currentNode.value);
            currentNode = currentNode.next;
        }
        return array;
    }

}

//Instantiate DLL with head as 10
const myLinkedList = new Circular_DoublyLinkedList(10);
console.log(myLinkedList.append(8));
console.log(myLinkedList.append(7));
console.log(myLinkedList.append(66));
console.log(myLinkedList.prepend(4));
console.log(myLinkedList.prepend(6));
console.log(myLinkedList.insert(200, 98));
console.log(myLinkedList.insert(1, 22));
console.log(myLinkedList.remove(2));
console.log(myLinkedList.remove(0));
console.log(myLinkedList.remove(5));
console.log(myLinkedList.printList());
