const insertionSort = (arr) => {
let currentValue
// -start by picking the second element in the array
for (let i = 1; i < arr.length; i++){
    currentValue = arr[i]
    for (var j = i-1; j >= 0 && arr[j] > currentValue; j--){
        arr[j +1] = arr[j]
    
}
arr[j+1] = currentValue
console.log(i)
// -now compare the second element with the one before it and swap if necessary
// -continue to the next element and if it is in the incorrect order, iterate through
//   the sorted portion (left side) to place the element in the correct place.
// -repeat until the array is sorted
}
return arr;
}

console.log(insertionSort([1, 7, 22, 8, 35, 9, 55, 54, 2, 96]))
