class Node{
    constructor(val){
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val){
        //create new node 
        let newNode = new Node(val)
        // if head is null set the head and tail the same and return
        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode;
        } else {
        // if not set the next property on the tail to be that node
        this.tail.next = newNode;
        // set the previous property on the newly created node to be the tail
        newNode.prev = this.tail
        // set the tail to be the newly created node
        this.tail = newNode;
        }
        // increment length and return list
        this.length++;
        return this;
    }
}

list = new DoublyLinkedList()
list.push(20)
console.log(list)
