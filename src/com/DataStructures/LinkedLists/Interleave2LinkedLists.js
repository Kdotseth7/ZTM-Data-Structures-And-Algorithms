/*
List 1: 1 -> 2 -> 3 -> null
List 2: 4-> 5 -> 6 -> null
*/

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList1 {
    createLinkedList_ReturnHead() {
        let head_1 = new Node(1);
        let node_2 = new Node(2);
        let node_3 = new Node(3);
        head_1.next = node_2;
        node_2.next = node_3;
        node_3.next = null;
        return head_1;
    }
}

class LinkedList2 {
    createLinkedList_ReturnHead() {
        let head_4 = new Node(4);
        let node_5 = new Node(5);
        let node_6 = new Node(6);
        head_4.next = node_5;
        node_5.next = node_6;
        node_6.next = null;
        return head_4;
    }
}

const interleave = function(head1, head2) {
    let first = head1,
        second = head2;
    while (first && second) {
        let temp1 = first.next;
        let temp2 = second.next;
        if (first.next)
            second.next = first.next;
        first.next = second;
        first = temp1;
        second = temp2;
    }
    return head1;
}

const ll1 = new LinkedList1();
const ll2 = new LinkedList2();
console.log(interleave(ll1.createLinkedList_ReturnHead(), ll2.createLinkedList_ReturnHead()));
