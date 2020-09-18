/*
LINKED LIST CYCLE => LEETCODE / LOOP DETECTION => GAYLE LAAKMANN

Given head, the head of a linked list, determine if the linked list has a cycle in it.
There is a cycle in a linked list if there is some node in the list that can be reached again
by continuously following the next pointer. Internally, pos is used to denote the index of the
node that tail's next pointer is connected to. Note that pos is not passed as a parameter.

Return true if there is a cycle in the linked list. Otherwise, return false.

Follow up:
Can you solve it using O(1) (i.e. constant) memory?

Example 1: 3 -> 2 -> 0 -> -4 -> 2
Input: head = [3,2,0,-4], pos = 1
Output: true
Explanation: There is a cycle in the linked list, where the tail connects to the 1st node (0-indexed).

Example 2: 1 -> 2 -> 1
Input: head = [1,2], pos = 0
Output: true
Explanation: There is a cycle in the linked list, where the tail connects to the 0th node.

Example 3: 1
Input: head = [1], pos = -1
Output: false
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
        let node_1 = new Node(1);
        head_3.next = node_2;
        node_2.next = node_0;
        node_0.next = node_Minus4;
        node_Minus4.next = node_1;
        node_1.next = node_2;
        return head_3;
/*        let head_1 = new Node(1);
        let node_2 = new Node(2);
        head_1.next = node_2;
        node_2.next = head_1;
        return head_1;*/
    }
}

const hasCycle = function(head) {
    if (!head)
        return false;
    let currentNode = head;
    const visited = new Set();
    while (currentNode) {
        if (visited.has(currentNode))
            return true;
        else {
            visited.add(currentNode);
            currentNode = currentNode.next;
        }
    }
    return false;
};
//TC: O(n)
//SC: O(n)

const linkedList = new LinkedList();
console.log(hasCycle(linkedList.createLinkedList_ReturnHead()));

const hasCycle_O1 = function(head) {
    /*
    Floyd's Slow and Fast Pointer Approach [Hare(fast) and Tortoise(slow) Solution] -->
    Use a slow and fast pointer to traverse the linked list. There exists a cycle if the
    pointers eventually run into each other.
    */
    let slow = head,
        fast = head;
    // fast !== null will terminate the loop in case linked list doesn't have a cycle and is "even" in length
    // fast.next !== null will terminate the loop in case linked list doesn't have a cycle and is "odd" in length
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
        if (slow === fast)
            return true;
    }
    return false;
};
//TC: O(n)
//SC: O(1)

console.log(hasCycle_O1(linkedList.createLinkedList_ReturnHead()));