class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor(){
        this.root = null;
    }

    insert(val) {
        // create a new 
        var newNode = new Node(val)
        // start at the root
        if (!this.root) {
            this.root = newNode
            return this;
        } else {
            var current = this.root;
            while (true) {
                if (val === current.value) return undefined
                if (val < current.value) {
                    if (current.left === null) {
                        current.left = newNode;
                        return this;
                    } else {
                        current = current.left;
                    }
                } else if (val > current.value) {
                    if (current.right === null) {
                        current.right = newNode;
                        return this;
                    } else {
                        current = current.right;
                    }
                }
            }
        }
        // check to see if root, if none then node becomes root. if there is then compare node to root
        
        //if greater
        // check to node to the right 
        // if ther is, move to that node and repeat theses sets
        // if there is not, add that node as the right property
        
        // if less 
        // check to see if there is a node to the left
        // if there is, move to that node and repeate these steps
        // if there is not, add that node as the left property
    }
    search(val) {
        // start at the root
        if (!this.root) {
            return false;
        } else {
            var current = this.root;
            var found = false;
            while (current && !found) {
                if (val < current.value) {
                    current = current.left;
                } else if (val > current.value) {
                    current = current.right;
                } else {
                    found = true;
                }
            }
            if(!found) return undefined
            return current;
        }
        // start at the root
        // check if there is a root, if not - don't search
        // if there is a root, check if the falue of the new node is value we're looking for if we found it then we're done
        // if not, check to see if the value is greater than or less than the value of the root
        // if it is greater
        //  - check to see if there is a node to the right
        //      - if there is, move to that node and repeat these steps
        //      - if there is not, we're done searching!
        //  -if it is less
        //      -check to see if there is a node to the left
        //          - if there is, move to that node and repeat these steps
        //          - if ther is not, we're done searching!
    }

    /* create a queue (this can be an array) amd a variable to store the values of nodes visited
Place the root node in the queue
Loop as long as there is anything in the queue
 - Dequeue a node from the queue and push the value of the node into the variable that stores the nodes
 - If ther is a left property on the node dequeued - add it to the queue
 -  If ther is a right property on the node dequeued - add it to the queue
Return the variable that stores the values
*/

/* Breadth First Search Solution */
    BFS() {
        var data =[], queue =[], node = this.root;
        queue.push(node);
        while(queue.length) {
            node = queue.shift();
            data.push(node);
            if (node.left) queue.push(node.left)
            if (node.right) queue.push(node.right)
        }
        return data;
    }

    /* Depth First Solution - PreOrder */
    preOrder() {
        var data =[], current = this.root;
        function traverse(node) {
            data.push(node.value);
            if(node.left) traverse(node.left);
            if(node.right) traverse(node.right);
        }
        traverse(this.root);
        return data;
        // create variable to store the values of nodes visited
        // variable called current with root of the tree
        // write a helper function which accepts a node
        // - push the value of the node to the varible that stores the values
        // - if the node has a left property, call the helper function with the left property on the node
        // - if the node has a right property, call the helper function with the right propety on the node
        // Invoke the helper function with the current varialbe
        // return the array of values

    }

    /* Depth First Solution - PostOrder */
    postOrder(){
        var data =[], current = this.root;
        function traverse(node) {
            if(node.left) traverse(node.left);
            if(node.right) traverse(node.right);
            data.push(node.value);
        }
        traverse(this.root);
        return data; 
    }

    /* Depth First Search - InOrder */
    inOrder(){
        var data =[], current = this.root;
        function traverse(node) {
            if(node.left) traverse(node.left);
            data.push(node.value);
            if(node.right) traverse(node.right);
        }
        traverse(this.root);
        return data; 
    }
}

var tree = new BinarySearchTree();
tree.insert(10);
tree.insert(6);
tree.insert(8);

tree.insert(3);
tree.insert(20);
tree.insert(15);


console.log(tree)
console.log(tree.root.left.left)
//console.log(tree.search(12))
//console.log(tree.search(120))
//console.log(tree.BFS())

console.log(tree.preOrder())
console.log(tree.postOrder())
console.log(tree.inOrder())



