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

    pop () {
        // if there is no head, return undefined
        if (this.head === null) return undefined;
        // store the current tail in a variable to return later
        const tailToBePopped = this.tail;
        // if lenght is 1 set the head and tail to be null
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
        // update the tail to be the previous node
            this.tail = tailToBePopped.prev;
        // set the newtail's next to be null
            this.tail.next = null; 
            // cut connection with popped tail
            tailToBePopped.prev = null;
        }
        // decrement the length
        this.length--;
        // return the value removed
        return tailToBePopped;
    }

    shift () {
        // if length is 0, return undefined
        if (this.length === 0) return undefined;
        // store the current head in a variable 
        let oldHead = this.head;
        // if length is one
        if (this.length === 1){
            this.head = null;
            this.tail = null;
            //   -set the head to be null
            //   -set the tail to be null
        } else {
            // update the head to be the next of the old head
            this.head = oldHead.next;
            // set the head's previous property to null
            this.head.prev = null;
            // set the old head's next to null
            oldHead.next = null;
        }
        // decrement the length
        this.length--;
        // return old head
        return oldHead;
    }

    unshift (val) {
        // create a new node with the value passed in
        let newNode = new Node(val)
        // if the length is 0
        if (this.length === 0) {
            //   - set the head to be the new node
            //   - set the tail to be the new node
            this.head = newNode;
            this.tail = newNode;
        // otherwise
        } else {
            //   - set the prev property on the head of the list to be the new node
            this.head.prev = newNode;
            //   - set the next property on the new node to be the head property
            newNode.next = this.head;
            //   - updeate the head to be the new node
            this.head = newNode;
        }
        // increment the length
        this.length++;
        // return the list
        return this;
    }

    get (index) {
        // if the index is less than 0 or greater or equal to the the length, return null
        if (index < 0 || index >= this.length) return null
        //if the index is less than or equal to half the length of the list 
        if (index <= this.length / 2) {
            var count = 0;
            var current = this.head;
            while (count !== index){
                current = current.next;
                count++;
            }
        //   - loop through the list starting from the head and loop towards the middle
        //   - return the node once it is found
        } else {
            var count = this.length - 1
            var current = this.tail;
            while (count !== index){
                current = current.prev;
                count--;
            }
// if the index is greater than half the length of the list 
        //   - loop through the list starting from the tail and loop towards the middle
            //   - return the node once it is found
             
        //   - return the node once it is found
        }
        return current;

    }

    set (index, val){
        var foundNode = this.get(index)
        if (foundNode !== null){
            fountNode.val = val;
            return true
        }
        return false
    }

    insert (index, val){
        if (index < 0 || index >= this.length) return null
        if (index === 0 ) return !!this.unshift(val);
        if (index === this.length) return !!this.push(val);
        var newNode = new Node(val);
        var beforeNode = this.get(index-1);
        var afterNode = beforeNode.next;
        beforeNode.next = beforeNode;
        newNode.prev = beforeNode;
        newNode.next = afterNode;
        afterNode.prev = newNode;
        this.length++;
        return true;
    }
}

list = new DoublyLinkedList()
list.push(20)
console.log(list)
