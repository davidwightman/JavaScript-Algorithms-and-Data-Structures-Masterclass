class Queue {
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }
// add to the end to the tail
    enqueue(val){
        var newNode = new Node(val)
        if (!this.first){
            this.last = newNode;
            this.first = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }
        return ++this.size;
    }
// remove from the beginning
    dequeue(){
        if (!this.first) return null
        var temp = this.first
        if(this.first === this.last){
            this.last = null;
        }
        this.first = this.first.next;
        this.size--;
        return temp.value;
    }
}

class Node {
    constructor(value) {
        this.value = value;
        this.next =  null;
    }
}

var q = new Queue();
q.enqueue("First")
q.enqueue("Second")
q.enqueue("Third")
console.log(q)
q.dequeue()
console.log(q)