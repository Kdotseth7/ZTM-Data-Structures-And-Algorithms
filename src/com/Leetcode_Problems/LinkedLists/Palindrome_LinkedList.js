/*
Given a singly linked list, determine if it is a palindrome.

Example 1:
Input: 1->2
Output: false
Example 2:

Input: 1->2->2->1
Output: true

Follow up:
Could you do it in O(n) time and O(1) space?
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
    isPalindrome() { //TC: O(n^2), SC: O(1)
        let isPalindrome = true;
        let currentNode = this.head;
        let counter = this.length - 1;
        while (currentNode !== null) {
            let node = this.traverseToIndex(counter);
            if (currentNode.value === node.value) {
                //console.log(currentNode.value, node.value);
                currentNode = currentNode.next;
                counter--;
            } else {
                isPalindrome = false;
                break;
            }
        }
        return isPalindrome;
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
console.log(myLinkedList.append(2));
console.log(myLinkedList.append(1));
console.log(myLinkedList.isPalindrome());