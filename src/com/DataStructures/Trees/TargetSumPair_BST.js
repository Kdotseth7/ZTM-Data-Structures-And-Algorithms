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

    //Use InOrder Traversal to find target sum pairs that too in increasing order
    targetSumPair(root, node, target, list) {
        if (!node)
            return;

        this.targetSumPair(root, node.left, target, list);

        /*Check whether complement matches with any node value starting
        from root(only if nodeVal < complement)
        */
        const complement = target - node.value;
        if (node.value < complement) {
            if (this.findPair(root, complement)) {
                list.push([node.value, complement]);
            }
        }

        this.targetSumPair(root, node.right, target, list);
        return list;
    }

    findPair(node, complement) {
        if (!node)
            return false;
        if (node.value > complement) {
            return this.findPair(node.left, complement);
        } else if (node.value < complement) {
            return this.findPair(node.right, complement);
        } else {
            return true;
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
console.log(myBST.targetSumPair(myBST.root, myBST.root, 100, []));


