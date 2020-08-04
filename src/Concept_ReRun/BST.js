class Node {

    constructor(value) {
        this.value = value;
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
            return false;
        let currentNode = this.root;
        while (currentNode !== null) {
            if (currentNode.value === value)
                return currentNode;
            //LEFT
            else if (currentNode.value > value)
                currentNode = currentNode.left;
            //RIGHT
            else if (currentNode.value < value)
                currentNode = currentNode.right;
        }
        //Value not Found
        return false;
    }

    insert(value) {
        const newNode = new Node(value);
        if (!this.root) {
            this.root = newNode;
            return this;
        } else {
            let currentNode = this.root;
            while(true) {
                //LEFT
                if (currentNode.value > value) {
                    if(!currentNode.left) {
                        currentNode.left = newNode;
                        return this;
                    }
                    currentNode = currentNode.left;
                }
                //RIGHT
                else {
                    if (!currentNode.right) {
                        currentNode.right = newNode;
                        return this;
                    }
                    currentNode = currentNode.right;
                }
            }
        }
    }

    remove(value) {
        //code
    }

}

const bst = new BST();
console.log(bst.insert(33));
console.log(bst.insert(22));
console.log(bst.insert(11));
console.log(bst.insert(44));
console.log(bst.insert(35));