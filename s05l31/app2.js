function countUniqueValues(arr) {
    let left = 0
    let right = 1
    let totalUnique
    for (let i of arr) {
        if (arr[left] !== arr[right]) {
           
        } else if (arr[left] === arr[right]){
            arr.pop(arr[right])
        }
    }
    return totalUnique
}
console.log(countUniqueValues([1,1,1,1,1,1,2]))
console.log(countUniqueValues([]))
console.log(countUniqueValues([-2,-1,-1,0,1]))