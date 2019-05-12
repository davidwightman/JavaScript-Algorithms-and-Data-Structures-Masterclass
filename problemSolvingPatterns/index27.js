function same (arr1, arr2) {
    if (arr1.length !== arr2.length) return false
    var squares = {}
    for (let i = 0; i < arr1.length; i++){
        squares[(arr1[i])^2]= true
    }
    console.log(squares)
    for (let i = 0; i < arr2.length; i++){
       if(squares[arr2[i]] !== true) return false
       
    }
    return true
}

console.log(same([2,3,4], [4,9,16]))