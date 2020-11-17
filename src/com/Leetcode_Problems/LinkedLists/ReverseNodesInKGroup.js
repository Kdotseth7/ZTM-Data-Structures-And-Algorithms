/*
Given a linked list, reverse the nodes of a linked list k at a time and return its modified list.
k is a positive integer and is less than or equal to the length of the linked list. If the number
of nodes is not a multiple of k then left-out nodes, in the end, should remain as it is.

Follow up:
Could you solve the problem in O(1) extra memory space?
You may not alter the values in the list's nodes, only nodes itself may be changed.

Example 1:
Input: head = [1,2,3,4,5], k = 2
Output: [2,1,4,3,5]

Example 2:
Input: head = [1,2,3,4,5], k = 3
Output: [3,2,1,4,5]

Example 3:
Input: head = [1,2,3,4,5], k = 1
Output: [1,2,3,4,5]

Example 4:
Input: head = [1], k = 1
Output: [1]

Constraints:
The number of nodes in the list is in the range sz.
1 <= sz <= 5000
0 <= Node.val <= 1000
1 <= k <= sz
*/


class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {

    constructor() {
        this.head = this.tail = null;
        this.length = 0;
    }

    append(value) {
        if (!this.length)
            this.addFirst(value);
        else {
            const newNode = new Node(value);
            this.tail.next = newNode;
            this.tail = newNode;
            this.length++;
            return this;
        }
    }

    addFirst(value) {
        if (!this.length) {
            this.head = this.tail = new Node(value);
        } else {
            const newNode = new Node(value);
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }

    removeFirst() {
        if (!this.length)
            return null;
        else {
            const unwantedNode = this.head;
            this.head = unwantedNode.next;
            unwantedNode.next = null;
            this.length--;
            return unwantedNode;
        }
    }
    
}

const reverseKGroup = function(linkedList, k) {
    let prev = null;
    while (linkedList.length > 0) {
        let curr = new LinkedList(null);
        let removedNode;
        if (linkedList.length >= k) {
            for (let i=0; i<k; i++) {
                removedNode = linkedList.removeFirst();
                curr.addFirst(removedNode.value);
            }
        } else {
            const originalSize = linkedList.length;
            for (let i=0; i<originalSize; i++) {
                removedNode = linkedList.removeFirst();
                curr.append(removedNode.value);
            }
        }
        if (!prev) {
            prev = curr;
        } else {
            prev.tail.next = curr.head;
            prev.tail = curr.tail;
            prev.length += curr.length;
        }
    }
    linkedList.head = prev.head;
    linkedList.tail = prev.tail;
    linkedList.length = prev.length;
    return linkedList;
};

const linkedList = new LinkedList();
linkedList.append(1);
linkedList.append(2);
linkedList.append(3);
linkedList.append(4);
linkedList.append(5);
linkedList.append(6);
linkedList.append(7);
linkedList.append(8);
linkedList.append(9);
linkedList.append(10);
linkedList.append(11);
console.log(reverseKGroup(linkedList, 3));