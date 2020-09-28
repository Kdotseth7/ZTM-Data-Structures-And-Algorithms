/*
Given a singly linked list L: L0 → L1 → ………… → Ln-1 → Ln
,reorder it to: L0 → Ln → L1 → Ln-1 → L2 → Ln-2 → …………

You may not modify the values in the list's nodes, only nodes itself may be changed.

Example 1:
Given 1->2->3->4, reorder it to 1->4->2->3.

Example 2:
Given 1->2->3->4->5, reorder it to 1->5->2->4->3.
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
        let node_6 = new Node(6);
        head_1.next = node_2;
        node_2.next = node_3;
        node_3.next = node_4;
        node_4.next = node_5;
        node_5.next = node_6;
        node_6.next = null;
        return head_1;
    }
}

const reorderList = function(head) {
    // Nothing need to be done in case list is either empty or contains only one or two nodes
    if (!head || !head.next || !head.next.next)
        return head;

    // Step-1: Reach middle of list using slow and fast ptr
    let middle = reachMiddle(head);
    let secondHalf = middle.next;
    // Break the List
    middle.next = null;

    // Step-2: Reverse the Second Half
    secondHalf = reverseList(secondHalf);

    // Step-3: Interleave first half with second half
    let first = head,
        second = secondHalf;
    while (first && second) {
        let temp1 = first.next;
        let temp2 = second.next;
        if (first.next)
            second.next = first.next;
        first.next = second;
        first = temp1;
        second = temp2;
    }
    return head;
};

const reachMiddle = head => {
    let slow = head,
        fast = head;
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    return slow;
}

const reverseList = function(head) {
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

const linkedList = new LinkedList();
console.log(reorderList(linkedList.createLinkedList_ReturnHead()));