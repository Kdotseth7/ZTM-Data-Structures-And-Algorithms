class Node {

    constructor(value) {
        this.value = value;
        this.next = null;
    }

}

class Circular_SinglyLinkedList {

    constructor(value) {
        this.head = new Node(value);
        this.head.next = this.head;
        this.tail = this.head;
        this.length = 1;
    }

    append(value) {
        const newNode = new Node(value);
        this.tail.next = newNode;
        this.tail = newNode;
        newNode.next = this.head;
        this.length++;
        return this.printList();
    }

    prepend(value) {
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
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
        const preNode = this.traverseToIndex(index - 1);
        const postNode = preNode.next;
        preNode.next = newNode;
        newNode.next = postNode;
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
        } else {
            const prevNode = this.traverseToIndex(index - 1);
            unwantedNode = prevNode.next;
            //If last node has to be removed then update tail
            if (index === this.length - 1) {
                prevNode.next = null;
                this.tail = prevNode;
                this.tail.next = this.head;
            } else {
                prevNode.next = unwantedNode.next;
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

//Instantiate LL with head as 10
const myLinkedList = new Circular_SinglyLinkedList(10);
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
//Remove index 4
console.log(myLinkedList.remove(3));
//Print LL
console.log(myLinkedList.printList());
