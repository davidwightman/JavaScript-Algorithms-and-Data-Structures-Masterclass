class PriorityQueue {
    constructor(){
        this.values = []
    }

    enqueue(val, priority) {
        let newNode = new Node(val, priority);
        this.values.push(newNode);
        this.bubbleUp();
    }
    bubbleUp(){
        let idx = this.values.length - 1;
        const element = this.values[idx];
        while(idx > 0) {
            let parentIdx = Math.floor((idx - 1)/2);
            let parent = this.values[parentIdx];
            if (element.priority >= parent.priority) break;
                this.values[parentIdx] = element;
                this.values[idx] = parent;
                idx = parentIdx;
        }
    }
  
    dequeue(){
         /* swap the first value in the values property with the last one */
        const min = this.values[0]
        const end = this.values.pop();
        if(this.values.length > 0) {
            this.values[0] = end;
            this.sinkDown();
        }
        return min;
    }
    sinkDown(){
        let idx = 0;
        let element = this.values[0]
        while(true) {
            let leftChildIdx = 2 * idx + 1;
            let rightChildIdx = 2 * idx + 2;
            let leftChild, rightChild;
            let swap = null;

            if (leftChildIdx < this.values.length){
                leftChild = this.values[leftChildIdx]
                if (leftChild.priority < element.priority) {
                    swap = leftChildIdx
                }
            }
            if (rightChildIdx < this.values.length){
                rightChild = this.values[rightChildIdx]
                if (
                    (swap === null && rightChild.priority < element.priority) ||
                    (swap !== null && rightChild.priority < leftChild.priority)
                ) {
                    swap = rightChildIdx
                }
            }

            if (swap === null) break;
            this.values[idx] = this.values[swap]
            this.values[swap] = element;
            idx = swap;
        }
    }
}

class Node {
    constructor(val, priority) {
        this.val = val;
        this.priority = priority;
    }
}

let heap = new PriorityQueue();

heap.enqueue("test1", 1)
heap.enqueue("test5", 5)
heap.enqueue("test2", 2)
heap.dequeue()

console.log(heap.values)