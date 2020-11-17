// Link: https://www.youtube.com/watch?v=S0Bwgtn32uI&list=PL-Jc9J83PIiHYxUk8dSu2_G7MR1PaGXN4&index=45&ab_channel=Pepcoding

class Node {

    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }

}

class DiaPair {

    constructor() {
        this.ht;
        this.dia;
    }

}

class BinaryTree {

    constructor(value) {
        this.root = new Node(value);
    }

    height(node) {
        // Return -1 is height in terms of edges else return 0 if height in terms of nodes
        if (!node)
            return -1;

        let leftHeight = this.height(node.left);
        let rightHeight = this.height(node.right);
        let totalHeight = Math.max(leftHeight, rightHeight)
        
        return totalHeight + 1;
    }

    // Diameter of a Tree -> No. of edges between 2 farthest nodes in a Tree
    findDiameter(node) {
        if (!node) {
            return 0;
        }
                    
        //Maximum distance between 2 nodes on LHS
        const ld = this.findDiameter(node.left);
        //Maximum distance between 2 nodes on RHS
        const rd = this.findDiameter(node.right);

        //Maximum distance between Left's Deepest Node & Right's Deepest Node
        const f = this.height(node.left) + this.height(node.right) + 2;
        const diameter = Math.max(f, Math.max(ld, rd));

        return diameter;
    }

    findDiameter_Optimized(node) {
        if (!node) {
            const bp = new DiaPair();
            bp.ht = -1;
            bp.dia = 0;
            return bp;
        }
        
        const lp = this.findDiameter_Optimized(node.left);
        const rp = this.findDiameter_Optimized(node.right);

        const mp = new DiaPair();
        mp.ht = Math.max(lp.ht, rp.ht) + 1;
        const fes = lp.ht + rp.ht + 2;
        mp.dia = Math.max(fes, Math.max(lp.dia, rp.dia));
        
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
console.log(myBT.findDiameter(myBT.root));
console.log(myBT.findDiameter_Optimized(myBT.root).dia);