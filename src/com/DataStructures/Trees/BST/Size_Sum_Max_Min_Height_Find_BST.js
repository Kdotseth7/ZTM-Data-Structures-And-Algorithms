//Link: https://www.youtube.com/watch?v=vKYXLYAWHA0&list=PL-Jc9J83PIiGl_-iS5k7R7SZoZPt0Fab2&index=4&ab_channel=Pepcoding

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
        this.sizeVar = 0;
        this.sumVar = 0;
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

    size(node) {
        if (!node)
            return;
        this.size(node.left);
        this.sizeVar += 1;
        this.size(node.right);
    }

    size_Sumeet(node) {
        if (!node)
            return 0;
        let leftSize = this.size_Sumeet(node.left);
        let rightSize = this.size_Sumeet(node.right);
        let totalSize = leftSize + rightSize + 1;
        return totalSize;
    }

    sum(node) {
        if (!node)
            return;
        this.sum(node.left);
        this.sumVar += node.value;
        this.sum(node.right);
    }

    sum_Sumeet(node) {
        if (!node)
            return 0;
        let leftSum = this.sum_Sumeet(node.left);
        let rightSum = this.sum_Sumeet(node.right);
        let totalSum = leftSum + rightSum + node.value;
        return totalSum;
    }

    max(node) {
        if (!node.right)
            return node.value;
        return this.max(node.right);
    }

    min(node) {
        if (!node.left)
            return node.value;
        return this.min(node.left);
    }

    height(node) {
        // Return -1 is height in terms of edges else return 0 if height in terms of nodes
        if (!node)
            return -1;
        let leftHeight = this.height(node.left);
        let rightHeight = this.height(node.right);
        let totalHeight = Math.max(leftHeight, rightHeight)
        return totalHeight + 1;
    }

    find(node, val) {
        if (!node)
            return false;
        if (node.value > val) {
            return this.find(node.left, val);
        } else if (node.value < val) {
            return this.find(node.right, val);
        } else {
            return node.value;
        }
    }

}

const myBST = new BinarySearchTree();
myBST.insert(50);
myBST.insert(25);
myBST.insert(75);
myBST.insert(12);
myBST.insert(37);
myBST.insert(62);
myBST.insert(30);
myBST.insert(40);
myBST.insert(60);
myBST.insert(70);
myBST.size(myBST.root);
console.log("Size:", myBST.sizeVar);
console.log("Size_Sumeet:", myBST.size_Sumeet(myBST.root));
myBST.sum(myBST.root);
console.log("Sum:", myBST.sumVar);
console.log("Sum_Sumeet:", myBST.sum_Sumeet(myBST.root));
console.log("Max:", myBST.max(myBST.root));
console.log("Min:", myBST.min(myBST.root));
console.log("Height:", myBST.height(myBST.root));
console.log("Find:", myBST.find(myBST.root, 60));


