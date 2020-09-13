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
    //SC: O(n)
    //TC: O(n)
    removeDups_UnsortedList_TempBuffer() {
        let counter = 0;
        const list = new Set();
        let currentNode = this.head;
        while (currentNode !== null) {
            if (list.has(currentNode.value)) {
                const prevNode = this.traverseToIndex(counter - 1);
                const unwantedNode = prevNode.next;
                prevNode.next = unwantedNode.next;
                currentNode = prevNode.next;
                this.length--;
            } else {
                list.add(currentNode.value);
                currentNode = currentNode.next;
                counter++;
            }
        }
        return this.print();
    }
    //SC: O(1)
    //TC: O(n^3)
    removeDups_UnsortedList() {
        let currentNode = this.head;
        while (currentNode !== null) {
            let counter = 0;
            let node = currentNode.next;
            while (node !== null) {
                if (currentNode.value === node.value) {
                    const prevNode = this.traverseToIndex(counter - 1);
                    const unwantedNode = prevNode.next;
                    prevNode.next = unwantedNode.next;
                    this.length--;
                }
                else {
                    node = node.next;
                    counter++;
                }
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
console.log(myLinkedList.append(2));
console.log(myLinkedList.append(3));
console.log(myLinkedList.append(1));
console.log(myLinkedList.append(2));
console.log(myLinkedList.append(2));
console.log(myLinkedList.append(3));
console.log(myLinkedList.append(3));
console.log(myLinkedList.append(3));
console.log(myLinkedList.append(3));
console.log(myLinkedList.append(3));
console.log(myLinkedList.append(2));
console.log(myLinkedList.append(2));
console.log(myLinkedList.append(1));
console.log(myLinkedList.removeDups_UnsortedList_TempBuffer());
console.log(myLinkedList.removeDups_UnsortedList());