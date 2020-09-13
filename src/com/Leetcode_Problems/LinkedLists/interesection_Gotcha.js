class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

const n1 = new Node(1);
const n2 = new Node(1);
console.log('same node?', n1 === n2);

const visited = new Set();
const n1a = new Node(1);
const n2a = new Node(1);
visited.add(n1a)
console.log('visited?', visited.has(n2a))