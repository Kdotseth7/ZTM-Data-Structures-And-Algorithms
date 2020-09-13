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
        return this.print();
    }
    prepend(value) {
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
        return this.print();
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
    insert(index, value) {
        if (index === 0) return this.prepend(value);
        if (index > this.length) return this.append(value);
        const newNode = new Node(value);
        const prevNode = this.traverseToIndex(index - 1);
        const postNode = prevNode.next;
        prevNode.next = newNode;
        newNode.next = postNode;
        this.length++;
        return this.print();
    }
    remove(index) {
        if (index > this.length)
            return false;
        const prevNode = this.traverseToIndex(index - 1);
        const unwantedNode = prevNode.next;
        prevNode.next = unwantedNode.next;
        this.length--;
        return unwantedNode;
    }
    removeDups_SortedList() { //TC: O(n), SC: O(1)
        let currentNode = this.head;
        let nextNode = currentNode.next;
        while (nextNode !== null) {
            if (currentNode.value === nextNode.value) {
                nextNode = nextNode.next;
                currentNode.next = nextNode;
            } else {
                currentNode = nextNode;
                nextNode = nextNode.next;
            }
        }
        return this.print();
    }
    print() {
        let printList = [];
        let currentNode = this.head;
        while (currentNode !== null) {
            printList.push(currentNode.value);
            currentNode = currentNode.next;
        }
        return printList;
    }
}

const myLinkedList = new LinkedList(1);
console.log(myLinkedList.append(1));
console.log(myLinkedList.append(1));
console.log(myLinkedList.append(2));
console.log(myLinkedList.append(2));
console.log(myLinkedList.append(2));
console.log(myLinkedList.append(2));
console.log(myLinkedList.append(2));
console.log(myLinkedList.append(3));
console.log(myLinkedList.append(3));
console.log(myLinkedList.append(3));
console.log(myLinkedList.append(4));
console.log(myLinkedList.append(5));
console.log(myLinkedList.append(5));
console.log(myLinkedList.removeDups_SortedList());