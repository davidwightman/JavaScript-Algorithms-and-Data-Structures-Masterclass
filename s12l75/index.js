const selectionSort = (arr) => {

for (let i = 0; i < arr.length; i++) {
    // store the first element as the smallest value
    let smallestValue = i
// compare this item to the next item in the array until you find a smaller number
    
for (var j = i+1; j < arr.length  ; j++){
    if (arr[smallestValue] > arr[j]){
            smallestValue = j
        }
    }
    if (i !== smallestValue){
        [arr[i], arr[smallestValue]] = [arr[smallestValue], arr[i]]
    }

    }

// if a smaller number is found, designate that smaller number to be the new  minimum and continue until the end of the array
// if the minimum is not the value (index) you initially began with, swap the two values
// repeat this with the next element until the array is sorted
return arr;
}
console.log(selectionSort([1,5, 3, 2, 7, 11, 9, 4]))
// O(n^2)