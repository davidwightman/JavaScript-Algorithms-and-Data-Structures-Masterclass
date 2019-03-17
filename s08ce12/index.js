// productOfArray([1,2,3]) // 6
// productOfArray([1,2,3,10]) // 60

function productOfArray(arr){
    let product = 1
    function doIt(a){
        console.log('david')
    product = a[0] * product
    arr.shift()
    }
    while (arr.length > 0){
        doIt(arr)
    }
    return product

}

console.log(productOfArray([1,2,3]))

console.log(productOfArray([1,2,3,10]))