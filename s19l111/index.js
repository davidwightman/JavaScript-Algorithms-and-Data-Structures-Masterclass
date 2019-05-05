class Node {
    constructor (val) {
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val) {
        //create a new node using that value passed in
        let newNode = new Node(val)
        // if there is no head property on the list, set the head and tail to be the newly created node
        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode;
        } else {
        // otherwise set the next property on the tail to be the new node and set the tail property to the list to be the newly creatde node
            this.tail.next = newNode;
            this.tail = newNode;
        }
        // increment the length by one
        this.length++;
        return this;
    }
    pop (){
        // if there is no head, return undefined
        if (!this.head){ return undefined}
        // loop through the list until you reach the tail
        let current = this.head
        let pre = current;
        while ( current.next ) {
            pre = current;
            current = current.next
        }
        // set the next property of the 2nd to last node to be null
        // set the tail to be the 2nd to last node
        this.tail = pre;
        this.tail.next = null
        // decrement the length of the list by 1
        this.length--;
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        // return the value of the node removed
        return current;


    }
    traverse(){
        var current = this.head;
        while (current) {
            console.log(current.val)
            current = current.next;
        }
    }
}

var list = new SinglyLinkedList()
list.push("HELLO")
list.push("GOODBYE")
list.push("!!!")


list.pop()
console.log(list)