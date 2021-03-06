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
    prepend(value) {
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
        return this.print();
    }
    traverseToIndex(index) {
        let counter = 0;
        let currentNode = this.head;
        while (counter !== index) {
            currentNode = currentNode.next;
            counter++;
        }
        return currentNode;
    }
    insert(index, value) {
        if (index === 0) return this.prepend(value);
        if (index > this.length) return this.append(value);
        const newNode = new Node(value);
        const prevNode = this.traverseToIndex(index - 1);
        const postNode = prevNode.next;
        prevNode.next = newNode;
        newNode.next = postNode;
        this.length++;
        return this.print();
    }
    remove(index) {
        if (index > this.length)
            return false;
        const prevNode = this.traverseToIndex(index - 1);
        const unwantedNode = prevNode.next;
        prevNode.next = unwantedNode.next;
        this.length--;
        return unwantedNode;
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
linkedList_1.append(3);
linkedList_1.append(4);
linkedList_1.append(6);
console.log(linkedList_1.print());

const linkedList_2 = new LinkedList(2);
linkedList_2.append(4);
linkedList_2.append(6);
linkedList_2.append(8);
console.log(linkedList_2.print());

const union = () => {
    // Find Union Nodes
    const set = new Set();
    let currentNode_LL1 = linkedList_1.head;
    while (currentNode_LL1 !== null) {
        if (!set.has(currentNode_LL1.value))
            set.add(currentNode_LL1.value);
        currentNode_LL1 = currentNode_LL1.next;
    }
    let currentNode_LL2 = linkedList_2.head;
    while (currentNode_LL2 !== null) {
        if (!set.has(currentNode_LL2.value))
            set.add(currentNode_LL2.value);
        currentNode_LL2 = currentNode_LL2.next;
    }
    // Create Union List
    const setValues = set.values();
    const unionList = new LinkedList(setValues.next().value);
    let currentNode_UL = unionList.head;
    for (let val of setValues) {
        const newNode = new Node(val);
        currentNode_UL.next = newNode;
        currentNode_UL = newNode;
    }
    unionList.tail = currentNode_LL1;
    return unionList.print();
}

console.log("Union: ", union());

const intersection = () => {
    // Find Intersection Nodes
    let intersectionValues = [];
    let currentNode_List1 = linkedList_1.head;
    while (currentNode_List1 !== null) {
        let currentNode_List2 = linkedList_2.head;
        while (currentNode_List2 !== null) {
            if (currentNode_List1.value === currentNode_List2.value) {
                intersectionValues.push(currentNode_List1.value);
                break;
            } else {
                currentNode_List2 = currentNode_List2.next;
            }
        }
        currentNode_List1 = currentNode_List1.next;
    }
    // Create Intersection List
    const intersectionList = new LinkedList(intersectionValues[0]);
    let currentNode_IL = intersectionList.head;
    for (let i=1; i<intersectionValues.length; i++) {
        const newNode = new Node(intersectionValues[i]);
        currentNode_IL.next = newNode;
        currentNode_IL = newNode;
    }
    intersectionList.tail = currentNode_IL;
    return intersectionList.print();
}

console.log("Intersection:", intersection());