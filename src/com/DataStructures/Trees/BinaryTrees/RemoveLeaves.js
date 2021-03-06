// Link: https://www.youtube.com/watch?v=x_0KUwgdm1c&list=PL-Jc9J83PIiHYxUk8dSu2_G7MR1PaGXN4&index=42&ab_channel=Pepcoding

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

    removeLeaves(node) {
        if (!node) {
            return null;
        }

        if (!node.left && !node.right) {
            return null;

         }

        node.left = this.removeLeaves(node.left);
        node.right = this.removeLeaves(node.right);

        return node;
    }

}

const myBT = new BinaryTree(50);
myBT.root.left = new Node(25);
myBT.root.left.left = new Node(12);
myBT.root.left.right = new Node(37);
myBT.root.left.right.left = new Node(30);
myBT.root.right = new Node(75);
myBT.root.right.left = new Node(62);
myBT.root.right.left.right = new Node(70);
myBT.root.right.right = new Node(87);
myBT.removeLeaves(myBT.root);
console.log(myBT);