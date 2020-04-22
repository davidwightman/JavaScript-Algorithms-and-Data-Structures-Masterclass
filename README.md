# JavaScript Algorithms and Data Structures Masterclass

Working through the exercises.

## Notes

### Big O Notation



### Recursion
A process (a function in our case) that calls itself

#### Where is recursion used

- JSON.parse / JSON.stringify
- document.getElementById and dom traversal algorithms
- object traversal
- used in trees and graphs
- a cleaner alternative to iteration

#### The call stack
- pushed on and popped off

#### The base case
- where the recusion stops
- almost always involves a conditional

#### Recursion pitfalls
- no basecase or basecase is wrong
- forgetting to return or returning the wrong thing (not changing what is being recursively called)
- stack overflow

#### Helper Method recursion pattern
- outer function contains inner recursive function
- incapsulation
- good for compiling an array or object that is returned at the end. For example, inner recursive function pushes data into result array which is  returned at the end

#### Pure recursion
- for arrays, use methods like slice, the spread operator, and concat that make copies of arrays so you do not mutate them
- remember that string are immutable so you will need to use methods like slice, substr, or substring to make copies of string
- to make copies of objects use Object.assign or the spread operator



// Started flashcards

### Stack

#### LIFO structure
- "last in first out" structure

#### Where used:
- manage function invocations
- undo /redo
- routing (the history object in browser)

#### Big O of Stacks
Insertion = O(1)
Removal - O(1)
Searching - O(N)
Access - O(N)

Should not use a Stack if you care about Searching and Access.

### Queues

#### Fifo data structure
- first in first out

#### Where used:
- background tasks
- upload resources
- print / task processing

#### Big O of Queues
Insertion - O(1)
Removal - O(1)
Searching - O(N)
Access - O(N)

### Trees

Definition - A data structure that consists of nodes in a parent/child relationship.

Lists are linear (one path). Trees are nonlinear (more than one path).

#### Tree Terminology
- Root: the top node in a tree
- Child: a node directly connected to another node when moving away from the root.
- Parent: the coverse notion of a child
- Siblings: a group of nodes with the same parent
- Leaf: a node with no children
- Edge: the connection between one node and another

#### Examples of Trees
- HTML DOM
- Network Routing
- Abstract Syntax Trees
- Artificial Intelligence
- Folders in operating system

#### Kind of trees
- Binary Trees: each node can have at most two children
- Binary Search Trees: are sorted in a particular way, can be compared
    -- every node to the left is less than the parent
    -- eventy node to the right is greater than the parent
- Heaps

#### Big O of Binary Search Trees
Insertion - O(log n)
Searching - O(log n)

### Tree Traversal

visit every node once

#### two ways
breadth first
vs
- depth first
    - InOrder
    - PreOrder
    - PostOrder 

#### when to use BFS or DFS

time complexity is the same

breadth first uses a lot of space with the queue

depth first does not store all of these thing

breadth first is good for list-like trees

//

InOrder - will give you all nodes in lowest to highest order

PreOrder - you can recreate the list as you have the root first

### Binary Heaps

Heap is a type of heap... which is a type of a tree.

Very similar to a binary search tree, but with different rules.

In a MaxBinaryHeap, parent nodes are always larger than child nodes.
In a MinBinaryHeap, parent nodes are always smaller than child nodes.

Each parent has at most two child nodes.
the value of each parent node is always greater than its child nodes.
a binary heap is as compact as possible. All the children of each node are as full as they can be and left children are filled out first

We can represent heaps using arrays... se s24l190git

#### Big O of Binary Heaps

Insertion - O(log N)
Removal - O(log N)
Search - O(N) - not good for search because no clear relationship between children on the same level

#### Priority Queue
A data structure where each element has a priority. Elements with higher priorities are served before elements with lower priorities.

### Hash Tables

- hash tables are used to store key-value pairs
- they are like arrays, but the keys are not ordered
- unlike arrays, hash tables are fast for all of the following operations: finding values, adding new values, and removing values

#### Implementation

- we will use an array
- in order to look up values by key, we need a way to convert keys into valid array indices
- a function that performs this task is called a hash function

#### What makes a good hash function?

- Fast (i.e. constant time)
- Doesn't cluster outputs at specific indices, but distributes uniformly
- Deterministic (same input yields same output)

#### How to handle collisions 

1. separate chaining
    - at each index in our array we store values using a more sophisticated data structure (like an array or a linked list)
2. linear probing
    - when we find a collision we search through the array to find the next empty slot

#### Big O of Hash Tables

- Insert: O(1)
- Deletion: O(1)
- Access: O(1)

///// CONTINUE FLASH CARDS

### Graphs

#### What is a Graph

collection of nodes and collection between those nodes

A tree is a type of a graph where there is only one path to get to any given node 

#### Real world examples

Social Networks
Location/Mapping
Routing Algorithms
Visual Hierarchy
File System Optimizations

#### Essential Graph terms

vertex - a node
edge - connection between nodes
weighted/unweighted - values assigned to distances between vertices
directed/undirected - directions assigned to distanced between 

Undirected graphs - no direction between edges
Directed graph - direction assigned to edge (can also be bi-directional)
Weighted Graph - has value associated with 

#### Adjacency Matrix

- use matrix to store the relationships between vertexes
- takes up more space (in sparse graphs)
- slower to iterate over all edges
- faster to lookup specific edge

#### Adjacency List

- use array or hashmap to store the edges 
- Can take up less space (in sparse graphs)
- faster to iterate over all edges
- can be slower to look up specific edge

#### Graph Traversal Usese

- peer to peer networking
- web crawlers
- finding "closest" matches and recommendations
- shortest path problems
- GPS navigation
- solving mazes
- AI (shortest path to win the game)

#### Depth First Graph Traversal

For trees:
"Children before siblings"
"Deepen before we widen"

