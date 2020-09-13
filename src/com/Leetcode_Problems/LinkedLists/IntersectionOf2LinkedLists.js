/*
Write a program to find the node at which the intersection of two singly linked lists begins.

For example, the following two linked lists:
A = ['a1, 'a2', 'c1', 'c2', 'c3']
B = ['b1, 'b2', 'b3', 'c1', 'c2', 'c3']
begin to intersect at node c1.

Example 1:
A = [4, 1, 8, 4, 5]
B = [5, 6, 1, 8, 4, 5]
Input: intersectVal = 8, listA = [4,1,8,4,5], listB = [5,6,1,8,4,5], skipA = 2, skipB = 3
Output: Reference of the node with value = 8
Input Explanation: The intersected node's value is 8 (note that this must not be 0 if the two lists intersect). From the head of A, it reads as [4,1,8,4,5]. From the head of B, it reads as [5,6,1,8,4,5]. There are 2 nodes before the intersected node in A; There are 3 nodes before the intersected node in B.

Example 2:
A = [1,9,1,2,4]
B = [3,2,4]
Input: intersectVal = 2, listA = [1,9,1,2,4], listB = [3,2,4], skipA = 3, skipB = 1
Output: Reference of the node with value = 2
Input Explanation: The intersected node's value is 2 (note that this must not be 0 if the two lists intersect). From the head of A, it reads as [1,9,1,2,4]. From the head of B, it reads as [3,2,4]. There are 3 nodes before the intersected node in A; There are 1 node before the intersected node in B.


Example 3:
A = [2,6,4]
B = [1,5]
Input: intersectVal = 0, listA = [2,6,4], listB = [1,5], skipA = 3, skipB = 2
Output: null
Input Explanation: From the head of A, it reads as [2,6,4]. From the head of B, it reads as [1,5]. Since the two lists do not intersect, intersectVal must be 0, while skipA and skipB can be arbitrary values.
Explanation: The two lists do not intersect, so return null.

Notes:
* If the two linked lists have no intersection at all, return null.
* The linked lists must retain their original structure after the function returns.
* You may assume there are no cycles anywhere in the entire linked structure.
* Each value on each linked list is in the range [1, 10^9].
* Your code should preferably run in O(n) time and use only O(1) memory.
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

const linkedList_1 = new LinkedList(1);
linkedList_1.append(9);
linkedList_1.append(1);
linkedList_1.append(2);
linkedList_1.append(4);
console.log(linkedList_1.print());

const linkedList_2 = new LinkedList(3);
linkedList_2.append(2);
linkedList_2.append(4);
console.log(linkedList_2.print());

const getIntersectionNode = (list1_Head, list2_Head) => { //TC: O(n), SC: O(n)
    const visited = new Set();
    while (list1_Head !== null) {
        visited.add(JSON.stringify(list1_Head)); //Because node references diff. memory space even if value is same
        list1_Head = list1_Head.next;
    }
    while (list2_Head !== null) {
        if (visited.has(JSON.stringify(list2_Head)))
            return list2_Head;
        list2_Head = list2_Head.next;
    }
    return null;
}

console.log("Intersection Node:", getIntersectionNode(linkedList_1.head, linkedList_2.head));