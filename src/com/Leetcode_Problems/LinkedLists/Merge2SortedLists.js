/*
Merge two sorted linked lists and return it as a new sorted list. The new list should be made by splicing together the nodes of the first two lists.

Example:
Input: 1->2->4, 1->3->4
Output: 1->1->2->3->4->4
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
linkedList_1.append(2);
linkedList_1.append(4);
console.log(linkedList_1.print());

const linkedList_2 = new LinkedList(1);
linkedList_2.append(3);
linkedList_2.append(4);
console.log(linkedList_2.print());

const mergeTwoLists = function(list1, list2) { //TC: O(n), SC: O(n)
    let mergedList;
    let currentNode_List1 = list1.head;
    let currentNode_List2 = list2.head;
    if (currentNode_List1 <= currentNode_List2) {
        mergedList = new LinkedList(currentNode_List1.value);
        currentNode_List1 = currentNode_List1.next;
    } else {
        mergedList = new LinkedList(currentNode_List2.value);
        currentNode_List2 = currentNode_List2.next;
    }
    while (currentNode_List1 !== null || currentNode_List2 !== null) {
        // If end of list1 is reached
        if (!currentNode_List1) {
            mergedList.append(currentNode_List2.value);
            currentNode_List2 = currentNode_List2.next;
            continue;
        }
        // If end of list2 is reached
        if (!currentNode_List2) {
            mergedList.append(currentNode_List1.value);
            currentNode_List2 = currentNode_List1.next;
            continue;
        }
        if (currentNode_List1.value <= currentNode_List2.value) {
            mergedList.append(currentNode_List1.value);
            currentNode_List1 = currentNode_List1.next;
        } else {
            mergedList.append(currentNode_List2.value);
            currentNode_List2 = currentNode_List2.next;
        }
    }
    return mergedList;
};

console.log(mergeTwoLists(linkedList_1, linkedList_2));
