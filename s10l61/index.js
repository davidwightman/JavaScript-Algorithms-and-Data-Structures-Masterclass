function binarySearch (arr, val) {
    let left = 0;
    let right = arr.length-1;
    let middle = Math.floor((left + right) / 2)

    while( arr[middle] !== val && left <= right) {
        if (val < arr[middle]) {
            right = middle - 1
            middle = Math.floor((left + right) / 2)
        } else {
            left = middle + 1
            middle = Math.floor((left + right) / 2)
        }
    }
    if (arr[middle] == val){
        return middle
    } 
    return -1
}

console.log(binarySearch([1,2,3,5,6,7,90,91], 89))