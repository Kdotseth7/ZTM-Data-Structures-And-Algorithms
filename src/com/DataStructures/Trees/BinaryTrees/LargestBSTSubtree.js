// Link: https://www.youtube.com/watch?v=UGsJz8fSYp0&list=PL-Jc9J83PIiHYxUk8dSu2_G7MR1PaGXN4&index=53

class Node {

    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }

}

class BSTPair {

    constructor() {
        this.isBST;
        this.min;
        this.max;
        this.root; //Represents the root of largest BST Subtree
        this.size; //Represents the size of largest BST Subtree
    }

}


class BinaryTree {

    constructor(value) {
        this.root = new Node(value);
    }

    largestBSTSubtree(node) {
        if (!node) {
            const bp = new BSTPair();
            bp.isBST = true;
            bp.min = Number.MAX_VALUE;
            bp.max = Number.MIN_VALUE;
            bp.root = null; 
            bp.size = 0;
            return bp;
        }

        const lp = this.largestBSTSubtree(node.left);
        const rp = this.largestBSTSubtree(node.right);

        const mp = new BSTPair();
        if (
            (lp.max <= node.value && node.value <= rp.min) 
            && 
            (lp.isBST && rp.isBST)
            ) { 
            mp.isBST = true;
        }
        mp.min = Math.min(node.value, Math.min(lp.min, rp.min));
        mp.max = Math.max(node.value, Math.max(lp.max, rp.max));
        if (mp.isBST) {
            mp.root = node;
            mp.size = lp.size + rp.size + 1;
        } else if (lp.size > rp.size) {
            mp.root = lp.root;
            mp.size = lp.size;
        } else {
            mp.root = rp.root;
            mp.size = rp.size;  
        }
        
        return mp;
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
myBT.root.right.left.right = new Node(77);
myBT.root.right.right = new Node(87);

const lBSTSubtree = myBT.largestBSTSubtree(myBT.root);
console.log(lBSTSubtree.root.value + " @ " + lBSTSubtree.size);


const myBT2 = new BinaryTree(50);
myBT2.root.left = new Node(25);
myBT2.root.left.left = new Node(12);
myBT2.root.left.right = new Node(37);
myBT2.root.left.right.left = new Node(30);
myBT2.root.left.right.right = new Node(40);
myBT2.root.right = new Node(75); 
myBT2.root.right.left = new Node(62);
myBT2.root.right.left.left = new Node(60);
myBT2.root.right.left.left.left = new Node(51);
myBT2.root.right.left.left.right = new Node(61);
myBT2.root.right.left.right = new Node(77);
myBT2.root.right.left.right.left = new Node(74);
myBT2.root.right.left.right.right = new Node(78);
myBT2.root.right.right = new Node(87);

const lBSTSubtree2 = myBT2.largestBSTSubtree(myBT2.root);
console.log(lBSTSubtree2.root.value + " @ " + lBSTSubtree2.size);