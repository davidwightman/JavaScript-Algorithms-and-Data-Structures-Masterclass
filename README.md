# JavaScript Algorithms and Data Structures Masterclass

Working through the exercises.

## Notes

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

Definition - A data structure that consisits of nodes in a parent/child relationship.

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

