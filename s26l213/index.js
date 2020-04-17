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

    DFSrecursive(start) {
        // create a list to store the end result, to be returned at the very end
        const result = []
        const visited = {}
        // create an object to store visited vertices
        // create a helper function which accepts a vertex
        // - the helper function should return early if the vertex is empty
        // - the helper function should place the vertex it accepts into the visited object and push that vertex into the result array.
        // - loop over all of the values in the adjacenyList for that vertex
        // - if any of those values have not been visited, recursively invoke the helper function with that vortex
        const adjacencyList = this.adjacencyList;
        (function dfs(vertext){
            if(!vertex) return null;
            visited[vertex] = true;
            result.push(vertex);
            adjacencyList[vertex].forEach(neighbor => {
                if (visited[neighbor]){
                    return dfs(neighbor)
                }
            });
        // invoke the helper function with the starting vertex
        })(start);
    
        // return the result array
        return result
    }
}