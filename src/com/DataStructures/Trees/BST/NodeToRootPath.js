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

    nodeToRootPath(node, val, list) {
        if (!node)
            return false;
        list.push(node.value);
        if (node.value > val) {
            return this.nodeToRootPath(node.left, val, list);
        } else if (node.value < val) {
            return this.nodeToRootPath(node.right, val, list);
        } else {
            return list.reverse();
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
console.log(myBST.nodeToRootPath(myBST.root, 30, []));


