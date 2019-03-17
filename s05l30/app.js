// naive version
// n**2 solution
function sumZero(arr){
    for (let val of arr) {
        for (let val2 of arr) {
            if (val + val2 === 0 ){
                return [val, val2]
            }
        }
    }
}

console.log(sumZero([-3, -2, -1, 0, 1, 2, 3]))
