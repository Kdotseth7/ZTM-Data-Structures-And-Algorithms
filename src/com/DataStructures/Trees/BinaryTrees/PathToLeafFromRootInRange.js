//Link: https://www.youtube.com/watch?v=A6Z5YvsrDtg&list=PL-Jc9J83PIiHYxUk8dSu2_G7MR1PaGXN4&index=29&ab_channel=Pepcoding

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

    pathToLeafFromRootInRange(node, low, high, path, sum) {
        if (!node) {
            return true;
        }
        path += " " + node.value;
        const left = this.pathToLeafFromRootInRange(node.left, low, high, path, sum + node.value);
        const right = this.pathToLeafFromRootInRange(node.right, low, high, path, sum + node.value);
        // If node is a leaf both left and right children should be null
        if (left && right) {
            if (low <= sum && sum <= high) {
                console.log(path);
            }
            return false;
        }
    }

}

const myBT = new BinaryTree(50);
myBT.root.left = new Node(25);
myBT.root.left.left = new Node(12);
myBT.root.left.right = new Node(37);
myBT.root.left.right.left = new Node(30);
myBT.root.left.right.right = new Node(40);
myBT.root.right = new Node(75);
myBT.root.right.left = new Node(62);
myBT.root.right.left.left = new Node(60);
myBT.root.right.left.right = new Node(70);
myBT.root.right.right = new Node(87);
myBT.pathToLeafFromRootInRange(myBT.root, 12, 120, "", 0);