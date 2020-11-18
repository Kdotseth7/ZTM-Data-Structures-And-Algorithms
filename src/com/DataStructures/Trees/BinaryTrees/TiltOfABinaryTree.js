// Link: https://www.youtube.com/watch?v=gK95sG7Dm-w&list=PL-Jc9J83PIiHYxUk8dSu2_G7MR1PaGXN4&index=47&ab_channel=Pepcoding

class Node {

    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }

}


class BinaryTree {

    constructor(value) {
        this.root = new Node(value);
        this.tiltSum = 0;
        this.tiltSum_Sumeet = 0;
    }

    //Tilt of a Binary Tree -> Sum of tilts of all indvidual nodes of a binary tree.
    //Tilt of an individual Node -> |Sum of all Nodes on Left - Sum of all Nodes on Right|
    tilt(node, sum) {
        if (!node) {
            return 0;
        }

        const leftSum = this.tilt(node.left, sum);
        const rightSum = this.tilt(node.right, sum);

        this.tiltSum += Math.abs(leftSum - rightSum);
        sum += leftSum + rightSum + node.value;

        return sum;
    }

    tilt_Sumeet(node) {
        if (!node) {
            return 0;
        }

        const leftSum = this.tilt_Sumeet(node.left);
        const rightSum = this.tilt_Sumeet(node.right);

        this.tiltSum_Sumeet += Math.abs(leftSum - rightSum);
        const sum = leftSum + rightSum + node.value;

        return sum;
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
myBT.tilt(myBT.root, 0);
console.log(myBT.tiltSum);
myBT.tilt_Sumeet(myBT.root);
console.log(myBT.tiltSum_Sumeet);