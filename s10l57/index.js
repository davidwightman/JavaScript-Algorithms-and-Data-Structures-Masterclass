function linearSearch (arr, val) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === val) {
            return i
        }
    }
    return -1
}

console.log(linearSearch([2,4,6,8,90], 6));