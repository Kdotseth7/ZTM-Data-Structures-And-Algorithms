// Link: https://www.youtube.com/watch?v=VMJCFRWvb9Q&list=PL-Jc9J83PIiHYxUk8dSu2_G7MR1PaGXN4&index=41&ab_channel=Pepcoding

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

    printSingleChildNodes(node) {
        if (!node) {
            return;
        }

        this.printSingleChildNodes(node.left);
        this.printSingleChildNodes(node.right);

        if (node.left && !node.right) {
            console.log(node.left.value);
        } else if (!node.left && node.right) {
            console.log(node.right.value);
        }
    }

    printSingleChildNodes_Sumeet(node, parent) {
        if (!node) {
            return;
        }

        if (parent && parent.left === node && !parent.right) {
            console.log(node.value);
        } else if (parent && parent.right === node && !parent.left) {
            console.log(node.value);
        }

        this.printSingleChildNodes_Sumeet(node.left, node);
        this.printSingleChildNodes_Sumeet(node.right, node);
    }


}

const myBT = new BinaryTree(50);
myBT.root.left = new Node(25);
myBT.root.left.left = new Node(12);
myBT.root.left.right = new Node(37);
myBT.root.left.right.left = new Node(30);
myBT.root.right = new Node(75);
myBT.root.right.left = new Node(62);
myBT.root.right.left.left = new Node(60);
console.log("My version:");
myBT.printSingleChildNodes(myBT.root);
console.log("Sumeet's version:");
myBT.printSingleChildNodes_Sumeet(myBT.root, null);