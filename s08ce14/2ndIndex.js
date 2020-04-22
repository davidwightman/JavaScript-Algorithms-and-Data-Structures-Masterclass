// function fib(num) {
//     let currentNum = 1
//     let previousNum = 1
//     let times = 0
//     function recursive (num) {
//         if (times === num -2) return
//         times++
//         let temp = currentNum
//         currentNum = previousNum + currentNum
//         previousNum = temp
//         recursive(num-1)
//     }
//     recursive(num)
//     return currentNum
// }

function fib(n){
    if (n <= 2) return 1;
    return fib(n-1) + fib(n-2);
}

console.log(fib(4)) // 3
console.log(fib(10)) // 55
console.log(fib(28)) // 317811
console.log(fib(35)) // 9227465