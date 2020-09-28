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
    deleteMiddleNode() {
        const middleNodeIndex = Math.floor(this.length/2);
        const prevNode = this.traverseToIndex(middleNodeIndex - 1);
        const middleNode = prevNode.next;
        prevNode.next = middleNode.next;
        this.length--;
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
console.log(myLinkedList.append(5));
console.log(myLinkedList.append(9));
console.log(myLinkedList.prepend(2));
console.log(myLinkedList.prepend(8));
console.log(myLinkedList.insert(3, 6));
console.log(myLinkedList.insert(98, 0));
console.log(myLinkedList.remove(2));
console.log(myLinkedList.print());
console.log(myLinkedList.deleteMiddleNode());
console.log(myLinkedList.deleteMiddleNode());

// Using Floyd's slow and fast ptr's
const deleteMiddle = head => {
    let slow = head,
        fast = head;
    while (fast.next && fast.next.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    const prevNode = slow;
    const middleNode = slow.next;
    prevNode.next = middleNode.next;
    return head;
}

console.log(deleteMiddle(myLinkedList.head));

