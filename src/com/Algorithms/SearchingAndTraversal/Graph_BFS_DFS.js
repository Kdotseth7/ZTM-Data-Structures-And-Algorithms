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

    breadthFirstSearch(node) {
        let currentNode = node;
        let queue = [];
        let seen = [];
        let list = [];
        queue.push(node);
        while (queue.length > 0) {
            currentNode = queue.shift();
            let counter = 0;
            //Add currentNode to SEEN array if its not a part of it
            seen.forEach(elem => {
                if (currentNode ===  elem)
                    counter++;
            });
            if (counter === 0)
                seen.push(currentNode);
            let adjacentNodes = this.adjacentList[currentNode];
            //Add unvisited neighbours of currentNode to SEEN array and to the QUEUE
            adjacentNodes.forEach(adjNode => {
                let counter = 0;
                for(let i=0; i<seen.length; i++) {
                    if (adjNode === seen[i]) {
                        counter++;
                        break;
                    }
                }
                if (counter === 0) {
                    seen.push(adjNode);
                    queue.push(adjNode);
                }
            });
            list.push(currentNode);
        }
        return list;
    }

    depthFirstSearch(node, list) {
        list.push(node);
        let adjacentNodes = this.adjacentList[node];
        adjacentNodes.forEach(adjNode => {
            let counter = 0;
            //Check if adjacent node has been visited or not
            for (let vis of list) {
                if (adjNode === vis) {
                    counter++;
                    break;
                }
            }
            //If node not visited
            if (counter === 0)
                this.depthFirstSearch(adjNode, list);
        });
        return list;
    }

    //Helper function
    showConnections()  {
        const allNodes = Object.keys(this.adjacentList);
        console.log("Graph Connections:");
        for (let node of allNodes) {
            let nodeConnections = this.adjacentList[node];
            console.log(node + "-->" + nodeConnections);
        }
    }

}

const myGraph = new Graph();
myGraph.addVertex('1');
myGraph.addVertex('2');
myGraph.addVertex('3');
myGraph.addVertex('4');
myGraph.addVertex('5');
myGraph.addVertex('6');
myGraph.addVertex('7');
myGraph.addVertex('8');
myGraph.addVertex('9');
console.log(myGraph.addVertex('10'));
myGraph.addEdge('1', '2');
myGraph.addEdge('1', '4');
myGraph.addEdge('2', '3');
myGraph.addEdge('2', '5');
myGraph.addEdge('2', '7');
myGraph.addEdge('2', '8');
myGraph.addEdge('3', '4');
myGraph.addEdge('3', '9');
myGraph.addEdge('3', '10');
myGraph.addEdge('5', '6');
myGraph.addEdge('5', '7');
myGraph.addEdge('5', '8');
console.log(myGraph.addEdge('7', '8'));
myGraph.showConnections();
console.log("BFS: ", myGraph.breadthFirstSearch('6'));
console.log("DFS: ", myGraph.depthFirstSearch('1', [], []));
