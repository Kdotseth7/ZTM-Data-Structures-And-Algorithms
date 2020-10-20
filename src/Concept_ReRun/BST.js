class Node {
    constructor(value) {
        this.value = value
        this.left = null;
        this.right = null;
    }
}

class BST {
    constructor() {
        this.root = null;
    }
    lookup(value) {
        if (!this.root)
            return null;
        else {
            let currentNode = this.root;
            while (currentNode) {
                if (currentNode.value === value) //Match Found
                    return currentNode;
                else if (currentNode.value > value) //Left
                    currentNode = currentNode.left;
                else if (currentNode.value < value) //Right
                    currentNode = currentNode.right;
            }
        }
        return null;
    }
    insert(value) {
        const newNode = new Node(value);
        if (!this.root)
            this.root = newNode;
        else {
            let currentNode = this.root;
            while (true) {
                if (currentNode.value > newNode.value) {
                    if (!currentNode.left) {
                        currentNode.left = newNode; //Make Left child if no existing left child
                        return this;
                    }
                    else
                        currentNode = currentNode.left; //Move to next left child if left child exists
                } else if (currentNode.value < newNode.value) { //Right
                    if (!currentNode.right) {
                        currentNode.right = newNode; //Make right child if no existing right child
                        return this;
                    }
                    else
                        currentNode = currentNode.right; //Move to next child node if right child exists
                }
            }
        }
    }
    remove(value) {
        return this.removeRecursive(this.root, value);
    }
    removeRecursive(node, value) {
        if (!node)
            return null;
        if (node.value > value) //Left
            node.left = this.removeRecursive(node.left, value);
        else if (node.value < value) //Right
            node.right =  this.removeRecursive(node.right, value);
        else if (node.value === value) { //Match Found
            if (node.left && node.right) { //2 children
                const leftSubTreeMax = this.max(node.left);
                node.value = leftSubTreeMax;
                node.left = this.removeRecursive(node.left, leftSubTreeMax);
                return node;
            } else if (node.left && !node.right) { //Only left child
                return node.left;
            } else if (!node.left && node.right) { //Only right child
                return node.right;
            } else { //0 children
                return null;
            }
        }
        return node;
    }
    max(node) {
        if (node.right) {
            return this.max(node.right);
        } else {
            return node.value;
        }
    }
}

const newBST = new BST();
newBST.insert(40);
newBST.insert(30);
newBST.insert(80);
newBST.insert(20);
newBST.insert(48);
newBST.insert(45);
newBST.insert(70);
newBST.insert(60);
newBST.insert(75);
newBST.insert(55);
newBST.insert(90);
newBST.insert(98);
console.log(newBST.insert(101));
console.log(newBST.lookup(70));
console.log(newBST.lookup(100));
//Delete Node with No Child
console.log(newBST.remove(55));
//Delete Node with Only Left Child
console.log(newBST.remove(30));
//Delete Node with Only Right Child
console.log(newBST.remove(98));
//Delete Node with 2 children
console.log(newBST.remove(80));
