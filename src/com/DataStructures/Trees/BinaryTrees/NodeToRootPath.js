//Link: https://www.youtube.com/watch?v=1Kyc-zQS7eQ&list=PL-Jc9J83PIiHYxUk8dSu2_G7MR1PaGXN4&index=17&ab_channel=Pepcoding

class Node {

    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }

}

class BinaryTree {

    constructor() {
        this.root = null;
        const a = new Node('a');
        const b = new Node('b');
        const c = new Node('c');
        const d = new Node('d');
        const e = new Node('e');
        const f = new Node('f');
        const g = new Node('g');
        const h = new Node('h');
        const i = new Node('i');
        const j = new Node('j');
        const k = new Node('k');
        const l = new Node('l');
        const m = new Node('m');
        const n = new Node('n');
        const o = new Node('o');
        const p = new Node('p');
        const q = new Node('q');
        const r = new Node('r');
        const s = new Node('s');
        const t = new Node('t');
        const u = new Node('u');
        const v = new Node('v');
        const w = new Node('w');
        const x = new Node('x');
        const y = new Node('y');
        const z = new Node('z');
        const one = new Node(1);
        const two = new Node(2);
        const three = new Node(3);
        const four = new Node(4);
        const five = new Node(5);
        const six = new Node(6);
        const seven = new Node(7);
        const eight = new Node(8);
        const nine = new Node(9);
        const ten = new Node(10);
        const eleven = new Node(11);
        const twelve = new Node(12);
        const thirteen = new Node(13);
        ten.left = a;
        ten.right = eleven;
        eleven.left = twelve;
        eleven.right = thirteen;
        a.left = b;
        a.right = c;
        b.left = d;
        b.right = e;
        d.left = h;
        d.right = i;
        e.left = j;
        e.right = nine;
        j.left = p;
        j.right = q;
        p.left = v;
        p.right = x;
        nine.left = r;
        nine.right = s;
        r.left = t;
        r.right = u;
        t.left = y;
        t.right = z;
        z.left = one;
        z.right = two;
        s.left = three;
        s.right = four;
        four.left = five;
        four.right = six;
        five.left = seven;
        five.right = eight;
        c.left = f;
        c.right = g;
        f.left = l;
        f.right = m;
        g.left = n;
        g.right = o;
        this.root = ten;

        this.list = [];
    }

    //Will travel only half euler
    nodeToRootPath(node, val) {
        if (!node)
            return false;

        if (node.value === val) {
            this.n2rPath.push(node.value);
            return true;
        }

        const foundInLeftChild = this.nodeToRootPath(node.left, val);
        if (foundInLeftChild) {
            this.n2rPath.push(node.value);
            return true;
        }

        const foundInRightChild = this.nodeToRootPath(node.right, val);
        if (foundInRightChild) {
            this.n2rPath.push(node.value);
            return true;
        }

        return false;
    }

}

const myBT = new BinaryTree();
myBT.nodeToRootPath(myBT.root, 'v');
console.log(myBT.n2rPath);


