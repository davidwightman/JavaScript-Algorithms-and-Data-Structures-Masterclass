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
    shift() {
        // if no nodes return undefined
        if (!this.head){ return undefined}
        // store the current head property in a variable
        let current = this.head;
        // set the head property to be the current head's next prperty
        this.head = current.next;
        // decrement the length by 1 
        this.length--;
        if (this.length === 0 ) {
            this.tail = null;
        }
        // return the value of the node removed
        return current;
    }
    unshift(val){
        //create a new  node using the value passed to the function
        let newNode = new Node(val)
        // if there is no head on the list, set the head and tail to be the newly created node
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        // otherwise set the newly created node's next property to be the current head property on the list
        } else {
            newNode.next = this.head
        // set the head on the list to be that newly created noded
            this.head = newNode
        }
        // increment length
        this.length++;
        // return linked list
        return this;

    }
    get(index){
        // if index is less than zero or greater than or equal to the length of the list, return null
        if (index < 0 || index >= this.length) { return null }
        // loop through the list until you reach the index and return the node at that specific index
       var counter = 0;
       var current = this.head;
       while (counter !== index){
           current = current.next;
           counter++
       }
       return current;
    }
    set(index, value){
        // use get method to find the specifice node
        let findIndex = this.get(index)
        // if the node is not found, return false
        if (findIndex) { return false } else {
        // if the node is found, set the value of that node to be the value passed to the function and return true
            findIndex.val = value
            return true
        }
    }
    insert(index, val){
         // if index is less than zero or greater than or equal to the length of the list, return false
         if (index < 0 || index > this.length) return false
        // if index is the same as the length, push a new node to the end of the list
        if (index === this.length) {
            this.push(val)
            return true
        }
        // if the index is 0, unshift a new node to the start of the list
        if (index === 0) {
            this.unshift(val)
            return true
        }
        // otherwise, use get method, access the node at the index -1
        let prev = this.get(index-1)
        let temp = prev.next;
        // create new node
        let newNode = new Node(val);
        // set the next property on that node to be the new node
        prev.next = newNode;
        // set the next property on the new node to be the previous next
        newNode.next = temp;

        // increment the length
        this.length++;
        // return true
        return true;
    }
    remove (index) {
        if (index < 0 || index >= this.length) return undefined
        if (index === this.length - 1) {return this.pop()}
        if (index === 0) return this.shift()
        let prev = this.get(index-1)
        let removed = prev.next;
        prev.next = removed.next;
        this.length--;
        return temp;
    }
    reverse (){
        // swap the head and tail
        let temp
        this.head = temp
        this.tail = this.head
        this.head = this.temp
        let next;
        let prev;
        let nod = this.head
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


console.log(list.get(1))
