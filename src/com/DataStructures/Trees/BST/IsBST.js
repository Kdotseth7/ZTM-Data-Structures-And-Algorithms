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


class BinaryTree {

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

const myBT = new BinaryTree(50);
myBT.root.left = new Node(25);
myBT.root.left.left = new Node(12);
myBT.root.left.right = new Node(37);
myBT.root.left.right.left = new Node(30);
myBT.root.right = new Node(75);
myBT.root.right.left = new Node(62);
myBT.root.right.left.right = new Node(70);
myBT.root.right.right = new Node(87);
console.log(myBT.isBST(myBT.root).isBST);
console.log(myBT.isBST(myBT.root).min);
console.log(myBT.isBST(myBT.root).max);