/* Link: https://www.youtube.com/watch?v=TO7trQloRXc&list=PL-Jc9J83PIiHYxUk8dSu2_G7MR1PaGXN4&index=33&ab_channel=Pepcoding
, https://www.youtube.com/watch?v=AvXVChZoZkU&list=PL-Jc9J83PIiHYxUk8dSu2_G7MR1PaGXN4&index=38&ab_channel=Pepcoding
*/

class Node {

    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }

}

class BinaryTree {

    constructor(value) {
        this.root = new Node(value);
    }

    createLeftClonedTree(node) {
        if (!node) {
            return null;
        }

        const lcr = this.createLeftClonedTree(node.left);
        const rcr = this.createLeftClonedTree(node.right);

        const newNode = new Node(node.value);
        newNode.left = lcr;
        node.left = newNode;
        node.right = rcr;

        return node;
    }

    transformBackFromLeftClonedTree(node) {
        if (!node)
            return null;

        const lnn = this.transformBackFromLeftClonedTree(node.left.left);
        const rnn = this.transformBackFromLeftClonedTree(node.right);

        node.left = lnn;
        node.right = rnn;

        return node;
    }

}

const myBT = new BinaryTree('a');
myBT.root.left = new Node('b');
myBT.root.left.left = new Node('d');
myBT.root.left.right = new Node('e');
myBT.root.right = new Node('c');
myBT.root.right.left = new Node('f');
myBT.root.right.right = new Node('g');
myBT.createLeftClonedTree(myBT.root);
console.log(myBT);
myBT.transformBackFromLeftClonedTree(myBT.root);
console.log(myBT);