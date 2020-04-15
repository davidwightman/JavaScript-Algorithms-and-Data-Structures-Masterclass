class Graph {
    constructor() {
        this.adjacencyList = {}
    }

    addVertex (vert) {
        if (!this.adjacencyList[vert]) this.adjacencyList[vert] = [];
    }
    addEdge (vert1, vert2) {
        this.adjacencyList[vert1].push(vert2);
        this.adjacencyList[vert2].push(vert1);
    }
    removeEdge(vert1, vert2) {
        const index2 = this.adjacencyList[vert1].indexOf(vert2);
        this.adjacencyList[vert1] = this.adjacencyList[vert1].splice(index2, 1);

        const index1 = this.adjacencyList[vert2].indexOf(vert1);
        this.adjacencyList[vert2] = this.adjacencyList[vert2].splice(index1, 1);
    }

    removeVertex(vert) {
        // call remove edge in loop
        while(this.adjacencyList[vert].length) {
            const adjacencyVertex = this.adjacencyList[vert].pop()
            this.removeEdge(vert, adjacencyVertex)
        }
        // remove vertex
        delete this.adjacencyList[vert]
    }
}