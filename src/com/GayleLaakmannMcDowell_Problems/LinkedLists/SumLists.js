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

const linkedList_1 = new LinkedList(7);
linkedList_1.append(1);
linkedList_1.append(6);
console.log(linkedList_1.print());

const linkedList_2 = new LinkedList(5);
linkedList_2.append(9);
linkedList_2.append(2);
console.log(linkedList_2.print());

const linkedList_3 = new LinkedList(6);
linkedList_3.append(1);
linkedList_3.append(7);
console.log(linkedList_3.print());

const linkedList_4 = new LinkedList(2);
linkedList_4.append(9);
linkedList_4.append(5);
console.log(linkedList_4.print());

const sumLists = (linkedList_1, linkedList_2) => { //TC: O(n), SC: O(n)
    let list1 = linkedList_1.print();
    list1 = reverse(list1);
    let list2 = linkedList_2.print();
    list2 = reverse(list2);
    let sumList = parseInt(list1.join('')) + parseInt(list2.join(''));
    sumList = reverse(sumList.toString().split('').map(Number));
    const sumLinkedList = new LinkedList(sumList[0]);
    for (let i=1; i<sumList.length; i++) {
        sumLinkedList.append(sumList[i]);
    }
    return sumLinkedList;
}

const sumLists_ForwardOrder = (linkedList_1, linkedList_2) => { //TC: O(n), SC: O(n)
    let list1 = linkedList_1.print();
    let list2 = linkedList_2.print();
    let forwardList = parseInt(list1.join('')) + parseInt(list2.join(''));
    forwardList = forwardList.toString().split('').map(Number);
    const forwardLinkedList = new LinkedList(forwardList[0]);
    for (let i=1; i<forwardList.length; i++) {
        forwardLinkedList.append(forwardList[i]);
    }
    return forwardLinkedList;
}

const reverse = list => { //O(n)
    const length = list.length;
    let j = length - 1;
    for (let i=0; i<length/2; i++) {
        let temp;
        temp = list[i];
        list[i] = list[j];
        list[j] = temp;
        j--;
    }
    return list;
}

console.log(sumLists(linkedList_1, linkedList_2));
console.log(sumLists_ForwardOrder(linkedList_3, linkedList_4));