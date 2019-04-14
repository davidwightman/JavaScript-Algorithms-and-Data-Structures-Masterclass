function pivot(arr, startIndex = 0, endIndex = arr.length - 1) {  
  //designate an element as the pivot
  //rearange elements in the array so that all values less tahn the pivot are moved to the left of the pivot and all values greater than the pivot are moved to the right of the pivot
  // order of elements on either side of the pivot doesn't matter
  // the helper should do this in place, that is it should not create a new array
  // when complete, the helper should return the index of the pivot

  // it will help to accept three arguments: an array, a start index, and an end index (these can default to 0 and the array length minus 1, respectively)
  // grab the pivot from the start of the array
  //store the current pivot index in a variable (this will keep track of where the pivot should end up)
  let pivot = arr[startIndex]
  let currentPivotIndex = startIndex
  // loop throught the array from the start until the end
  for (i = startIndex + 1; i <= endIndex; i++) {
  // - if the pivot is greatern than the current element, increment the pivot index variable 
  //   and then swap the current element with the element at the pivot index
    if (pivot > arr[i]){
      currentPivotIndex++
      [arr[currentPivotIndex], arr[i]] = [arr[i], arr[currentPivotIndex]];
    }
  }
  // swap the starting element (i.e. the pivot) with the pivot index
  [arr[startIndex], arr[currentPivotIndex]] = [arr[currentPivotIndex], arr[startIndex]];
  // return the pivot index
  return currentPivotIndex

}

function quickSort (arr, left = 0 , right = arr.length - 1) {
  if (left < right){
    let pivotIndex = pivot(arr, left, right)
    quickSort(arr, left, pivotIndex - 1);
    quickSort(arr, pivotIndex + 1, right);
  }
  return arr;
}

console.log(quickSort([28,41,4,11,16,1,40,14,36]))