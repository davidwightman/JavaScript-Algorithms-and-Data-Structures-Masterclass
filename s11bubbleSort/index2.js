function bubbleSort (arr) {
    for (var i = arr.length + 1; i >= 0; i--){
        for (var j = 0; j < i-1; j++){
            if (arr[j] > arr[j +1]){
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
            }
        }
    }
    return arr
}
console.log(bubbleSort([4,3,2,8,65,32,1]))