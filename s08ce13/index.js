// SAMPLE INPUT/OUTPUT
// recursiveRange(6) // 21
// recursiveRange(10) // 55 

function recursiveRange(num){
    if (num === 0 ) return 0
   let total = 0 

   function recursiveFunc(t, n){
       total = total + n
       num = n -1
   }

   while (num > 0 ){
    recursiveFunc(total, num)
   }

   return total;
}


console.log(recursiveRange(6)) // 21
console.log(recursiveRange(10)) // 55 
