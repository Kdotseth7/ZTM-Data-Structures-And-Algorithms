/*
LINKED LIST CYCLE II => LEETCODE

Given a linked list, return the node where the cycle begins. If there is no cycle, return null.
There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter.
Notice that you should not modify the linked list.

Follow up:
Can you solve it using O(1) (i.e. constant) memory?

Example 1: 3 -> 2 -> 0 -> -4 -> 2
Input: head = [3,2,0,-4], pos = 1
Output: tail connects to node index 1
Explanation: There is a cycle in the linked list, where tail connects to the second node.

Example 2: 1 -> 2 -> 1
Input: head = [1,2], pos = 0
Output: tail connects to node index 0
Explanation: There is a cycle in the linked list, where tail connects to the first node.

Example 3: 1
Input: head = [1], pos = -1
Output: no cycle
Explanation: There is no cycle in the linked list.

Constraints:
The number of the nodes in the list is in the range [0, 104].
-105 <= Node.val <= 105
pos is -1 or a valid index in the linked-list.
*/

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

const detectCycle = function(head) {
    if (!head || !head.next)
        return null;
    let startingPt = head;
    let meetingPt = meetingNode(head);
    /* Starting Point of Loop = If we start a ptr from head and a ptr from meeting point, they eventually
     meet a the starting point of the loop
     */
    if (meetingPt !== false) {
        while (startingPt !== meetingPt) {
            startingPt = startingPt.next;
            meetingPt = meetingPt.next;
        }
        return startingPt;
    } else {
        return null;
    }
};
//TC: O(n)
//SC: O(1)

const linkedList = new LinkedList();
console.log(detectCycle(linkedList.createLinkedList_ReturnHead()));