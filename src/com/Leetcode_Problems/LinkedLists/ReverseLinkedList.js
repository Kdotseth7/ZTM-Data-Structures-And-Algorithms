/*
Reverse a singly linked list.

Example:
Input: 1->2->3->4->5->NULL
Output: 5->4->3->2->1->NULL

Follow up:
A linked list can be reversed either iteratively or recursively. Could you implement both?
*/


class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    createLinkedList_ReturnHead() {
        let head_1 = new Node(1);
        let node_2 = new Node(2);
        let node_3 = new Node(3);
        let node_4 = new Node(4);
        let node_5 = new Node(5);
        head_1.next = node_2;
        node_2.next = node_3;
        node_3.next = node_4;
        node_4.next = node_5;
        node_5.next = null;
        return head_1;
    }
}

const reverseList = function(head) {
    if (!head) return null;
    if (!head.next) return head;
    let first = head;
    let second = first.next;
    while (second) {
        const temp = second.next;
        second.next = first;
        first = second;
        second = temp;
    }
    head.next = null;
    //tail = this.head;
    head = first;
    return head;
};
//TC: O(n)
//SC: O(1)

const linkedList = new LinkedList();
console.log(reverseList(linkedList.createLinkedList_ReturnHead()));

/*Link: https://www.youtube.com/watch?v=O0By4Zq0OFc&t=363s&ab_channel=BackToBackSWE*/
const reverseListRecursive = function(head) {
    if (!head || !head.next) return head;
    let reversedListHead = reverseListRecursive(head.next);
    head.next.next = head;
    head.next = null;
    return reversedListHead;
}

console.log(reverseListRecursive(linkedList.createLinkedList_ReturnHead()));