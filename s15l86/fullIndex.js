// full merge sort

function mergeSort(arr){
    // base case
    if (arr.length <= 1) {
        return arr
    }
    // break up the array into halves until you have arrays that are empty or have one element

    let halfValue = Math.floor(arr.length / 2);
    let firstHalf = mergeSort(arr.slice(0, halfValue));
    let lastHalf = mergeSort(arr.slice(halfValue));
    //once you have smaller sorted arrays, merge those arrays with other sorted arrays until you are back at the full length of the array
    // once the array has been merged back together, return the merged (and sorted) array
    return merge(firstHalf, lastHalf)
}

function merge(arr1, arr2){
    //create an empty array
    let newArr = []
    // take a look at the smallest values in each input array
    let i = 0
    let j = 0
    // while there are still values we haven't looked at...
    while (i< arr1.length && j < arr2.length) {
        // if the value in the first array is smaller than the value in the second
            // array, push the value in the first array into our results and move on to
            // the next value in the first array
        if (arr1[i] < arr2[j]){
            newArr.push(arr1[i])
            i++
        }
        // if the value in the first array is larger than the value in the second array, push the value in the second array into our results and move on to the next value in the second array
        if (arr1[i] > arr2[j]){
            newArr.push(arr2[j])
            j++
        }
    // Once we exhaust one array, push in all remaining values from the other array
        while (arr1.length > i) {
            newArr.push(arr1[i])
            i++
        }
        while (arr2.length > j) {
            newArr.push(arr2[j])
            j++
        }
    }
    return newArr
}

console.log(mergeSort([2, 7, 3, 5, 10, 6, 12, 13, 20, 17]))
