/*
Push the value into the values property on the heap.
Bubble Up:
Create a variable called index which is the length of the values property -1
Create a variable called parentIndex which is the floor of (index-1)/2
Keep looping as long as the values element at the parentIndex is less than the values element at the child index
Swap the value of the values element at the parentIndex with the value of the element property at the child index
Set the index to be the parentIndex, and start over
*/

class MaxBinaryHeap {
    constructor(){
        this.values = [41, 39, 33, 18, 27, 12]
    }

    insert(element) {
        this.values.push(element);
        this.bubbleUp();
    }
    bubbleUp(){
        let idx = this.values.length - 1;
        const element = this.values[idx];
        while(idx > 0) {
            let parentIdx = Math.floor((idx - 1)/2);
            let parent = this.values[parentIdx];
            if (element <= parent) break;
                this.values[parentIdx] = element;
                this.values[idx] = parent;
                idx = parentIdx;
        }
    }
    /* swap the first value in the values property with the last one
    Pop the values property so you can return the value at the end
    have the new root sink down  to the correct spot:
    your parent index starts at 0 (the root)
    find the index of the left child: 2*index+1 (make sure its not out of bounds)
    find the index of the right child: 2*index +2 (make sure its not out of bounds)
    if the left or right child is greater than the element...swap. if both left and right children are larger, swap with the largest child.
    the child index you swapped to now becomes the parent index
    keep looping and swapping until neither child is larger than the element 
    return the root */
    extractMax(){
         /* swap the first value in the values property with the last one */
        const max = this.values[0]
        const end = this.values.pop();
        if(this.values.length === 0) {
            this.values[0] = end;
            this.sinkDown();
        }
       
        return max
    }
    sinkDown(){
        let idx = 0;
        let element = this.values[0]
        while(true) {

        let leftChildIdx = 2*idx + 1;
        let rightChildIdx = 2*idx + 2;
        let leftChild, rightChild;
        let swap = null;
        if (leftChildIdx < this.values.length){
            leftChild = this.values[leftChildIdx]
            if (leftChild > element) {
                swap = leftChildIdx
            }
        }
        if (rightChildIdx < this.values.length){
            rightChild = this.values[rightChildIdx]
            if (
                (swap === null && rightChild > element) ||
                (swap !== null && rightChild > leftChild)
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

let heap = new MaxBinaryHeap();

heap.insert(55)
console.log(heap.extractMax())
console.log(heap.values)