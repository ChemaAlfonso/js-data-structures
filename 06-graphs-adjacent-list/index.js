// ===================================
// Graph
// ===================================
//         10
//     4        20
//   2   8    17  170

// ===================================
// Creating
// ===================================
class GraphNode {
    constructor( value ) {
        this.value = value;
        this.left  = null;
        this.right = null;
    }
}

class AdjacentListGraph {

    nodes  = 0;
    adjacentList = {};

    constructor() {}

    addVertex( node ) {
        if( !this.adjacentList[node] ) {
            this.adjacentList[node] = [];
            this.nodes++;
        }

        return this;
    }

    addEdge( node1, node2 ) {
        if( !this.adjacentList[node1].includes(node2) )
            this.adjacentList[node1].push(node2)

        if( !this.adjacentList[node2].includes(node1) )
            this.adjacentList[node2].push(node1)

        return this;
    }

    _initGraph( value ) {
        const newNode = new GraphNode( value );
        this.root = newNode
        return this;
    }

}

// Intance
const myGraph = new AdjacentListGraph();

// Testin inserts
myGraph.addVertex(1)
myGraph.addVertex(3)
myGraph.addVertex(4)
myGraph.addVertex(5)
myGraph.addVertex(6)
myGraph.addVertex(8)

myGraph.addEdge(3,5)
myGraph.addEdge(5,4)

myGraph.addEdge(1,4)
myGraph.addEdge(3,1)
myGraph.addEdge(3,6)
myGraph.addEdge(1,6)

myGraph.addEdge(8,4)

console.log(myGraph)