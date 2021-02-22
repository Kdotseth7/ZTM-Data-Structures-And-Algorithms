//Link: https://www.youtube.com/watch?v=NEJUsqEFOI4&list=PL-Jc9J83PIiGl_-iS5k7R7SZoZPt0Fab2&index=14

class BSTNode {

    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }

}

class BinarySearchTree {

    constructor() {
        this.root = null;
        this.list = [];
        this.opList = [];
    }

    insert(value) {
        const newNode = new BSTNode(value);
        if (this.root === null) {
            this.root = newNode;
            return this;
        }
        else {
            let currentNode = this.root;
            //Whenever we use true in while loop, always have an exit condition otherwise it will be an infinite loop
            while (true) {
                if (newNode.value < currentNode.value) { //LEFT
                    if (!currentNode.left) {
                        currentNode.left = newNode;
                        return this;
                    }
                    currentNode = currentNode.left;
                }
                else { //RIGHT
                    if (!currentNode.right) {
                        currentNode.right = newNode;
                        return this;
                    }
                    currentNode = currentNode.right;
                }
            }
        }
    }

    //Utilizing InOrder(as it prints in increasing order) Traversal of a Tree
    printInRange(node, lBound, uBound) {
        if (!node)
            return;
        this.printInRange(node.left, lBound, uBound);
        if (lBound <= node.value && node.value <= uBound)
            this.list.push(node.value);
        this.printInRange(node.right, lBound, uBound);
    }

    printInRange_Optimized(node, lBound, uBound) {
        if (!node)
            return;
        if (node.value >= lBound && node.value >= uBound)
            this.printInRange_Optimized(node.left, lBound, uBound);
        else if (node.value <= lBound && node.value <= uBound)
            this.printInRange_Optimized(node.right, lBound, uBound);
        else {
            this.printInRange_Optimized(node.left, lBound, uBound);
            this.opList.push(node.value);
            this.printInRange_Optimized(node.right, lBound, uBound);
        }
    }

}

const myBST = new BinarySearchTree();
myBST.insert(50);
myBST.insert(25);
myBST.insert(75);
myBST.insert(12);
myBST.insert(37);
myBST.insert(30);
myBST.insert(40);
myBST.insert(62);
myBST.insert(87);
myBST.insert(60);
myBST.insert(70);
myBST.printInRange(myBST.root, 27, 72);
console.log(myBST.list);
myBST.printInRange_Optimized(myBST.root, 27, 72);
console.log(myBST.opList);