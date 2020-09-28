/*
Given a linked list, remove the n-th node from the end of list and return its head.

Example:
Given linked list: 1->2->3->4->5, and n = 2.

After removing the second node from the end, the linked list becomes 1->2->3->5.
Note:
Given n will always be valid.

Follow up:
Could you do this in one pass?
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
    removeNthFromEnd(n) {
        const nthFromEndIndex = this.length - n;
        const prevNode = this.traverseToIndex(nthFromEndIndex - 1);
        const nthFromEnd = prevNode.next;
        prevNode.next = nthFromEnd.next;
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
console.log(myLinkedList.append(2));
console.log(myLinkedList.append(3));
console.log(myLinkedList.append(4));
console.log(myLinkedList.append(5));
//console.log(myLinkedList.removeNthFromEnd(2));

const removeNthFromEndOfList = (head, n) => {
    if (!head) return null;
    let length = 0;
    let currentNode = head;
    while (currentNode !== null) {
        length++;
        currentNode = currentNode.next;
    }
    if (length === n) return head.next;
    let prevNode = head;
    let counter = 0;
    while (counter < length - n - 1) {
        counter++;
        prevNode = prevNode.next;
    }
    const unwantedNode = prevNode.next;
    prevNode.next = unwantedNode.next;
    return head;
}
//TC: O(n)
//SC: O(1)

//console.log(removeNthFromEndOfList(myLinkedList.head, 2));

const removeNthFromEnd_OnePass = (head, n) => {
    //Using dummyHead to handle the edge case when n == length
    let dummyHead = new Node(0);
    dummyHead.next = head;
    let slow = dummyHead;
    let fast = dummyHead;
    for (let i=1; i<=n+1; i++) {
        fast = fast.next;
    }
    while (fast != null) {
        slow = slow.next;
        fast = fast.next;
    }
    slow.next = slow.next.next;
    return dummyHead.next;
}
//TC: O(n)
//SC: O(1)

console.log(removeNthFromEnd_OnePass(myLinkedList.head, 2));