// just the merge part of merge sort

function mergeArrays(arr1, arr2){
    //create an empty array
    let newArr = []
    // take a look at the smallest values in each input array
    let i = 0
    let j = 0
    // while there are still values we haven't looked at...
    while (i< arr1.length && j < arr2.length) {
            // console.log(newArr)
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

console.log(mergeArrays([1, 4, 7, 9], [2, 3, 5, 6, 12, 13, 17]))