function same(arr1, arr2) {
    const newArr = [];
    arr1.forEach((item) => {
        arr2.forEach((item2) =>{
            if ((item*item) === item2) {
                newArr.push(item)
            }
        })
    })
    if (arr1.length === newArr.length && arr1.every(function(value, index) { return value === newArr[index]})){
        return true
    } else return false
};

console.log(same([1,2,3], [4,1,9]))
console.log(same([1,2,3], [3,1,9]))

// mistake: what if arr2 has way more numbers than arr1