function bubbleSort (arr) {
    //start looping at variable called i at end of the array toward begging
    for ( i = arr.length; i > 0; i--) {
    //start an inner loop with a variable called j from the begginning until i -1
        for (j = 0; j < i; j++){
             //if arr[j] is greater than arr[j+1], swap those values
             if (arr[j] > arr[i]) {
                 [arr[j], arr[i]] = [arr[i], arr[j]]
             }

        }
    }
    // retuurn sortarray
    return arr
}

console.log(bubbleSort([1, 3, 2, 6, 9, 8, 7, 35, 25, 14]))
