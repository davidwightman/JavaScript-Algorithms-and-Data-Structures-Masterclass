// productOfArray([1,2,3]) // 6
// productOfArray([1,2,3,10]) // 60

function productOfArray (arr) {
    let total = 1;
    function recursive (arr) {
    if (arr.length === 0) return;
    total = total * arr[arr.length - 1]
    arr.pop()
    recursive(arr)
    }
    recursive(arr)
    return total;
}
console.log(productOfArray([1,2,3]))
console.log(productOfArray([1,2,3,10]))