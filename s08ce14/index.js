// fib(4) // 3
// fib(10) // 55
// fib(28) // 317811
// fib(35) // 9227465

function fib(num){
    let total1 = 1
    let total2 = 1
    let newtotal = 1
    function recursive(t1, t2){
        newtotal = t1 +t2
        total2 = t1
        total1 = newtotal
    }
    
    
    for (let i = 0; i < num - 2; i++){
        recursive(total1, total2)
    }
    
    return newtotal
    // add whatever parameters you deem necessary - good luck!  
  }