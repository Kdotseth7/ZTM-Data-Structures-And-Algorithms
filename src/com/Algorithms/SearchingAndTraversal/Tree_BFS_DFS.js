//PreOrder, InOrder & PostOrder: https://www.youtube.com/watch?v=BHB0B1jFKQc

//     9
//  4     20
//1  6  15  170

/*
BFS-> [9, 4, 20, 1, 6, 15, 170]
*/

/*
DFS ->
PreOrder: [9, 4, 1, 6, 20, 15, 170]
InOrder: [1, 4, 6, 9, 15, 20, 170]
PostOrder: [1, 6, 4, 15, 170, 20, 9]
*/

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

    lookup(value) {
        if (!this.root)
            return false;
        let currentNode = this.root;
        while (currentNode) {
            if (value < currentNode.value) //LEFT
                currentNode = currentNode.left;
            else if (value > currentNode.value) //RIGHT
                currentNode = currentNode.right;
            else if (value === currentNode.value) //NODE VALUE MATCHED
                return currentNode;
        }
        return false; //No NODE with given VALUE found
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

    remove(value) {
        if (!this.root) {
            return false;
        }
        let currentNode = this.root;
        let parentNode = null;
        while(currentNode){
            if(value < currentNode.value){
                parentNode = currentNode;
                currentNode = currentNode.left;
            } else if(value > currentNode.value){
                parentNode = currentNode;
                currentNode = currentNode.right;
            } else if (currentNode.value === value) {
                //We have a match, get to work!

                //Option 1: No right child:
                if (currentNode.right === null) {
                    if (parentNode === null) {
                        this.root = currentNode.left;
                    } else {

                        //if parent > current value, make current left child a child of parent
                        if(currentNode.value < parentNode.value) {
                            parentNode.left = currentNode.left;

                            //if parent < current value, make left child a right child of parent
                        } else if(currentNode.value > parentNode.value) {
                            parentNode.right = currentNode.left;
                        }
                    }

                    //Option 2: Right child which doesnt have a left child
                } else if (currentNode.right.left === null) {
                    currentNode.right.left = currentNode.left;
                    if(parentNode === null) {
                        this.root = currentNode.right;
                    } else {

                        //if parent > current, make right child of the left the parent
                        if(currentNode.value < parentNode.value) {
                            parentNode.left = currentNode.right;

                            //if parent < current, make right child a right child of the parent
                        } else if (currentNode.value > parentNode.value) {
                            parentNode.right = currentNode.right;
                        }
                    }

                    //Option 3: Right child that has a left child
                } else {

                    //find the Right child's left most child
                    let leftmost = currentNode.right.left;
                    let leftmostParent = currentNode.right;
                    while(leftmost.left !== null) {
                        leftmostParent = leftmost;
                        leftmost = leftmost.left;
                    }

                    //Parent's left subtree is now leftmost's right subtree
                    leftmostParent.left = leftmost.right;
                    leftmost.left = currentNode.left;
                    leftmost.right = currentNode.right;

                    if(parentNode === null) {
                        this.root = leftmost;
                    } else {
                        if(currentNode.value < parentNode.value) {
                            parentNode.left = leftmost;
                        } else if(currentNode.value > parentNode.value) {
                            parentNode.right = leftmost;
                        }
                    }
                }
                return true;
            }
        }
    }

    //BFS uses Queue DS
    breadthFirstSearch() {
        let currentNode = this.root;
        let queue = []; //to keep track of the level
        let list = []; //keeps track of order of traversal
        queue.push(currentNode);
        while(queue.length > 0) {
            currentNode = queue.shift(); //Shift removes first item from front of the queue
            if (currentNode.left)
                queue.push(currentNode.left);
            if (currentNode.right)
                queue.push(currentNode.right);
            list.push(currentNode.value);
        }
        return list;
    }

    breadthFirstSearchRecursive(queue, list) {
        if(!queue.length)
            return list;
        let currentNode = queue.unshift();
        list.push(currentNode.value);
        if (currentNode.left)
            queue.push(currentNode.left);
        if (currentNode.right)
            queue.push(currentNode.right);
        return this.breadthFirstSearchRecursive(queue, list);
    }

    //DFS uses Stack DS, i.e., the Call Stack
    DFS_PreOrder() {
        return traversePreOrder(this.root, []);
    }

    DFS_InOrder() {
        return traverseInOrder(this.root, []);
    }

    DFS_PostOrder() {
        return traversePostOrder(this.root, []);
    }

}

const traversePreOrder = (node, list) => {
    list.push(node.value);
    if (node.left)
        traversePreOrder(node.left, list);
    if (node.right)
        traversePreOrder(node.right, list);
    return list;
};

const traverseInOrder = (node, list) => {
    if (node.left)
        traverseInOrder(node.left, list);
    list.push(node.value);
    if (node.right)
        traverseInOrder(node.right, list);
    return list;
};

const traversePostOrder = (node, list) => {
    if (node.left)
        traversePostOrder(node.left, list);
    if (node.right)
        traversePostOrder(node.right, list);
    list.push(node.value);
    return list;
};

const traverse = node => {
    const tree = { value: node.value };
    tree.left = node.left === null
        ? null
        : traverse(node.left);
    tree.right = node.right === null
        ? null
        : traverse(node.right);
    return tree;
};

const myBST = new BinarySearchTree();
myBST.insert(9);
myBST.insert(4);
myBST.insert(1);
myBST.insert(6);
myBST.insert(20);
myBST.insert(15);
myBST.insert(170);
console.log("BFS: ", myBST.breadthFirstSearch());
console.log("BFS Recursive: ", myBST.breadthFirstSearch([myBST.root], []));
console.log("DFS ->PreOrder: ", myBST.DFS_PreOrder());
console.log("DFS ->InOrder: ", myBST.DFS_InOrder());
console.log("DFS ->PostOrder: ", myBST.DFS_PostOrder());




