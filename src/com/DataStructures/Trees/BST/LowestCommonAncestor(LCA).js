//Link: https://www.youtube.com/watch?v=5E3MeajU9XQ&list=PL-Jc9J83PIiGl_-iS5k7R7SZoZPt0Fab2&index=12&ab_channel=Pepcoding

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

    lowestCommonAncestor(node, val1, val2) {
        if (val1 < node.value && val2 < node.value) {
            return this.lowestCommonAncestor(node.left, val1, val2);
        } else if (val1 > node.value && val2 > node.value) {
            return this.lowestCommonAncestor(node.right, val1, val2);
        } else {
            //Return node when values of node diverge
            return node;
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
myBST.insert(87);
myBST.insert(59);
myBST.insert(77);
console.log(myBST.lowestCommonAncestor(myBST.root, 59, 77));



