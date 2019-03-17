// const binarySearch = (arr, num) =>{
//     let first = arr[0]
//     let last = arr[arr.length-1];

//     while (first < last) {
//         const middle = first + last / 2
//         if (middle === num) return middle
//         if (middle > num) {
//             first = middle
//         } else if (middle < num) { last = middle}
//         else return -1
//     }

// }

const binarySearch = (arr, num) =>{
    let first = 0
    let last = arr.length-1;
    let middle = Math.floor((first + last) / 2)

   // if (arr[first] === num) return 0
    // if (arr[last] === num) return arr[arr.length -1]

    while (arr[middle] !== num) {
        // const middle = Math.floor((first + last) / 2)
        if (arr[middle] === num) return middle
        if (arr[middle] > num) {
            first = middle
            middle = Math.floor((first + last) / 2)
        } else if (arr[middle] < num) {
            last = middle
            middle = Math.floor((first + last) / 2)
        } else return -1
        return middle
    }

}

console.log(binarySearch([1,2,3,4,5], 2)) // 1
console.log(binarySearch([1,2,3,4,5], 3)) // 2
console.log(binarySearch([1,2,3,4,5], 6)) // -1