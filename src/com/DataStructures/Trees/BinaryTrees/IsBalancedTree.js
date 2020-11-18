// Link: https://www.youtube.com/watch?v=lUDgp2D6sf8&list=PL-Jc9J83PIiHYxUk8dSu2_G7MR1PaGXN4&index=51&ab_channel=Pepcoding

class Node {

    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }

}

class BTPair {

    constructor() {
        this.isBalanced = false;
        this.ht;
    }

}


class BinaryTree {

    constructor(value) {
        this.root = new Node(value);
        this.isBalanced = true;
    }

    // Node of a tree is balanced if -> |ht(left) - ht(right)| <= 1
    // Binary Tree is said to be Balanced if all nodes of the tree are balanced
    isBalancedTree(node) {
        if (!node) {
            const bp = new BTPair();
            bp.isBalanced = true;
            bp.ht = 0;
            return bp;
        }

        const lp = this.isBalancedTree(node.left);
        const rp = this.isBalancedTree(node.right);

        const mp = new BTPair();
        if (
            (Math.abs(lp.ht - rp.ht) <= 1)
            &&
            (lp.isBalanced && rp.isBalanced)
            ) {
            mp.isBalanced = true;
        }
        mp.ht = Math.max(lp.ht, rp.ht) + 1;

        return mp;
    }

    isBalancedTree_TravelAndChain(node) {
        if (!node) {
            return 0;
        }

        const left = this.isBalancedTree(node.left);
        const right = this.isBalancedTree(node.right);

        if (Math.abs(left - right) > 1) {
            this.isBalanced = false;
        }    
        const lHt = Math.max(left, right) + 1;

        return lHt;
    }

}

const myBT = new BinaryTree(50);
myBT.root.left = new Node(25);
myBT.root.left.left = new Node(12);
myBT.root.left.right = new Node(37);
myBT.root.left.right.left = new Node(30);
myBT.root.right = new Node(75);
myBT.root.right.left = new Node(62);
myBT.root.right.left.right = new Node(70);
myBT.root.right.right = new Node(87);
console.log(myBT.isBalancedTree(myBT.root).isBalanced);
myBT.isBalancedTree_TravelAndChain(myBT.root);
console.log(myBT.isBalanced);