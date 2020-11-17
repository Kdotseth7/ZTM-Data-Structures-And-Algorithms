//Link: https://www.youtube.com/watch?v=KvcfuGcdDMg&list=PL-Jc9J83PIiHYxUk8dSu2_G7MR1PaGXN4&index=23&ab_channel=Pepcoding

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

    printKLevelsDown(node, level, k) {
        if (!node || level > k)
            return;
        if (level === k) {
            this.list.push(node.value);
        }
        this.printKLevelsDown(node.left, level + 1, k);
        this.printKLevelsDown(node.right, level + 1, k)
    }

    printKLevelsDown_Sumeet(node, k) {
        if (!node || k < 0)
            return;
        if (k===0)
            console.log(node.value);
        this.printKLevelsDown_Sumeet(node.left, k-1);
        this.printKLevelsDown_Sumeet(node.right, k-1);
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
myBST.insert(87);
myBST.printKLevelsDown(myBST.root, 0, 2);
console.log(myBST.list);
console.log(myBST.printKLevelsDown_Sumeet(myBST.root, 2));

