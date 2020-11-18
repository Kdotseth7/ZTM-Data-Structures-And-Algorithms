// Link: https://www.youtube.com/watch?v=kMrbTnd5W9U&list=PL-Jc9J83PIiHYxUk8dSu2_G7MR1PaGXN4&index=49&ab_channel=Pepcoding

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
    }

}


class BST {

    constructor(value) {
        this.root = new Node(value);
    }

    isBST(node) {
        if (!node) {
            const bp = new BSTPair();
            bp.isBST = true;
            bp.min = Number.MAX_VALUE;
            bp.max = Number.MIN_VALUE;
            return bp;
        }

        const lp = this.isBST(node.left);
        const rp = this.isBST(node.right);

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
        
        return mp;
    }

}

const myBST = new BST(50);
myBST.root.left = new Node(25);
myBST.root.left.left = new Node(12);
myBST.root.left.right = new Node(37);
myBST.root.left.right.left = new Node(30);
myBST.root.right = new Node(75);
myBST.root.right.left = new Node(62);
myBST.root.right.left.right = new Node(70);
myBST.root.right.right = new Node(87);
console.log(myBST.isBST(myBST.root).isBST);