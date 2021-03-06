/*
//Edge List
const edgeList = [[0, 2], [2, 3], [2, 1], [1, 3]];

//Adjacent List
const adjacentList = [[2], [2, 3], [0, 1, 3], [1, 2]]; -> index is the actual value of the node
//^ Better if done using an object

//Adjacency Matrix
const adjacencyMatrix = {
    0: [0, 0, 1, 0],
    1: [0, 0, 1, 1],
    2: [1, 1, 0, 1],
    3: [0, 1, 1, 0]
};
*/

// Undirected and Unweighted Graph
class Graph {

    constructor() {
        this.numberOfNodes = 0;
        this.adjacentList = {};
    }

    addVertex(node) {
        if (this.adjacentList[node] === undefined) {
            this.adjacentList[node] = [];
            this.numberOfNodes++;
        }
        return this;
    }

    addEdge(node1, node2) {
        this.adjacentList[node1].push(node2);
        this.adjacentList[node2].push(node1);
        return this;
    }

    //Helper function
    showConnections() {
        const allNodes = Object.keys(this.adjacentList);
        for (let node of allNodes) {
            let nodeConnections = this.adjacentList[node];
            console.log(node + "-->" + nodeConnections);
        }
    }

}

const myGraph = new Graph();
myGraph.addVertex('0');
myGraph.addVertex('1');
myGraph.addVertex('2');
myGraph.addVertex('3');
myGraph.addVertex('4');
myGraph.addVertex('5');
console.log(myGraph.addVertex('6'));
myGraph.addEdge('3', '1');
myGraph.addEdge('3', '4');
myGraph.addEdge('4', '2');
myGraph.addEdge('4', '5');
myGraph.addEdge('1', '2');
myGraph.addEdge('1', '0');
myGraph.addEdge('0', '2');
console.log(myGraph.addEdge('6', '5'));
myGraph.showConnections();
