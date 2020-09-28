class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    createLinkedList_ReturnHead() {
        let head_3 = new Node(3);
        let node_2 = new Node(2);
        let node_0 = new Node(0);
        let node_Minus4 = new Node(-4);
        head_3.next = node_2;
        node_2.next = node_0;
        node_0.next = node_Minus4;
        node_Minus4.next = node_2;
        return head_3;
        /*        let head_1 = new Node(1);
                let node_2 = new Node(2);
                head_1.next = node_2;
                node_2.next = head_1;
                return head_1;*/
    }
}

const meetingNode = function (head) {
    let slow = head,
        fast = head;
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
        if (slow === fast) {
            return slow;
        }
    }
    return false;
}

const removeCycle = function(head) {
    if (!head || !head.next)
        return null;
    let startingPt = head;
    let meetingPt = meetingNode(head);
    let currentNode;
    /* Starting Point of Loop = If we start a ptr from head and a ptr from meeting point, they eventually
     meet a the starting point of the loop
     */
    if (meetingPt !== false) {
        while (startingPt !== meetingPt) {
            startingPt = startingPt.next;
            meetingPt = meetingPt.next;
        }
        /*
        Loop until current.next = startingPt, i.e., node just before startingPt is found and assign
        current.next = null
        */
        currentNode = startingPt;
        while (currentNode.next !== startingPt) {
            currentNode = currentNode.next;
        }
        currentNode.next = null;
        return head;
    } else return null;
};
//TC: O(n)
//SC: O(1)

const linkedList = new LinkedList();
console.log(removeCycle(linkedList.createLinkedList_ReturnHead()));